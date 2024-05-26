import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AlumniProfile() {
  const { alumniERP } = useParams();
  const [alumniDetails, setAlumniDetails] = useState({});
  const [alumniHistory, setAlumniHistory] = useState([]);

  useEffect(() => {
    
    // Fetch Alumni Details and History
    axios.get(`http://localhost:3001/alumniauth/${alumniERP}`)
      .then((response) => {
        setAlumniDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching alumni details:', error.response);
      });

    axios.get(`http://localhost:3001/alumni_history/${alumniERP}`)
      .then((response) => {
        setAlumniHistory(response.data);
      })
      .catch((error) => {
        console.error('Error fetching alumni history records:', error.response);
      });
  }, [alumniERP]);

  return (
    <div className="full-page-container">
      <div className="registration-layout">
        <div className="registration-heading">
          <p className="marquee-content">Alumni Profile</p>
        </div>
        <div className="registrationContainer">
          <h3>ERP: {alumniERP}</h3>
          <div className="alumni-details">
            <p>First Name: {alumniDetails.FirstName}</p>
            <p>Last Name: {alumniDetails.LastName}</p>
            <p>Current City: {alumniDetails.City}</p>
            <p>Current Country: {alumniDetails.Country}</p>
            <p>Current Region: {alumniDetails.Region}</p>
            <p>Current Company: {alumniDetails.Companyid}</p>
            <p>Batch: {alumniDetails.Batch}</p>
            <p>Program ID: {alumniDetails.ProgramId}</p>
            <p>LinkedIn: {alumniDetails.LinkedIn}</p>
            <p>Email: {alumniDetails.Email}</p>
            <p>Phone: {alumniDetails.Phone}</p>
            {/* Add other details as needed */}
          </div>
          <hr />
          <div className="alumni-history">
            <h3>Alumni History:</h3>
            {alumniHistory.map((record, index) => (
              <div className="history-record" key={index}>
                <p>Company ID: {record.Company_ID}</p>
                
                <p>City: {record.City}</p>
                <p>Country: {record.Country}</p>
                <p>Region: {record.Region}</p>
                
                {/* Add other fields as needed */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );}

export default AlumniProfile;
