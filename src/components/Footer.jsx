import React from 'react';
import blackLogo from '../assets/logo.png';
import facebookIcon from '../assets/facebook-30.png';
import instagramIcon from '../assets/instagram-30.png';
import YouTubeIcon from '../assets/youtube-30.png';

const Footer = () => {
  return (
    <footer>
      <div>
        <img id="logo" src={blackLogo} alt="Company Logo" />
        <p>© 2023 Tour Planners</p>
        <br />
        <p></p>
      </div>
      <div className="links">
        
        <span className="icon-container">
          <img src={instagramIcon} alt="Instagram Icon" onClick={() => window.open('https://www.instagram.com/cretetourplanners/', '_blank')} />
        </span>
        <span className="icon-container">
          <img src={YouTubeIcon} alt="YouTube Icon" onClick={() => window.open('https://www.youtube.com/@CreteTourPlanners', '_blank')} />
        </span>
      </div>
      <div className="footer-details">
        <p>Leof. Kon/nou Karamanli 94, Chania Crete</p>
        <p>Phone: +306936476703</p>
        <p>Email: cretetourplanners@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
