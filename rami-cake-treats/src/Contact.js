import React from 'react';
import './Contact.css';

const Contact = () => {
    const handleNavigation = (event) => {
        const selectedPage = event.target.value;
        if (selectedPage) {
            window.location.href = selectedPage;
        }
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="dropdown">
                <label>Navigate to:</label>
                <select onChange={handleNavigation}>
                    <option value="">Select an option</option>
                    <option value="/location">Location</option>
                    <option value="/mission">Mission</option>
                    <option value="/vision">Vision</option>
                </select>
            </div>
        </div>
    );
};

export default Contact;
