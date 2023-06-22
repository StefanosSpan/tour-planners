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
          <p>Welcome to Tour Planners, your premier destination for discovering the enchanting wonders of Crete and creating unforgettable memories. As your trusted guides, we are dedicated to providing exceptional rental services that redefine luxury and adventure.</p>
          <br/>
          <p>At Tour Planners, we specialize in curating extraordinary experiences through our extensive range of services, including exquisite villa rentals, exhilarating boat rentals, and a host of other personalized offerings. Whether you seek a serene retreat in a luxurious villa, an exhilarating boat expedition across the crystalline waters of Crete, or bespoke services tailored to your desires, we are here to surpass your expectations.</p>
          <br/>
          <p>Our expert team boasts unrivaled local knowledge and a deep passion for delivering excellence. With their guidance, we are committed to crafting bespoke vacations that cater to your unique preferences and needs. Your journey with us will be characterized by unparalleled attention to detail, ensuring that every aspect of your vacation in Crete is meticulously tailored to perfection.</p>
          <br/>
          <p>Contact us today to begin crafting your dream getaway. Our custom rental packages encompass not only boat and villa rentals but also transportation from the arrival station to your chosen villa, along with any additional services you may require. With our unwavering commitment to your satisfaction, we are dedicated to planning the flawless vacation you deserve on the captivating island of Crete.</p>
        </div>
        
        <section className="services">
          <h2>Services</h2>
          <ul>
            <li>Villa Rentals</li>
            <li>Boat Rentals</li>
            <li>Transportation Services</li>
            <li>Personal Trainer & Chef</li>
            <li>Car Rental</li>
            <li>Concierge Services</li>
            <li>Private Guided Tours</li>
            <li>Scuba Diving Excursions</li>
            <li>Yoga and Wellness Retreats</li>
            <li>Massage Services</li>
            {/* Add more services as needed */}
          </ul>
        </section>
      </div>
      
      {showContactForm && <ContactForm onClose={handleCloseContactForm} defaultSubject="Rental Inquiry" />}
    </section>
  );
};

export default AboutUs;
