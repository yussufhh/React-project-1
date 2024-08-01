
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Customers from "./Customers";
import './About.css';
import './Home.css'; // Make sure this path is correct

const backgroundImages = [
  'https://images.stockcake.com/public/7/b/4/7b43175b-5815-4fff-9820-69cef9c6d2c6_large/italian-feast-spread-stockcake.jpg',
  'https://images.stockcake.com/public/c/d/3/cd35405d-d659-4181-8248-ef2b4f9611af_large/tomato-basil-pizza-stockcake.jpg',
  'https://images.stockcake.com/public/a/d/0/ad004baf-0de4-4749-8eba-f51598302626_large/feast-of-flavors-stockcake.jpg',
    'https://media.gettyimages.com/id/1218254547/photo/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-wood.jpg?s=612x612&w=0&k=20&c=71-9AuSL4NDy98C9RwyAfsgKjHx5Jfm_Y8pvIwP9FqQ=',
  'https://media.gettyimages.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?s=612x612&w=0&k=20&c=SEyObHsbBsrd1XZlgEg389VT86BMFKZKfKReKyVPAk4=',
  'https://img.freepik.com/free-photo/plate-food-with-burger-bowl-soup_1340-34224.jpg?ga=GA1.2.645881715.1722141347&semt=ais_hybrid',
  'https://img.freepik.com/premium-photo/food-photo-dishes-product-photography-wallpaper-background_1230902-13918.jpg?ga=GA1.2.645881715.1722141347&semt=ais_hybrid',
  'https://media.istockphoto.com/id/1455160776/photo/selection-of-healthy-food.webp?b=1&s=170667a&w=0&k=20&c=lDqbqjMVAii5xbw2cMay7x33Gm4Y3bOdjaf5Z0ehrPU=',
  'https://img.freepik.com/free-photo/romantic-dinner-with-glasses-wine_23-2148960246.jpg?t=st=1722319812~exp=1722323412~hmac=29c1e8e6c98c7031ea62926caa2c532ea045bcb52734962681fd9a21c9c77a82&w=1380',
  'https://media.istockphoto.com/id/597250256/photo/festive-table.webp?b=1&s=170667a&w=0&k=20&c=IwbjfJuYx2k_d6At0-chhZf2gPYgRRRv37j4g_5AC1o=',
  'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2RzfGVufDB8fDB8fHww',
  'https://media.istockphoto.com/id/1312629858/photo/traditional-scandinavian-easter-dinner-buffet.webp?b=1&s=170667a&w=0&k=20&c=JX2j7VDVRXGCc9s6JEG0h9LMUBZXdDrGWlhYxyoY0WQ=',
  'https://media.istockphoto.com/id/1524823226/photo/colorful-raw-fruits-and-vegetables-varied-vegan-food-vivid-rainbow-arrangement.jpg?s=1024x1024&w=is&k=20&c=YTunI-mqv7gsrISIq7gt-TnJD7TQLE_QtFCaD55TZe0=',
  'https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=1024x1024&w=is&k=20&c=VaRsD5pHXDCMcwcAsOGaaBadptx0nHaJUuVKpyWaq3A='
];

const quotes = [
  'The secret of success in life is to eat what you like and let the food fight it out inside.',
  'The only time to eat diet food is while you\'re waiting for the steak to cook.',
  'Life\'s too short to eat bad food.'
];

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/pizzas')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-header">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}>
      <div className="menu-title">
            <h1>Rami Cake Treats All The Time!👇</h1>
            <p className="parag">All of our menus are available for takeout as well as dine-in. Please order by calling the restaurant<br></br> to place a takeout order. Menus change often with seasons and ingredients.</p>
            <div className="quote-container">
              <p className="quote">{quotes[currentImageIndex % quotes.length]}</p>
            </div>
          </div>
      </div>
      
      <div className="home-content">
        <div className="container text-center my-4">
          
          <h1 style={{ fontSize: '45px', fontWeight: 'bold' }}>Pizzas</h1>
          {loading ? (
            <p className="font-weight-bold">Loading...</p>
          ) : (
            <div className="row justify-content-center">
              {data.map((pizza) => (
                <div key={pizza.id} className="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch">
                  <div className="card h-100 shadow-sm p-3" style={{ background: 'linear-gradient(to right, #E975A8, #726CF8)', color: 'white' }}>
                    <img src={pizza.image} alt={pizza.name} className="card-img-top img-fluid" />
                    <div className="card-body">
                      <h2 className="card-title h5">{pizza.name}</h2>
                      <p className="card-text">{pizza.description}</p>
                      <p className="card-text">{pizza.price}</p>
                      <button>
                        <Link to="/contact"> Order</Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <Customers />
        </div>
      </div>
    </div>
  );
};

export default Home;
