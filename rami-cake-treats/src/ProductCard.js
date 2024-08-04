import React from 'react';

const ProductCard = ({ imageUrl, title, description, price }) => {
  return (
    <div
      className="uk-card uk-card-default"
      style={{
        maxWidth: '300px',
        margin: '20px',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
        color: '#fff', // Ensure text color is readable against the gradient
        overflow: 'hidden'
      }}
    >
      <div
        className="uk-card-media-top"
        style={{
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          overflow: 'hidden'
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: '100%',
            height: '200px', // Fixed height for consistency
            objectFit: 'cover',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px'
          }}
        />
      </div>
      <div
        className="uk-card-body"
        style={{
          padding: '16px'
        }}
      >
        <h3
          className="uk-card-title"
          style={{
            margin: '0 0 10px',
            fontSize: '1.25rem'
          }}
        >
          {title}
        </h3>
        <p style={{ margin: '0 0 10px' }}>
          {description}
        </p>
        <p style={{ margin: '0', fontSize: '1.5rem' }}>
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
