import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-white.png';
import menu from '../assets/menu.svg';
import ContactForm from '../components/contactform';
import bgImage from '../assets/bg/bg.png';
import bgImage3 from '../assets/bg/bg3.png';

import bgImage2 from '../assets/bg/bg2.png';
import bgImage4 from '../assets/bg/bg4.png';
import bgImage5 from '../assets/bg/bg5.png';
import bgImage6 from '../assets/bg/bg6.png';
import bgImage7 from '../assets/bg/bg7.png';
import bgImage8 from '../assets/bg/bg8.png';
import bgImage9 from '../assets/bg/bg9.png';


const Header = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const toggleMenu = () => {
    document.getElementById('links').classList.toggle('show');
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

const bgImages = [
    bgImage, bgImage3, bgImage2, bgImage4 ,bgImage5 ,bgImage6 ,bgImage7,bgImage8,bgImage9,
  ];

  useEffect(() => {
    const interval = setInterval(changeBackground, 3000);

    return () => clearInterval(interval);
  }, []);

  const changeBackground = () => {
    setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
  };

  return (
    <header style={{ backgroundImage: `url(${bgImages[currentBgIndex]})` }}>
      <nav>
        <img id="logo" src={logo} alt="Tour Planners Logo" />
        <div id="links" className="links">
          <a href="#explore">Boat Rentals</a>
          <a href="#villarentals">Villa Rentals</a>
          <a href="#transportation">Transportation Services</a>
          
          <a href="#Personaltrainer">Personal Trainer & Chef</a>
          <a href="#OtherServices">Other Services</a>
        </div>
        <img onClick={toggleMenu} id="menu" src={menu} alt="mobile menu" />
      </nav>
      <h1>Discover Crete with Tour Planners</h1>
      <h3>Your Trusted Guides for Memorable Experiences</h3>

      <div className="section">
        <section>
          <h4>Contact Us for Special Rental Packs</h4>
          <p>
            Get in touch with us to create a custom rental package that includes boat rental, villa rental, transportation to the villa from the arrival station, and extra services.
          </p>
        </section>
      </div>

      {showContactForm && (
        <ContactForm onClose={handleCloseContactForm} defaultSubject="Contact Us For Special Rental Pack" />
      )}
    </header>
  );
};

export default Header;
