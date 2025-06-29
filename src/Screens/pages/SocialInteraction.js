import React, { useState, useEffect } from 'react';
import './styles/SocialInteraction.css';

const SocialInteraction = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // Simulated fetch
    setPeople([
      { id: 1, name: "Rajesh (age 68)", location: "Bangalore" },
      { id: 2, name: "Sita (age 72)", location: "Chennai" },
      { id: 3, name: "Ramya (age 58)", location: "Andhra Pradesh" },
      { id: 4, name: "Sai (age 62)", location: "Kerala" },
    ]);
  }, []);

  // Function to handle the connect button click
  const handleConnect = (name) => {
    alert(`Connected to ${name}`);
  };

  return (
    <div className="social-container">
      <h2>Nearby Friends</h2>
      <ul className="people-list">
        {people.map((person) => (
          <li key={person.id}>
            {person.name} - {person.location}
            <button 
              className="connect-button" 
              onClick={() => handleConnect(person.name)} // Call handleConnect with the person's name
            >
              Connect
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialInteraction;
