import React, { useState, useEffect } from 'react';
import './About.css';

const backgroundImages = [
  'https://img.freepik.com/free-photo/plate-food-with-burger-bowl-soup_1340-34224.jpg?ga=GA1.2.645881715.1722141347&semt=ais_hybrid',
  'https://img.freepik.com/premium-photo/food-photo-dishes-product-photography-wallpaper-background_1230902-13918.jpg?ga=GA1.2.645881715.1722141347&semt=ais_hybrid',
  'https://img.freepik.com/free-photo/beautiful-couple-enjoying-their-time-together-home_23-2148960250.jpg?t=st=1722319750~exp=1722323350~hmac=734faf0811efc4e0df7bacc8eed8466ebef7d76deac4d3daef36660ac1d05f0a&w=1380',
  'https://img.freepik.com/free-photo/romantic-dinner-with-glasses-wine_23-2148960246.jpg?t=st=1722319812~exp=1722323412~hmac=29c1e8e6c98c7031ea62926caa2c532ea045bcb52734962681fd9a21c9c77a82&w=1380'
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
    <div className="users-header">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}></div>
      <div className="users-title">
        <h1>Users List</h1>
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
