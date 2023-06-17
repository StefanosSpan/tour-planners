import React from 'react';
import ServiceCard from './ServiceCard';
import VipSpecialPack from '../images/example1.png'

const OtherServicesPage = () => {
  return (
    <div>
        <br/>
      <h2>Special Rental Packs</h2>
      <br/>
      <div id="OtherServicesPage">
      <ServiceCard
          bgUrl={VipSpecialPack}
          title="Vip Special Pack"
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
          }}>
            Vip Special Pack 
             </div> }
          photos={[]} // Add an array of photos
        />
        <ServiceCard title="Special Pack 1" />
        <br/>
        <ServiceCard title="Special Pack 2" />
        {/* Add more ServiceCard components as needed */}
      </div>
    </div>
  );
};

export default OtherServicesPage;
