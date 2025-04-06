import React, { useState, FormEvent, ChangeEvent } from 'react';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Booking submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      notes: '',
    });
    // Reset submission status after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  const services = [
    'Luxury Hair Treatment',
    'Hair Coloring',
    'Hair Styling',
    'Scalp Therapy',
    'Full Hair Spa Experience',
    'Hair Consultation',
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Book Your Appointment</h2>
        <p className="section-subtitle">
          Your journey to beautiful, healthy hair begins here
        </p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Visit Us</h3>
              <p>123 Serenity Lane, Beauty District</p>
              <p>Los Angeles, CA 90001</p>
            </div>
            <div className="contact-item">
              <h3>Hours</h3>
              <p>Monday - Friday: 9am - 8pm</p>
              <p>Saturday: 10am - 6pm</p>
              <p>Sunday: 11am - 5pm</p>
            </div>
            <div className="contact-item">
              <h3>Contact</h3>
              <p>Phone: (555) 123-4567</p>
              <p>Email: appointments@luxehairspa.com</p>
            </div>
            <div className="contact-social">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  IG
                </a>
                <a href="#" className="social-icon">
                  FB
                </a>
                <a href="#" className="social-icon">
                  TW
                </a>
                <a href="#" className="social-icon">
                  PT
                </a>
              </div>
            </div>
          </div>

          <div className="booking-form-container">
            {formSubmitted ? (
              <div className="form-success-message">
                <h3>Thank You for Booking!</h3>
                <p>
                  We've received your appointment request and will confirm
                  shortly via email or phone.
                </p>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Preferred Time</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="notes">Special Requests or Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Book Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
