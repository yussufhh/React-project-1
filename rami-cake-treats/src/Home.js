import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Customers from "./Customers";
import Main from "./Main";


const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:3000/pizzas')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
              <Main/>
        
        <div className="container text-center my-4">
            <h1 style={{fontSize:'45px', fontWeight:'bold'}}>Pizzas</h1>
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
                                        <Link path to="/contact"> Order</Link>
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
             
            )}
             <Customers/>
            
            
            
        </div>
        </div>
        
    );
}

export default Home;
