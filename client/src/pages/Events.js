import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Events() {
  const [listOfEvents, setListOfEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/events').then((response) => {
      setListOfEvents(response.data);
    });
  }, []);

  const handleCreateEvent = () => {
    navigate('/createevent'); // This should be the route to your CreateEvent component
  };

  return (
    <div className="App">
      <div className="header">
       
        {/* Banner or marquee can go here */}
      </div>

      <div className="navbar">
        {/* Links to other parts of your app */}
      </div>

      <button onClick={handleCreateEvent} className="button">
        Create New Event
      </button>

      <div className="content">
        {listOfEvents.map((event, key) => (
          <div className="card" key={key}>
            <div className="title"> {event.title} </div>
            <div className="body">
              {event.description}
              <p>Location: {event.location}</p>
              <p>Date: {new Date(event.date).toLocaleDateString()}</p>
              <p>Time: {event.time}</p>
            </div>
            <div className="footer">
              <button onClick={() => navigate(`/event/${event.eventid}`)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;