import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer footer1">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text">
              Rami Cake Treats is your go-to online bakery for delicious and freshly baked goods. 
            </p>
          </div>

          <div className="col-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="/">Cakes</a></li>
              <li><a href="/">Milkshakes</a></li>
              <li><a href="/">Pizzas</a></li>
              <li><a href="/">Pastries</a></li>
              <li><a href="/">Cookies</a></li>
              <li><a href="/">Breads</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Contribute</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Sitemap</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6>Follow Us</h6>
            <ul className="social-icons">
              <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a></li>
            </ul>
            
          </div>
          <p className="copyright-text">
            Copyright © 2024 All Rights Reserved by
            <a href="/" style={{color:'white'}}> Rami Cake Treats</a>.
          </p>
        </div>
        <hr className="small" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-12">
            {/* Additional content can be added here */}
          </div>
          <div className="col-md-4 col-sm-6 col-12">
            <ul className="social-icons">
              {/* Removed the duplicated social icons */}
            </ul>
            
          </div>
        </div>
        <div>
    
        </div>
      </div>
    </footer>
  );
};

export default Footer;
