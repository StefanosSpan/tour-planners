import React, { useState, useEffect } from 'react';
import './App.css';
import Personaltrainer from './components/Personaltrainer';
import ExploreSection from './components/ExploreSection';
import VillaRentals from './components/VillaRentals';
import Header from './components/Header';
import Footer from './components/Footer';
import Transportation from './components/transportation';
import Privatechef from './components/PrivateChef';
import OtherServicesPage from './components/OtherServicesPage';



function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 200; // Adjust this value as needed
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollThreshold) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Enables smooth scrolling behavior
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <ExploreSection />
        <VillaRentals />
        <Transportation />
        <Personaltrainer />
       
        <OtherServicesPage />
        <Footer />
        <button className={`scroll-button ${showScrollButton ? 'show' : ''}`}
          onClick={scrollToTop}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L3 13h9v9l9-11h-9z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
