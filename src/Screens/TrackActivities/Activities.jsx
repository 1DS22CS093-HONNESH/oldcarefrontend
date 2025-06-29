import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Activities.css';

import med from "../../assets/med.png";
import calorie from "../../assets/calorie.png";
import todo from "../../assets/imp.png";
import physical from "../../assets/physical activities.jfif";

const Activities = () => {
  const [activityTypes] = useState([
    'Physical Activities',
    'Important Tasks',
    'Medicine',
    'Calorie Counter',
  ]);
  const [selectedActivity, setSelectedActivity] = useState('');
  const [activities, setActivities] = useState([]);
  const [activityName, setActivityName] = useState('');
  const [activityTime, setActivityTime] = useState('');
  const [specialMessage, setSpecialMessage] = useState('');

  const activityInfo = {
    'Physical Activities': {
      image: physical,
      icon: '🏃‍♂️',
      message: '💪 Stay active! Aim for 30 minutes of movement today!',
      color: '#e0f7fa',
    },
    'Important Tasks': {
      image: todo,
      icon: '📝',
      message: '📝 Prioritize these: Pay bills, Doctor appointment, Call family.',
      color: '#fff8e1',
    },
    Medicine: {
      image: med,
      icon: '💊',
      message: '💊 Don’t forget your meds! Take them on time for your health.',
      color: '#f3e5f5',
    },
    'Calorie Counter': {
      image: calorie,
      icon: '🔥',
      message: '🔥 Track your calories! Goal: 2000 kcal per day.',
      color: '#e8f5e9',
    },
  };

  const handleActivityTypeClick = (type) => {
    setSelectedActivity(type);
    setSpecialMessage(activityInfo[type].message);
  };

  const addActivity = () => {
    if (!activityName || !activityTime || !selectedActivity) {
      alert('Please enter activity type, name, and time.');
      return;
    }

    const newActivity = {
      id: Date.now(),
      type: selectedActivity,
      name: activityName,
      time: activityTime,
    };

    setActivities([...activities, newActivity]);
    alert(`✅ Activity "${activityName}" added under "${selectedActivity}" at ${activityTime}!`);
    setActivityName('');
    setActivityTime('');
  };

  const deleteActivity = (id) => {
    const updatedActivities = activities.filter((activity) => activity.id !== id);
    setActivities(updatedActivities);
  };

  return (
    <div className='activity'>
      <h2>"Track and Manage Your Activities with Ease"</h2>
      <div>
        <h3>Select Activity Type:</h3>
        <div className="activity-types">
          {activityTypes.map((type) => (
            <motion.div
              key={type}
              className={`activity-type ${selectedActivity === type ? 'selected' : ''}`}
              onClick={() => handleActivityTypeClick(type)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: selectedActivity === type ? activityInfo[type].color : '#f0f0f0',
                borderRadius: '15px',
                padding: '10px',
                cursor: 'pointer',
              }}
            >
              <h4>{type}</h4>
              <img className='pic' src={activityInfo[type].image} alt={type} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {specialMessage && (
          <motion.div
            className="special-message"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundColor: activityInfo[selectedActivity]?.color,
              padding: '15px',
              marginTop: '20px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '1.1rem',
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>{activityInfo[selectedActivity]?.icon}</span>
            <span>{specialMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {selectedActivity && (
        <motion.div
          className='activitydesc'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className='inputtext'>
            <input
              type="text"
              placeholder="Activity Name"
              value={activityName}
              onChange={(e) => setActivityName(e.target.value)}
            />

            <input
              className='clock'
              type="time"
              value={activityTime}
              onChange={(e) => setActivityTime(e.target.value)}
            />
            <label className='clock-label'>⏰ Select Time</label>
          </div>

          <motion.button
            onClick={addActivity}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              marginTop: '10px',
              padding: '8px 16px',
              borderRadius: '10px',
              backgroundColor: '#4caf50',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Add Activity
          </motion.button>
        </motion.div>
      )}

      <ul className='list'>
        <AnimatePresence>
          {activities
            .filter((activity) => activity.type === selectedActivity)
            .map((activity) => (
              <motion.li
                key={activity.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: '#fafafa',
                  padding: '10px',
                  margin: '10px 0',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {activity.name} at {activity.time}
                <button
                  onClick={() => deleteActivity(activity.id)}
                  style={{
                    background: '#f44336',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '5px 10px',
                    cursor: 'pointer',
                  }}
                >
                  Delete
                </button>
              </motion.li>
            ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default Activities;
