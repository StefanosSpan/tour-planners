import React from 'react';
import Card from './Card';
import personaltrainerphoto from '../assets/personaltrainerphoto.png';
import trainer1 from '../images/trainer1.png';
import trainer2 from '../images/trainer2.png';
import trainer3 from '../images/trainer3.png';
import privatechef from '../assets/privatechef.png'

const Personaltrainer = () => {
  return (
    <section id="Personaltrainer">
      <h2>Personal Trainer & Chef</h2>
      <h5></h5>
      <br></br>
      <div className="card-gallery">
        <Card
          bgUrl={personaltrainerphoto}
          title="Personal Trainer - Nutrition Consultant"
          price={
            <div style={{
              marginTop: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
            }}>
              50€/hour
            </div>}
          area={ <div style={{ 
            background: 'lightgray',
            padding: '10px',
            borderRadius: '5px',
          }}>"Personal training services in a personal space or in a gym. To improve physical condition and relaxation. 
          The goal is the costumer's pleasure and the achievement of his goals. Book your appointment now for an exclusive personal training experience." </div> }
          photos={[personaltrainerphoto]} // Add an array of photos
        />
        <Card
          bgUrl={privatechef}
          title="Private Chef"
          price={
            <div style={{
              marginTop: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
            }}>
              50€/person
            </div>}
          area={ <div style={{ 
            background: 'lightgray',
            padding: '10px',
            borderRadius: '5px',
          }}>
          "Exquisite Personal Chef
          
          Indulge in an extraordinary personal chef experience. Our accomplished chef, with a prestigious background in renowned restaurants, prestigious hotels, and exclusive catering services, brings unparalleled artistry to your table. Fluent in Greek and English, their diverse skills guarantee an unforgettable gastronomic journey. From sous chef to executive chef, our culinary maestro is adept in saucier techniques, baking, and wine pairing. Elevate your dining experience with our chef, creating a truly exquisite culinary masterpiece."</div> }
          photos={[privatechef]} // Add an array of photos
        />
       
        {/* Add more cards here */}
      </div>
    </section>
  );
};

export default Personaltrainer ;
