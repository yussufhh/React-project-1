import React from 'react';
import { useParams } from 'react-router-dom';

const OrderPage = () => {
    const { id } = useParams();
    
    // Fetch or display details for the specific pizza ID
    return (
        <div>
            <h1>Order Page</h1>
            <p>Order details for pizza ID: {id}</p>
            {/* Add additional order functionality here */}
        </div>
    );
};

export default OrderPage;
