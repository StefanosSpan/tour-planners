import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ViewDetails = ({ bgUrl, title, area, price, onClose, bookNowButton, photos }) => {
  const [fullscreen, setFullscreen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const toggleFullscreen = (index) => {
    setFullscreen(!fullscreen);
    setFullscreenIndex(index);
  };

  const closeFullscreen = () => {
    setFullscreen(false);
  };

  const handleFullscreenNext = () => {
    setFullscreenIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handleFullscreenPrev = () => {
    setFullscreenIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX !== null) {
      const touchEndX = e.touches[0].clientX;
      const deltaX = touchEndX - touchStartX;
      if (deltaX > 50) {
        handleFullscreenPrev();
      } else if (deltaX < -50) {
        handleFullscreenNext();
      }
      setTouchStartX(null);
    }
  };

  const handleKeyDown = (e) => {
    if (fullscreen) {
      if (e.key === 'ArrowLeft') {
        // Left arrow key
        handleFullscreenPrev();
      } else if (e.key === 'ArrowRight') {
        // Right arrow key
        handleFullscreenNext();
      } else if (e.key === 'Escape') {
        // Escape key
        closeFullscreen();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [fullscreen]);

  return (
    <div className={`details-overlay${fullscreen ? ' fullscreen' : ''}`}>
      <div className="details" style={{ backgroundImage: `url(${bgUrl})` }}>
        <Carousel
          showArrows={!fullscreen}
          showThumbs={false}
          autoPlay={!fullscreen}
          interval={3000}
          infiniteLoop
          selectedItem={fullscreenIndex}
          onClickItem={toggleFullscreen}
          onChange={(index) => setFullscreenIndex(index)}
          swipeable={!fullscreen}
          emulateTouch // Enable touch swipe
        >
          {photos.map((photo, index) => (
            <div key={index} onClick={() => toggleFullscreen(index)}>
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
              />
            </div>
          ))}
        </Carousel>
        <div className="details-info">
          <div className="blur-block">
            <h6>{title}</h6>
            <p>{area}</p>
            <p>{price}</p>
          </div>
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
