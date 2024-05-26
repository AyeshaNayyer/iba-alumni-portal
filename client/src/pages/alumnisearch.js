// AlumniSearch.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AlumniSearch() {
  const [locationFilters, setLocationFilters] = useState({
    city: '',
    country: '',
    region: '',
    batch: '',
    programId: '',
    mentor: '',
    
  });
  const [programInfo, setProgramInfo] = useState({
    1: 'BSCS',
    2: 'BBA',
    3: 'BSCS',
    4: 'BSSS',
    5: 'BSMATH',
    6: 'BSECO',
    7: 'BSEM',
    12: 'MBA',
    14: 'MSCS',
  });

  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocationFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSearch = () => {
    console.log('Searching with filters:', locationFilters);
    axios.get('http://localhost:3001/alumni/search', { params: locationFilters })
      .then((response) => {
        console.log('Search results:', response.data);
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

      
  };
  
  return (
    <div className="full-page-container">
      <div className="registration-layout">
        <div className="registration-heading">
          <p className="marquee-content">Alumni Search</p>
        </div>
        <div className="registrationContainer">
          <div className="inputGroup">
            <label>City</label>
            <input
              className="formField"
              type="text"
              name="city"
              value={locationFilters.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputGroup">
            <label>Country</label>
            <input
              className="formField"
              type="text"
              name="country"
              value={locationFilters.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputGroup">
            <label>Region</label>
            <input
              className="formField"
              type="text"
              name="region"
              value={locationFilters.region}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputGroup">
            <label>Batch</label>
            <input
              className="formField"
              type="text"
              name="batch"
              value={locationFilters.batch}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputGroup">
            <label>Program ID</label>
            <input
              className="formField"
              type="text"
              name="programId"
              value={locationFilters.programId}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputGroup">
            <label>Mentor</label>
            <input
              className="formField"
              type="text"
              name="mentor"
              value={locationFilters.mentor}
              onChange={handleInputChange}
            />
          </div>
          <button className="formButton" onClick={handleSearch}>
            Search
          </button>

          {searchResults.length > 0 && (
            <div className="search-results">
              <h3>Search Results:</h3>
              <ul>
                {searchResults.map((alumni) => (
                  <li key={alumni.id}>
                    <Link to={`/alumni_profile/${alumni.ERP}`}>
                      {alumni.FirstName} {alumni.LastName} - Batch: {alumni.Batch}, Program ID: {alumni.ProgramID}, Mentor: {alumni.Mentor}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Display program information */}
          <div className="program-info">
            <h3>Program ID for all degrees:</h3>
            <ul>
              {Object.entries(programInfo).map(([id, program]) => (
                <li key={id}>
                  <strong>{id}:</strong> {program}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AlumniSearch;
