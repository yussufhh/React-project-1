import React from "react";
import './About.css';

const Cards = () => {
  return (
    <div className="Flex-Cards">
      <div className="card-2">
        <div className="card-content">
          <p className="card-title">Mission</p>
          <p className="card-para">
            Our mission is to deliver high-quality cakes and treats with exceptional service and care, making every occasion special and memorable.
          </p>
        </div>
      </div>
      <div className="card-2">
        <div className="card-content">
          <p className="card-title">Vision</p>
          <p className="card-para">
            Our vision is to be the leading bakery known for innovation, excellence, and creativity in cake and treat design, enhancing every celebration with our unique creations.
          </p>
        </div>
      </div>
      <div className="card-2">
        <div className="card-content">
          <p className="card-title">Objectives</p>
          <p className="card-para">
            1. To continuously innovate and offer a diverse range of high-quality cakes and treats.<br/>
            2. To provide exceptional customer service and create memorable experiences.
          
          </p>
        </div>
      </div>
      <div className="card-2">
        <div className="card-content">
          <p className="card-title">Location</p>
          <p className="card-para">
            Nairobi, South C Amana Estate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
