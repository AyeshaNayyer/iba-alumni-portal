import React from 'react';
import { Link } from 'react-router-dom';
import ibaLogo from './download (1).png'; // Update the path to your IBA logo
import mainImage from './1_vO36zSpgs1iWjpSRCh7LIw.jpg'; // Path to the main image you provided

function Splash() {
  return (
    <div className="App">
      <div className="header">
        <img src={ibaLogo} alt="IBA Logo" className="iba-logo" />
        <h1 className="banner-text">Welcome to the IBA Alumni Portal - Your gateway to staying connected!</h1>
      </div>
      <div className="main-content">
        <img src={mainImage} alt="IBA Campus" className="main-image" />
        <div className="splash">
          <h2>Choose Your Role</h2>
          <Link to="/alumnilogin" className="role-link">
            <button className="role-button">Alumni</button>
          </Link>
          <Link to="/login" className="role-link">
            <button className="role-button">Student</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Splash;