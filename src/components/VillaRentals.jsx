import React from 'react';
import Card from './Card';
import photo1 from '../images/villa kyma/photo1.png';
import photo2 from '../images/villa kyma/photo2.png';
import photo3 from '../images/villa kyma/photo3.png';
import photo4 from '../images/villa kyma/photo4.png';
import photo5 from '../images/villa kyma/photo5.png';
import photo6 from '../images/villa kyma/photo6.png';
import photo7 from '../images/villa kyma/photo7.png';
import photo8 from '../images/villa kyma/photo8.png';
import photo9 from '../images/villa kyma/photo9.png';
import photo10 from '../images/villa kyma/photo10.png';
import photo11 from '../images/villa kyma/photo11.png';
import photo12 from '../images/villa kyma/photo12.png';
import photo13 from '../images/villa kyma/photo13.png';
import photo14 from '../images/villa kyma/photo14.png';
import villaorea1 from '../images/villa-orea-elounda/1.png'
import villaorea2 from '../images/villa-orea-elounda/2.png'
import villaorea3 from '../images/villa-orea-elounda/3.png'
import villaorea4 from '../images/villa-orea-elounda/4.png'
import villaorea5 from '../images/villa-orea-elounda/5.png'
import villaorea6 from '../images/villa-orea-elounda/6.png'
import villaorea7 from '../images/villa-orea-elounda/7.png'
import villaorea8 from '../images/villa-orea-elounda/8.png'
import thyrsus1 from '../images/VillaThyrsus/Villathyrsus1.png'
import thyrsus2 from '../images/VillaThyrsus/Thyrsus2.png'
import thyrsus3 from '../images/VillaThyrsus/Thyrsus3.png'
import thyrsus4 from '../images/VillaThyrsus/Thyrsus4.png'
import thyrsus5 from '../images/VillaThyrsus/Thyrsus5.png'
import thyrsus6 from '../images/VillaThyrsus/Thyrsus6.png'
import thyrsus7 from '../images/VillaThyrsus/Thyrsus7.png'
import thyrsus8 from '../images/VillaThyrsus/Thyrsus8.png'
import thyrsus9 from '../images/VillaThyrsus/Thyrsus9.png'

const VillaRentals = () => {
  return (
    <section id="villarentals">
      <h2>Villa Rentals</h2>
      <h5></h5>
      <br></br>
      <div className="card-gallery">
        <Card
          bgUrl={photo3}
          title="Villa Kyma - Chania (Guests 10)"
          area={
            <div style={{ 
              background: 'lightgray',
              padding: '10px',
              borderRadius: '5px',
            }}>
              Experience our 5-Star Villa:
              <br/>
              Idyllic location with stunning 180° sea and sunset views.
              <br/>
              Private infinity pool and direct sea access.
              <br/>
              4 bedrooms, accommodating up to 10 guests.
              <br/>
              4 separate terrace areas for ultimate relaxation.
              <br/>
              Luxury, tranquility, and breathtaking natural beauty combined.
              <br/>
              MHTE 1042K123K2962701
            </div>
          }
          price={
            <div style={{
              marginTop: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
            }}>
              Price Per Week: <br/> January-March: 4.800€ | April:5300€ | May:6400€ | June:7650€ | July-August:8750€ | September:7850€ | October:6500€
            </div>
          }
          photos={[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14]} // Add an array of photos
        />
        
        <Card
          bgUrl={villaorea3}
          title="Villa Orea - Elounda (Guests 10)"
          area={
            <div style={{ 
              background: 'lightgray',
              padding: '10px',
              borderRadius: '5px',
            }}>
              What makes Orea so special?
              <br/>
              Picturesque Greek scenery: State-of-the-art Cycladic-style construction immerses you in Greek charm.
              <br/>
              Traditional Greek town feel: Narrow streets, Cycladic houses, and sun-drenched terraces create an authentic ambiance.
              <br/>
              Top-notch comfort and privacy: Experience the quintessential Greek holiday at Villa Orea.
              <br/>
              4 separate terrace areas for ultimate relaxation.
              <br/>
              Spacious and versatile: Over 200 sqm interior and 175 sqm outdoor area with multiple serene spaces.
            </div>}
          photos={[villaorea3, villaorea2, villaorea4, villaorea1, villaorea5, villaorea6, villaorea7, villaorea8]} // Add an array of photos
          price={
            <div style={{
              marginTop: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
            }}>
               Price Per Week: <br/> January-March: 4.900€ | April:5300€ | May:6400€ | June:7650€ | July-August:8750€ | September:7850€ | October:6500€ | November-December:5.200€
              </div>
          }
        />
      </div>

      <div className="card-gallery">
        <Card
          bgUrl={thyrsus1}
          title="Villa Thyrsus - Chania (Guests 10)"
          price={
            <div style={{
              marginTop: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
            }}>
               Price Per Week: <br/> January-March: 4.800€ | April:5200€ | May:6400€ | June:7650€ | July-August:8750€ | September:7850€ | October:6500€ | November-December:5.200€
            </div>
          }
          photos={[thyrsus1, thyrsus2, thyrsus3, thyrsus4, thyrsus5, thyrsus6, thyrsus7, thyrsus8, thyrsus9]} // Add an array of photos
        />
        <Card
          bgUrl={photo1}
          title="Villa Kyma"
          price={
            <div style={{
              marginTop: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
            }}>
              1300€/day
            </div>
          }
          photos={[]} // Add an array of photos
        />
      </div>
      
      <div className="card-gallery">
        <Card
          bgUrl={photo1}
          title="Villa Kyma"
          price={
            <div style={{
              marginTop: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
            }}>
               Price Per Week: <br/> January-March: 4.800€ | April:5200€ | May:6400€ | June:7650€ | July-August:8750€ | September:7850€ | October:6500€ | November-December:5.200€
            </div>
          }
          photos={[]} // Add an array of photos
        />
        <Card
          bgUrl={photo1}
          title="Villa Kyma"
          price={
            <div style={{
              marginTop: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
            }}>
              1300€/day
            </div>
          }
          photos={[]} // Add an array of photos
        />
      </div>
    </section>
  );
};

export default VillaRentals;
