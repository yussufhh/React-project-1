import React, { useState, useEffect } from 'react';
import './About.css';

const backgroundImages = [
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


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/UsersData');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="text-center mt-4"><div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div></div>;
  if (error) return <div className="alert alert-danger" role="alert">Error: {error}</div>;

  return (
    <div className="menu-header">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}></div>
      <div className="menu-title"  style={{marginBottom:'0px'}}>
        <h1>Rami Cake Treats All The Time!👇</h1>
        <p>All of our menus are available for takeout as well as dine-in. Please order by calling the restaurant<br /> to place a takeout order. Menus change often with seasons and ingredients.</p>
      </div>
      <div className="users-title">
        <h1 style={{ fontSize: '34px' }}>Users List</h1>
        <div className="container mt-4">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Phone Number</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.username}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
