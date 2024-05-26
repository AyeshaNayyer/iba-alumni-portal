import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Fundraising() {
  const [listOfFundraisers, setListOfFundraisers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/fundraising').then((response) => {
      setListOfFundraisers(response.data);
    });
  }, []);

  const handleCreateFundraiser = () => {
    navigate('/createfundraising'); // Replace with your actual route
  };

  return (
    <div className="full-page-container">
      <div className="header">
        {/* ... (your header content) */}
      </div>

      <div className="registration-layout">
        <div className="registration-heading">
          <p className="marquee-content">Fundraising Events</p>
        </div>

        <button onClick={handleCreateFundraiser} className="formButton">
          Create New Fundraiser
        </button>

        <div className="content">
          {listOfFundraisers.map((fundraiser, key) => (
            <div className="registrationContainer card" key={key}>
              <div className="title"> {fundraiser.title} </div>
              <div className="body">{fundraiser.description}</div>
              <label htmlFor="target">Target:</label>
              <div className="title"> {fundraiser.target} </div>
              <label htmlFor="target">Current_amount:</label>
              <div className="title"> {fundraiser.current_amount} </div>
              <div className="footer">
                
                 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Fundraising;