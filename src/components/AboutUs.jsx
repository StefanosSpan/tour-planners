import React, { useState, useEffect, useRef } from 'react';
import ContactForm from './contactform';

const AboutUs = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.001, // Adjust the threshold value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, options);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

  }, []);

  const handleContactButtonClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <section id="AboutUs" className="about-us" ref={aboutRef}>
      <div className="content-wrapper">
        <div className="text-content">
          <h2>About Us</h2>
          <br/>
          <br/>
          <p>Discover Crete with Tour Planners, your trusted guides for memorable experiences.</p>
          <br/>
          <p>At Tour Planners, we specialize in providing exceptional rental services, including villa rentals, boat rentals, and a range of other services. Whether you're looking for a luxurious villa to unwind, a thrilling boat adventure 
            on the crystal-clear waters of Crete, or other personalized services, we have you covered.</p>
          <br/>
          <p>With our expert team and local knowledge, we strive to create unforgettable experiences for our clients. Our goal is to make your vacation in Crete truly exceptional, tailored to your preferences and needs.</p>
          <br/>
          <p>Contact us today to create a custom rental package that includes boat rental, villa rental, transportation to the villa from the arrival station, and any extra services you may require. We are here to assist you in 
            planning the perfect vacation on the beautiful island of Crete.</p>
          
        
        </div>
        
        <section className="services">
          <h2>Services</h2>
          <ul>
            <li>Villa Rentals</li>
            <li>Boat Rentals</li>
            <li>Transportation Services</li>
            <li>Personal Trainer & Chef</li>
            <li>Car Rental</li>
            <li>Concierge Servicers</li>
            
            {/* Add more services as needed */}
          </ul>
        </section>
      </div>
      
      {showContactForm && <ContactForm onClose={handleCloseContactForm} defaultSubject="Rental Inquiry" />}
    </section>
  );
};

export default AboutUs;
