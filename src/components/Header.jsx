import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-white.png';
import menu from '../assets/menu.svg';
import ContactForm from '../components/contactform';
import bgImage from '../assets/bg/bg.jpeg';
import bgImage3 from '../assets/bg/bg3.webp';
import bgImage2 from '../assets/bg/bg2.webp';
import bgImage4 from '../assets/bg/bg4.webp';
import bgImage5 from '../assets/bg/bg5.webp';
import bgImage6 from '../assets/bg/bg6.webp';
import bgImage7 from '../assets/bg/bg7.webp';
import bgImage8 from '../assets/bg/bg8.webp';
import bgImage9 from '../assets/bg/bg9.jpeg';
import bgImage10 from '../assets/bg/bg10.webp';
import bgImage11 from '../assets/bg/bg11.webp';
import placeholderImage from '../assets/bg/bg.jpeg';


const Header = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false); // Track if all images have loaded


  const toggleMenu = () => {
    document.getElementById('links').classList.toggle('show');
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  const bgImages = [
    bgImage, bgImage3, bgImage2, bgImage4, bgImage5, bgImage6, bgImage7, bgImage8, bgImage9,bgImage10,bgImage11
  ];

  useEffect(() => {
    const interval = setInterval(changeBackground, 7500);
    return () => clearInterval(interval);
  }, []);

  const changeBackground = () => {
    setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
  };

  useEffect(() => {
    const interval = setInterval(changeBackground, 7500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Create an array to store promises for each image load event
    const imageLoadPromises = bgImages.map((imageSrc) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = resolve;
      });
    });

    // When all images have loaded, update the state to indicate that the images are loaded
    Promise.all(imageLoadPromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);


  return (
    <header className="sticky-nav" style={{ backgroundImage: `url(${imagesLoaded ? bgImages[currentBgIndex] : placeholderImage})` }}>
      <nav>
        <img id="logo" src={logo} alt="Tour Planners Logo" />
        <div id="links" className="links">
        <a href="#AboutUs">About Us</a>
          <a href="#villarentals">Villa Rentals</a>
          <a href="#explore">Boat Rentals</a>
          <a href="#transportation">Transportation Services</a>
          <a href="#Personaltrainer">Personal Trainer & Chef</a>
          
        </div>
        <img onClick={toggleMenu} id="menu" src={menu} alt="mobile menu" />
      </nav>
      <h1>Discover Crete with Tour Planners</h1>
      <h3>Your Trusted Guides for Memorable Experiences</h3>

      <div className="section">
        <section>
          <h4>Contact Us for Special Rental Packs</h4>
          <p>
            Get in touch with us to create a custom rental package that includes villa rental, boat rental, transportation to the villa from the arrival station, and extra services.
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
