import React, { useState } from 'react';
import './Testimonials.css';

interface TestimonialProps {
  name: string;
  service: string;
  quote: string;
  image: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  service,
  quote,
  image,
  rating,
}) => {
  // Create array for rating stars
  const stars = Array(5)
    .fill(0)
    .map((_, index) => index < rating);

  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <div className="testimonial-stars">
          {stars.map((filled, index) => (
            <span key={index} className={`star ${filled ? 'filled' : ''}`}>
              ★
            </span>
          ))}
        </div>
        <p className="testimonial-quote">"{quote}"</p>
        <div className="testimonial-author">
          <div className="author-image">
            <div
              className="image-placeholder"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
          <div className="author-info">
            <h4 className="author-name">{name}</h4>
            <p className="author-service">{service}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: 'Jennifer Parker',
      service: 'Luxury Hair Treatment',
      quote:
        'The scalp massage and conditioning treatment was absolutely divine. My hair has never felt so healthy and vibrant! The staff made me feel pampered from start to finish.',
      image: '/testimonial-1.jpg',
      rating: 5,
    },
    {
      name: 'Marcus Wilson',
      service: 'Scalp Therapy',
      quote:
        "As someone who's struggled with dry scalp for years, the therapeutic treatment I received was life-changing. The specialist was knowledgeable and the results were immediate.",
      image: '/testimonial-2.jpg',
      rating: 5,
    },
    {
      name: 'Sophia Rodriguez',
      service: 'Hair Coloring & Spa',
      quote:
        'The coloring service was perfectly executed, and the additional spa treatment left my hair feeling incredible. This is now my go-to place for all my hair care needs.',
      image: '/testimonial-3.jpg',
      rating: 4,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">Client Experiences</h2>
        <p className="section-subtitle">
          Hear what our clients have to say about their transformations
        </p>
        <div className="testimonials-slider">
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            ❮
          </button>
          <div className="testimonials-wrapper">
            <Testimonial
              name={testimonials[currentSlide].name}
              service={testimonials[currentSlide].service}
              quote={testimonials[currentSlide].quote}
              image={testimonials[currentSlide].image}
              rating={testimonials[currentSlide].rating}
            />
          </div>
          <button className="slider-btn next-btn" onClick={nextSlide}>
            ❯
          </button>
        </div>
        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
