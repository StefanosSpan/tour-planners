import React, { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Personaltrainer from './components/Personaltrainer';
import ExploreSection from './components/ExploreSection';
import VillaRentals from './components/VillaRentals';
import Header from './components/Header';
import Footer from './components/Footer';
import Transportation from './components/transportation';
import OtherServicesPage from './components/OtherServicesPage';
import AboutUs from './components/AboutUs';
import arrow from './assets/arrowup.svg'



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

  useEffect(() => {
    toast.info('Summer Offer! Free Transportation to the Villa from the arrival station. Book yours now!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000, // Display duration in milliseconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'custom-toast', // Add the custom toast class here
      bodyClassName: 'custom-toast-body', // Add the custom toast body class here
      closeButton: false, // Disable the close button
    });
    
  }, []);

  return (
    <div>
      <Header />
      <AboutUs />
      <div className="container">
        <VillaRentals />
        <ExploreSection />
        <Transportation />
        <Personaltrainer />
        <OtherServicesPage />
        <Footer />
        <button className={`scroll-button ${showScrollButton ? 'show' : ''}`} onClick={scrollToTop}>
  <img src={arrow} style={{ width: '20px', height: '20px' }} alt="Scroll to Top" />
</button>

        
      </div>
    </div>
  );
}

export default App;
