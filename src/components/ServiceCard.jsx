import React, { useState } from 'react';
import ContactForm from '../components/contactform.jsx';
import ViewDetails from '../components/Viewdetails.jsx';

const ServiceCard = ({ bgUrl, title, area, price, photos }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleContactButtonClick = () => {
    const elements = document.querySelectorAll(
      '.links, nav, header, footer, .card-container, .card, .info-panel, .info'
    );
    elements.forEach((element) => {
      element.style.zIndex = 'initial';
    });
    setShowContactForm(true);
  };

  const handleViewDetailsClick = () => {
    const elements = document.querySelectorAll(
      '.links, nav, header, footer, .card-container, .card, .info-panel, .info'
    );
    elements.forEach((element) => {
      element.style.zIndex = 'initial';
    });
    setShowDetails(true);
  };

  const handleCloseForm = () => {
    const elements = document.querySelectorAll(
      '.links, nav, header, footer, .card-container, .card, .info-panel, .info'
    );
    elements.forEach((element) => {
      element.style.zIndex = '';
    });
    setShowContactForm(false);
    setShowDetails(false);
  };

  const handleCloseDetails = () => {
    const elements = document.querySelectorAll(
      '.links, nav, header, footer, .card-container, .card, .info-panel, .info'
    );
    elements.forEach((element) => {
      element.style.zIndex = '';
    });
    setShowDetails(false);
  };

  return (
    <div className="card-container">
      <div
        className="card"
        style={{ backgroundImage: `url(${bgUrl})` }}
        onClick={handleViewDetailsClick}
      ></div>
      <div className="info-panel">
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
      {showContactForm && <ContactForm onClose={handleCloseForm} defaultSubject={title}/>}
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
  );
};

export default ServiceCard;
