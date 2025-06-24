import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-image"></div>
      
      <div className="content">
        <h1 className="company-name">Green Thumb Nursery</h1>
        
        <p className="company-description">
          Welcome to Green Thumb Nursery, your premier destination for high-quality plants, 
          gardening supplies, and expert advice. With over 20 years of experience, we're 
          committed to helping you create the garden of your dreams with our carefully 
          curated selection of indoor and outdoor plants.
        </p>
        
        <Link to="/products" className="get-started-button">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;