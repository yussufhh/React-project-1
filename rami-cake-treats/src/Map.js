import React from 'react';
import './Map.css'; // Optional: Add your own styles for the map container

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        title="Google Map of South C, Nairobi"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15927.283511349832!2d36.87583497493433!3d-1.3084927861500512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1d3a7ff2e8b5%3A0x17f8dc4e4b8238a6!2sSouth%20C%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1693580472684"
        width="1300"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
