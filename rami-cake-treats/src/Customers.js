import React, { useEffect, useState } from 'react';
import './Customers.css'

const Customers = () => {
  const [cakesBaked, setCakesBaked] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [yearsInBusiness, setYearsInBusiness] = useState(0);
  const [uniqueFlavors, setUniqueFlavors] = useState(0);

  const handleClick = () => {
    setCakesBaked(cakesBaked + 3);
    setHappyClients(happyClients + 3);
    setYearsInBusiness(yearsInBusiness + 1);
    setUniqueFlavors(uniqueFlavors + 2);
  };

  useEffect(() => {
    if (cakesBaked < 5500) {
      const timeoutId = setTimeout(() => setCakesBaked(cakesBaked + 1), 5);
      return () => clearTimeout(timeoutId);
    }
  }, [cakesBaked]);

  useEffect(() => {
    if (happyClients < 2500) {
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

  return (
    <div className='customers-container '>
      <section className='card'>
        <button className='button1' onClick={handleClick}>
          <h2 className='h2'>
            {cakesBaked}+<br /><span className='spans'>Cakes Baked</span>
          </h2>
        </button>
        <button className='button1' onClick={handleClick}>
          <h2 className='h2'>
            {happyClients}+<br /><span className='spans'>Happy Clients</span>
          </h2>
        </button>
        <button className='button1' onClick={handleClick}>
          <h2 className='h2'>
            {yearsInBusiness}+<br /><span className='spans'>Years in Business</span>
          </h2>
        </button>
        <button className='button1' onClick={handleClick}>
          <h2 className='h2'>
            {uniqueFlavors}+<br /><span className='spans'>Unique Flavors</span>
          </h2>
        </button>
      </section>
    </div>
  );
};

export default Customers;
