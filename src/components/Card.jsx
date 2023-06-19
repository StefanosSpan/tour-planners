import React, { useState, useEffect, useRef } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import ContactForm from '../components/contactform.jsx';
import ViewDetails from '../components/Viewdetails.jsx';

const Card = ({ bgUrl, title, area, price, photos }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  
    const handleContactButtonClick = () => {
      setShowContactForm(true);
    };
  
    const handleViewDetailsClick = () => {
      setShowDetails(true);
    };
  
    const handleCloseForm = () => {
      setShowContactForm(false);
      setShowDetails(false);
    };
  
    const handleCloseDetails = () => {
      setShowDetails(false);
    };
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const handleVisibilityChange = (visible) => {
      setIsVisible(visible);
    };
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust the threshold value as needed
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
  
      if (cardRef.current) {
        observer.observe(cardRef.current);
      }
  
      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, []);

  return (
    <VisibilitySensor onChange={handleVisibilityChange}>
      <div
        className={`card-container ${isHovered ? 'hovered' : ''} ${isVisible ? 'show' : ''}`}
        ref={cardRef}
      >
        <div
          className={`card ${isHovered ? 'show' : ''}`}
          style={{ backgroundImage: `url(${bgUrl})` }}
          onClick={handleViewDetailsClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovered && (
            <div className="hover-form">
              <p>{price}</p>
            </div>
          )}
        </div>
        <div className={`info-panel ${isHovered ? 'hovered' : ''}`}>
          <div className="info">
            <h5>{title}</h5>
            <button className="btn btn-grey" onClick={handleContactButtonClick}>
              Book Now
            </button>
            <button className="btn btn-grey" onClick={handleViewDetailsClick}>
              View Details
            </button>
          </div>
        </div>
        {showContactForm && <ContactForm onClose={handleCloseForm} defaultSubject={title} />}
        {showDetails && (
          <ViewDetails
            photos={photos}
            title={title}
            area={area}
            price={price}
            onClose={handleCloseDetails}
            bookNowButton={
              <button className="btn btn-grey" onClick={handleContactButtonClick}>
                Book Now
              </button>
            }
          />
        )}
      </div>
    </VisibilitySensor>
  );
};

export default Card;
