// pages/MedicalSupport.js
import React, { useState } from 'react';
import './styles/MedicalSupport.css';

const classifyBP = (bp) => {
  const [systolic, diastolic] = bp.split('/').map(Number);
  if (systolic >= 180 || diastolic >= 120) return 'Critical';
  if (systolic >= 140 || diastolic >= 90) return 'Danger';
  if (systolic >= 130 || diastolic >= 80) return 'Warning';
  if (systolic >= 120 && diastolic < 80) return 'Warning';
  return 'Normal';
};

const classifySugar = (sugar) => {
  sugar = Number(sugar);
  if (sugar >= 200) return 'Danger';
  if (sugar >= 140) return 'Warning';
  if (sugar >= 70 && sugar < 100) return 'Normal';
  return 'Warning';
};

const classifyHeartRate = (hr) => {
  hr = Number(hr);
  if (hr < 60) return 'Bradycardia';
  if (hr > 100) return 'Tachycardia';
  return 'Normal';
};

const classifyBreathing = (br) => {
  br = Number(br);
  if (br < 12) return 'Low (Danger)';
  if (br > 25) return 'High (Danger)';
  return 'Normal';
};

const MedicalSupport = () => {
  const [entries, setEntries] = useState([]);
  const [input, setInput] = useState({
    bp: '',
    sugar: '',
    heartRate: '',
    breathing: '',
  });

  const today = new Date();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newEntry = {
      date: new Date(),
      ...input,
    };
    setEntries([newEntry, ...entries]);
    setInput({ bp: '', sugar: '', heartRate: '', breathing: '' });
  };

  const getFilteredEntries = (days) => {
    return entries.filter(entry => {
      const diff = (today - new Date(entry.date)) / (1000 * 3600 * 24);
      return diff < days;
    });
  };

  const getStats = (data) => {
    const stats = {};
    ['bp', 'sugar', 'heartRate', 'breathing'].forEach((key) => {
      const values = data.map(e => {
        if (key === 'bp') return parseInt(e.bp.split('/')[0]);
        return parseInt(e[key]);
      });
      stats[key] = values.length ? [Math.min(...values), Math.max(...values)] : ['-', '-'];
    });
    return stats;
  };

  const daily = getFilteredEntries(1);
  const weekly = getFilteredEntries(7);
  const monthly = getFilteredEntries(30);

  const sections = [
    { title: "Daily Readings", data: daily },
    { title: "Weekly Readings", data: weekly },
    { title: "Monthly Readings", data: monthly },
  ];

  return (
    <div className="medical-container">
      <h2>Track Your Vitals</h2>
      <div className="input-form">
        <input name="bp" placeholder="Blood Pressure (e.g. 120/80)" value={input.bp} onChange={handleChange} />
        <input name="sugar" placeholder="Sugar Level" value={input.sugar} onChange={handleChange} />
        <input name="heartRate" placeholder="Heart Rate" value={input.heartRate} onChange={handleChange} />
        <input name="breathing" placeholder="Breathing Rate" value={input.breathing} onChange={handleChange} />
        <button onClick={handleSubmit} disabled={!input.bp || !input.sugar || !input.heartRate || !input.breathing}>
          Save
        </button>
      </div>

      {sections.map(({ title, data }) => {
        const stats = getStats(data);
        return (
          <div key={title} className="stats-section">
            <h3>{title}</h3>
            <ul>
              {data.map((entry, index) => (
                <li key={index}>
                  <strong>{new Date(entry.date).toLocaleDateString()}:</strong>
                  {' '}BP: {entry.bp} ({classifyBP(entry.bp)}), 
                  Sugar: {entry.sugar} ({classifySugar(entry.sugar)}), 
                  Heart: {entry.heartRate} ({classifyHeartRate(entry.heartRate)}), 
                  Breathing: {entry.breathing} ({classifyBreathing(entry.breathing)})
                </li>
              ))}
            </ul>
            <div className="stats-summary">
              <p>BP Range (Systolic): {stats.bp[0]} - {stats.bp[1]}</p>
              <p>Sugar Range: {stats.sugar[0]} - {stats.sugar[1]}</p>
              <p>Heart Rate Range: {stats.heartRate[0]} - {stats.heartRate[1]}</p>
              <p>Breathing Range: {stats.breathing[0]} - {stats.breathing[1]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MedicalSupport;
