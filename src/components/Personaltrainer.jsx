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
          title="Georgios Savvidis | Personal Trainer - Nutrition Consultant"
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
          title="Anthimos Tachtsidis - Private Chef"
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
          }}>"Anthimos Tachtsidis: Your Exquisite Private Chef

          Experience culinary excellence with Anthimos Tachtsidis, an accomplished private chef. With a distinguished background in renowned restaurants, prestigious hotels, and exclusive catering services, Anthimos brings unmatched artistry to your table. Fluent in Greek and English, his diverse skills ensure a memorable gastronomic experience. From sous chef to executive chef, Anthimos is skilled in saucier techniques, baking, and wine pairing. Elevate your dining with Anthimos, a true culinary maestro." </div> }
          photos={[privatechef]} // Add an array of photos
        />
       
        {/* Add more cards here */}
      </div>
    </section>
  );
};

export default Personaltrainer ;
