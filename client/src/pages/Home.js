import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/fyp').then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className="full-page-container">
      <div className="registration-layout">
        <div className="registration-heading">
          <p className="marquee-content">Welcome to the Home Page</p>
        </div>

        <div className="home-content">
          <p>Welcome to our platform! Here you can explore various features.</p>
          
          <div className="home-links">
            <Link to="/fyp" className="home-link">FYP</Link>
            <Link to="/alumnisearch" className="home-link">Search Alumni</Link>
            <Link to="/fundraising" className="home-link">Fundraising</Link>
            

            {/* Add more links as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
