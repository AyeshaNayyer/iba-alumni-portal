import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function FYP() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const navigate = useNavigate(); // hook to get the navigation function

  useEffect(() => {
    axios.get('http://localhost:3001/fyp').then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  const handleCreateFYP = () => {
    // Redirect to the createfyp page when the button is clicked
    navigate('/createfyp');
  };


  return (
    
    <div className="full-page-container">
      <div className="registration-layout">
        <div className="registration-heading">
          <p className="marquee-content">Final Year Projects</p>
        </div>

        <button onClick={handleCreateFYP} className="formButton">
          Post New FYP
        </button>

        <div className="content">
          {listOfPosts.map((value, key) => (
            <div className="registrationContainer post" key={key}>
              <div className="title">{value.title}</div>
              <div className="body">{value.description}</div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FYP;
