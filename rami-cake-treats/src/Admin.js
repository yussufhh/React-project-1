import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css'; // Import your custom CSS file

const backgroundImages = [
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

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        fetch("http://localhost:3000/deleveryRequest", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setUsers(data);
        })
        .catch(error => {
            console.error("Error fetching users:", error);
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="admin-header">
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}></div>
            <div className="admin-title">
                <div className="container mt-4">
                    <h2 className="mb-4 text-center">User Submissions</h2>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Admin;
