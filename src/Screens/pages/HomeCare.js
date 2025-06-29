import React, { useState } from 'react';
import './styles/HomeCare.css';

const HomeCare = () => {
  const [request, setRequest] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    if (!request) return;
    alert(`✅ Home care request for "${request}" submitted!\nNotes: ${notes || "None"}`);
    setRequest('');
    setNotes('');
  };

  return (
    <div className="homecare-container">
      <h2 className="homecare-heading">🏠 Request Home Care Service</h2>

      <label htmlFor="service">Choose a Service:</label>
      <select
        id="service"
        value={request}
        onChange={(e) => setRequest(e.target.value)}
      >
        <option value="">-- Select a Service --</option>
        <option value="Cooking">Cooking</option>
        <option value="Cleaning">Cleaning</option>
        <option value="Laundry">Laundry</option>
        <option value="Bathing Support">Bathing Support</option>
        <option value="Medication Assistance">Medication Assistance</option>
        <option value="Bedtime Preparation">Bedtime Preparation</option>
        <option value="Companion Support">Companion Support</option>
      </select>

      <label htmlFor="notes">Additional Notes:</label>
      <textarea
        id="notes"
        placeholder="Any special instructions?"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button onClick={handleSubmit} disabled={!request}>Submit Request</button>
    </div>
  );
};

export default HomeCare;
