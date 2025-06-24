import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="background-image"></div>
      
      <div className="content-overlay">
        <h1 className="company-name">Green Thumb Nursery</h1>
        
        <p className="company-description">
          Welcome to Green Thumb Nursery, where we help your indoor garden thrive. 
          Since 2010, we've provided premium houseplants and expert care advice 
          to plant lovers across the country. Our mission is to bring nature's 
          beauty into your home with our carefully curated selection of healthy, 
          vibrant plants.
        </p>
        
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;