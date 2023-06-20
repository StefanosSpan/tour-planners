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
import meliades1 from '../images/villa-meliades/1.jpeg';
import meliades2 from '../images/villa-meliades/2.jpeg';
import meliades3 from '../images/villa-meliades/3.jpeg';
import meliades4 from '../images/villa-meliades/4.jpeg';
import meliades5 from '../images/villa-meliades/5.jpeg';
import meliades6 from '../images/villa-meliades/6.jpeg';
import meliades7 from '../images/villa-meliades/7.jpeg';
import meliades8 from '../images/villa-meliades/8.jpeg';
import meliades9 from '../images/villa-meliades/9.jpeg';
import meliades10 from '../images/villa-meliades/10.jpeg';
import meliades11 from '../images/villa-meliades/11.jpeg';
import meliades12 from '../images/villa-meliades/12.jpeg';
import meliades13 from '../images/villa-meliades/13.jpeg';
import meliades14 from '../images/villa-meliades/14.jpeg';
import meliades15 from '../images/villa-meliades/15.jpeg';
import meliades16 from '../images/villa-meliades/16.jpeg';
import meliades17 from '../images/villa-meliades/17.jpeg';
import meliades18 from '../images/villa-meliades/18.jpeg';
import meliades19 from '../images/villa-meliades/19.jpeg';
import meliades20 from '../images/villa-meliades/20.jpeg';
import meliades21 from '../images/villa-meliades/21.jpeg';
import meliades22 from '../images/villa-meliades/22.jpeg';
import meliades23 from '../images/villa-meliades/23.jpeg';
import meliades24 from '../images/villa-meliades/24.jpeg';
import meliades25 from '../images/villa-meliades/25.jpeg';
import meliades26 from '../images/villa-meliades/26.jpeg';
import meliades27 from '../images/villa-meliades/27.jpeg';
import meliades28 from '../images/villa-meliades/28.jpeg';
import meliades29 from '../images/villa-meliades/29.jpeg';
import meliades30 from '../images/villa-meliades/30.jpeg';
import meliades31 from '../images/villa-meliades/31.jpeg';
import meliades32 from '../images/villa-meliades/32.jpeg';
import meliades33 from '../images/villa-meliades/33.jpeg';
import meliades34 from '../images/villa-meliades/34.jpeg';
import meliades35 from '../images/villa-meliades/35.jpeg';
import meliades36 from '../images/villa-meliades/36.jpeg';
import meliades37 from '../images/villa-meliades/37.jpeg';
import meliades38 from '../images/villa-meliades/38.jpeg';
import meliades39 from '../images/villa-meliades/39.jpeg';
import meliades40 from '../images/villa-meliades/40.jpeg';
import meliades41 from '../images/villa-meliades/41.jpeg';
import meliades42 from '../images/villa-meliades/42.jpeg';
import meliades43 from '../images/villa-meliades/43.jpeg';

// Add more imports if needed


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
          bgUrl={meliades1}
          title="Villa Meliades - Chania ("
          price={
            <div style={{
              marginTop: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
            }}>
              1300€/day
            </div>
          }
          photos={[
            meliades1, meliades2, meliades3, meliades4, meliades5, meliades6, meliades7, meliades8, meliades9, meliades10,
            meliades11, meliades12, meliades13, meliades14, meliades15, meliades16, meliades17, meliades18, meliades19, meliades20,
            meliades21, meliades22, meliades23, meliades24, meliades25, meliades26, meliades27, meliades28, meliades29, meliades30,
            meliades31, meliades32, meliades33, meliades34, meliades35, meliades36, meliades37, meliades38, meliades39, meliades40,
            meliades41, meliades42, meliades43
          ]}
           // Add an array of photos
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
