import React from 'react';
import Card from './Card';
import Mercedes from '../assets/vip1.png';
import Mercedes2 from '../assets/vip2.png';
import Mercedes3 from '../assets/vip3.png';

const Transportation = () => {
  return (
    <section id="transportation">
      <h2>Transportation Services</h2>
      <h5></h5>
      <br></br>
      <div className="card-gallery">
        <Card
          bgUrl={Mercedes}
          title="Mercedes Benz Vito 2020 Business Category"
          price="Ask for price"
          area=""
          photos={[ Mercedes ]}
        />
        <Card
          bgUrl={Mercedes3}
          title="Mercedes Benz E class Limo Edition 2021"
          price="Ask for price"
          area=""
          photos={[ Mercedes3 ]}
        />
        </div>
        <div className="card-gallery">
        <Card
          bgUrl={Mercedes2}
          title="Mercedes Benz Sprinter 2019 Limo Edition"
          price="Ask for price"
          area=""
          photos={[ Mercedes2 ]}

        />
        <Card
          bgUrl={Mercedes2}
          title="Mercedes Benz Sprinter 2019 Limo Edition"
          price="Ask for price"
          area=""
          photos={[ Mercedes2 ]}

        />
      </div>
    </section>
  );
};

export default Transportation;
