import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero floating-container">
      <div className="floating-bubble"></div>
      <div className="floating-bubble"></div>
      <div className="floating-bubble"></div>
      <div className="floating-bubble"></div>
      <div className="floating-bubble"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Luxury Hair Care & Spa Experience</h1>
          <p className="hero-subtitle">
            Where beauty meets relaxation for a transformative hair wellness
            journey
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Book Appointment</button>
            <button className="btn btn-secondary">View Services</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Woman with luxurious hair in a spa-like setting"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
