import React from 'react';
import ProductCard from './ProductCard';

const ProductCards = () => {
  const cardData = [
    {
      imageUrl: 'https://images.stockcake.com/public/c/d/3/cd35405d-d659-4181-8248-ef2b4f9611af_large/tomato-basil-pizza-stockcake.jpg',
      title: 'Living room Sofa',
      description: 'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces, and for people who love a chic design with a sprinkle of vintage design.',
      price: '$450'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/6660071/pexels-photo-6660071.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Modern Coffee Table',
      description: 'A stylish coffee table to complement modern decor with its sleek design and minimalistic style.',
      price: '$150'
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?b=1&s=612x612&w=0&k=20&c=BON5S0uDJeCe66N9klUEw5xKSGVnFhcL8stPLczQd_8=',
      title: 'Elegant Dining Chair',
      description: 'An elegant dining chair that adds a touch of class to any dining area with its refined design and comfort.',
      price: '$120'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Luxurious Bed Frame',
      description: 'A luxurious bed frame designed for ultimate comfort and elegance, perfect for a stylish bedroom.',
      price: '$800'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Sleek Office Desk',
      description: 'A sleek office desk that provides ample workspace while maintaining a modern and stylish appearance.',
      price: '$220'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Cozy Armchair',
      description: 'A cozy armchair designed for relaxation, perfect for any living room or reading nook.',
      price: '$300'
    }
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
    >
      {cardData.map((card, index) => (
        <ProductCard
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
          price={card.price}
        />
      ))}
    </div>
  );
};

export default ProductCards;
