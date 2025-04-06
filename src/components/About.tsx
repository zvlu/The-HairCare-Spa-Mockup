import React from 'react';
import './About.css';

interface StylistProps {
  name: string;
  specialty: string;
  experience: string;
  image: string;
}

const Stylist: React.FC<StylistProps> = ({
  name,
  specialty,
  experience,
  image,
}) => {
  return (
    <div className="stylist-card">
      <div className="stylist-image">
        <div
          className="image-placeholder"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <h3 className="stylist-name">{name}</h3>
      <p className="stylist-specialty">{specialty}</p>
      <p className="stylist-experience">{experience}</p>
    </div>
  );
};

const About: React.FC = () => {
  const stylists: StylistProps[] = [
    {
      name: 'Emma Johnson',
      specialty: 'Color Specialist',
      experience: '10+ years experience',
      image: '/stylist-1.jpg',
    },
    {
      name: 'Michael Stevens',
      specialty: 'Hair Treatment Expert',
      experience: '8+ years experience',
      image: '/stylist-2.jpg',
    },
    {
      name: 'Sophie Williams',
      specialty: 'Styling & Extensions',
      experience: '12+ years experience',
      image: '/stylist-3.jpg',
    },
    {
      name: 'David Chen',
      specialty: 'Scalp Therapy Specialist',
      experience: '7+ years experience',
      image: '/stylist-4.jpg',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Our Spa</h2>
          <div className="about-grid">
            <div className="about-image">
              <div className="image-placeholder"></div>
            </div>
            <div className="about-text-container">
              <p className="about-text">
                At LuxeHair Spa, we believe that exceptional hair care goes
                beyond aesthetics. Our approach combines luxury treatments with
                therapeutic techniques to create a holistic experience that
                nurtures both your hair and your wellbeing.
              </p>
              <p className="about-text">
                Founded in 2010, our spa has grown to become the premier
                destination for those seeking transformative hair care
                experiences. Our team of certified specialists is dedicated to
                using only the finest organic and sustainable products for all
                our treatments.
              </p>
              <p className="about-text">
                Every visit to LuxeHair Spa is tailored to your individual
                needs, beginning with a thorough consultation to understand your
                hair concerns and wellness goals.
              </p>
            </div>
          </div>
        </div>
        <div className="team-section">
          <h3 className="team-title">Meet Our Specialists</h3>
          <div className="team-grid">
            {stylists.map((stylist, index) => (
              <Stylist
                key={index}
                name={stylist.name}
                specialty={stylist.specialty}
                experience={stylist.experience}
                image={stylist.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
