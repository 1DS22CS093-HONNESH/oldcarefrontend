import React from 'react';
import './styles/VolunteerAssistance.css';

const VolunteerAssistance = () => {
  const volunteers = [
    { name: "Anita", phone: "99999 11111", help: "Grocery shopping" },
    { name: "Vikram", phone: "88888 22222", help: "Doctor visits" },
    { name: "Sunita", phone: "77777 33333", help: "Home cleaning" },
    { name: "Ramesh", phone: "66666 44444", help: "Medication pickup" },
    { name: "Kavya", phone: "55555 55555", help: "Morning walks" },
  ];

  return (
    <div className="volunteer-container">
      <h2 className="volunteer-heading">🤝 Available Volunteers</h2>
      <div className="volunteer-list">
        {volunteers.map((v, index) => (
          <div key={index} className="volunteer-card">
            <h3>{v.name}</h3>
            <p><strong>Help With:</strong> {v.help}</p>
            <button onClick={() => alert(`Calling ${v.phone}`)}>📞 Contact</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerAssistance;
