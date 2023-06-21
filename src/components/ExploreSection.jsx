import React from 'react';
import Card from '../components/Card';
import boat1 from '../images/boats/1.jpg'
import boat2 from '../images/boats/2.jpg'
import boat3 from '../images/boats/3.jpg'
import boat4 from '../images/boats/4.jpg'


const ExploreSection = () => {
  return (
    <section id="explore">
      <h2>Boat Rentals</h2>
      <h5></h5>
      <br></br>
      <div className="card-gallery">
        <Card
          bgUrl={boat1}
          title="Boat Rental"
          price="500€/day"
          photos={[boat1]} // Add an array of photos
        />
        <Card
          bgUrl={boat2}
          title="Boat Rental"
          price="500€/day"
          photos={[boat2]} // Add an array of photos
        />
        {/* Add more cards here */}
      </div>
    </section>
  );
};

export default ExploreSection;
