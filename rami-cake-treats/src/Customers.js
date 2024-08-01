import React, { useEffect, useState } from 'react';

const Customers = () => {
  const [cakesBaked, setCakesBaked] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [yearsInBusiness, setYearsInBusiness] = useState(0);
  const [uniqueFlavors, setUniqueFlavors] = useState(0);

  useEffect(() => {
    if (cakesBaked < 4000) {
      const timeoutId = setTimeout(() => setCakesBaked(cakesBaked + 1), 5);
      return () => clearTimeout(timeoutId);
    }
  }, [cakesBaked]);

  useEffect(() => {
    if (happyClients < 2000) {
      const timeoutId = setTimeout(() => setHappyClients(happyClients + 1), 5);
      return () => clearTimeout(timeoutId);
    }
  }, [happyClients]);

  useEffect(() => {
    if (yearsInBusiness < 15) {
      const timeoutId = setTimeout(() => setYearsInBusiness(yearsInBusiness + 1), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [yearsInBusiness]);

  useEffect(() => {
    if (uniqueFlavors < 70) {
      const timeoutId = setTimeout(() => setUniqueFlavors(uniqueFlavors + 1), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [uniqueFlavors]);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '20px',
    width: '100%',
    flexWrap: 'wrap',
  };

  const counterStyle = {
    color: 'black',
    textAlign: 'center',
    margin: '40px 0', // Margin from both top and bottom
  };

  const labelStyle = {
    fontSize: '1.1em',
    color: '#fff',
  };

  return (
    <div style={containerStyle}>
      <div style={counterStyle}>
        <h2>{cakesBaked}+<br /><span style={labelStyle}>Cakes Baked</span></h2>
      </div>
      <div style={counterStyle}>
        <h2>{happyClients}+<br /><span style={labelStyle}>Happy Clients</span></h2>
      </div>
      <div style={counterStyle}>
        <h2>{yearsInBusiness}+<br /><span style={labelStyle}>Years in Business</span></h2>
      </div>
      <div style={counterStyle}>
        <h2>{uniqueFlavors}+<br /><span style={labelStyle}>Unique Flavors</span></h2>
      </div>
    </div>
  );
};

export default Customers;
