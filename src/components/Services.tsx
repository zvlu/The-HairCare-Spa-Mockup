import React from 'react';
import './Services.css';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  image,
}) => {
  return (
    <div className="service-card">
      <div className="service-image">
        <div
          className="image-placeholder"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <p className="service-price">Starting at {price}</p>
      <button className="service-btn">Book Now</button>
    </div>
  );
};

const Services: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: 'Luxury Hair Treatment',
      description:
        'Revitalize your hair with our premium conditioning treatments designed for your specific hair type',
      price: '$85',
      image: '/service-treatment.jpg',
    },
    {
      title: 'Hair Styling & Coloring',
      description:
        'Express yourself with our custom color services and professional styling options',
      price: '$120',
      image: '/service-color.jpg',
    },
    {
      title: 'Scalp Therapy',
      description:
        'Restore balance to your scalp with our specialized treatments focused on hair and scalp health',
      price: '$95',
      image: '/service-scalp.jpg',
    },
    {
      title: 'Hair Spa Experience',
      description:
        'Our signature spa experience combines massage, steam therapy, and deep conditioning',
      price: '$150',
      image: '/service-spa.jpg',
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Indulge in our premium hair wellness treatments
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
