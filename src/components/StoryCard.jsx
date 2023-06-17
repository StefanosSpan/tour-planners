import React, { useState } from 'react';
import ContactForm from '../components/contactform.jsx';
import ViewDetails from '../components/Viewdetails.jsx';

const StoryCard = ({ bgUrl, chapter }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleContactButtonClick = () => {
    const elements = document.querySelectorAll(".card-container:not(.current)");
    elements.forEach((element) => {
      element.style.zIndex = "initial";
    });
    setShowContactForm(true);
  };

  const handleViewDetailsClick = () => {
    // Remove z-index from other elements
    const elements = document.querySelectorAll(".card-container:not(.current)");
    elements.forEach((element) => {
      element.style.zIndex = "initial";
    });
  

  const handleCloseForm = () => {
    setShowContactForm(false);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (




    <div className="story">
      <img src={bgUrl} width="100%" alt="Story chapter" />
      <div className="info-panel">
        <div className="info">
          <h4>Villa {chapter}</h4>
          <button className="btn btn-grey" onClick={handleContactButtonClick}>
            Book Now
          </button>
          <button className="btn btn-grey" onClick={handleViewDetailsClick}>
            View Details
          </button>
        </div>
      </div>
      {showContactForm && <ContactForm onClose={handleCloseForm} />}
      {showDetails && (
        <ViewDetails
          photos={[]} // Update with relevant details
          title={`Chapter ${chapter}`}
          area={null} // Update with relevant details
          price={null} // Update with relevant details
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
}
export default StoryCard;
