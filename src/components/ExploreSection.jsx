import React from 'react';
import Card from '../components/Card';
import kingsizebed from '../assets/kingsizebed1.png';
import boatImage1 from '../images/example1.png';
import boatImage2 from '../images/example1.png';

const ExploreSection = () => {
  return (
    <section id="explore">
      <h2>Boat Rentals</h2>
      <h5></h5>
      <br></br>
      <div className="card-gallery">
        <Card
          bgUrl={kingsizebed}
          title="NEW Saxdor 320 GTO only with skipper (max. 9 persons)"
          price="1300€/day"
          photos={[boatImage1, boatImage2]} // Add an array of photos
        />
        <Card
          bgUrl={kingsizebed}
          title="NEW Saxdor 320 GTO only with skipper (max. 9 persons)"
          price="1300€/day"
          photos={[boatImage1, boatImage2]} // Add an array of photos
        />
        {/* Add more cards here */}
      </div>
    </section>
  );
};

export default ExploreSection;
