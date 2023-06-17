import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ViewDetails = ({ bgUrl, title, area, price, onClose, bookNowButton, photos }) => {
  const [fullscreen, setFullscreen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);

  const toggleFullscreen = (index) => {
    setFullscreen(!fullscreen);
    setFullscreenIndex(index);
  };

  const closeFullscreen = () => {
    setFullscreen(false);
  };

  const handleFullscreenNext = () => {
    const nextIndex = (fullscreenIndex + 1) % photos.length;
    setFullscreenIndex(nextIndex);
  };

  const handleFullscreenPrev = () => {
    const prevIndex = (fullscreenIndex - 1 + photos.length) % photos.length;
    setFullscreenIndex(prevIndex);
  };

  return (
    <div className={`details-overlay${fullscreen ? ' fullscreen' : ''}`}>
      <div className="details">
        
        <Carousel
          showArrows={!fullscreen}
          showThumbs={false}
          autoPlay={!fullscreen}
          interval={1500}
          infiniteLoop
          selectedItem={fullscreenIndex}
          onClickItem={toggleFullscreen}
        >
          {photos.map((photo, index) => (
            <div key={index} onClick={() => toggleFullscreen(index)}>
              <img src={photo} alt={`Photo ${index + 1}`} />
            </div>
          ))}
        </Carousel>
        <div className="details-info">
          <h6>{title}</h6>
          <p>{area}</p>
          <p>{price}</p>
          {/* Add other details like description, etc. */}
        </div>
        {bookNowButton}
        <button className="btn-close" onClick={onClose}>
          Close
        </button>
      </div>
      {fullscreen && (
        <div className="fullscreen-overlay">
          <button className="btn btn-close-fullscreen" onClick={closeFullscreen} style={{ color: 'red' }}>
            X
          </button>
          <button className="btn btn-prev-fullscreen" onClick={handleFullscreenPrev} style={{ color: '#fff' }}>
            &lt;
          </button>
          <button className="btn btn-next-fullscreen" onClick={handleFullscreenNext} style={{ color: '#fff' }}>
            &gt;
          </button>
          <img src={photos[fullscreenIndex]} alt="Fullscreen" />
        </div>
      )}
    </div>
  );
};

export default ViewDetails;
