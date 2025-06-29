import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this
import './LandingPage.css';
import {
  FaUserFriends,
  FaMedkit,
  FaDumbbell,
  FaUsers,
  FaHandsHelping,
  FaUtensils,
  FaBirthdayCake,
  FaExclamationTriangle,
  FaTags,
} from 'react-icons/fa';

const LandingPage = () => {
  const navigate = useNavigate(); // ✅ useNavigate hook

  return (
    <div className="landing-page">
      <br />
      <h1>Welcome to OldCare Connect</h1>
      <p>Your Elderly Assistance Platform</p>

      <div className="featuresl">
        <div className="featurel" onClick={() => navigate('/social')}>
          <FaUserFriends className="feature-icon" /><br />
          <h1>Social Interaction</h1>
          <p>Connect with like-minded people nearby.</p>
        </div>

        <div className="featurel" onClick={() => navigate('/medical')}>
          <FaMedkit className="feature-icon" /><br />
          <h1>Medical Support</h1>
          <p>Receive medication reminders and health tips.</p>
        </div>

        <div className="featurel" onClick={() => navigate('/fitness')}>
          <FaDumbbell className="feature-icon" /><br />
          <h1>Health &  Fitness</h1>
          <p>Explore health blogs, diet tips, and yoga resources.</p>
        </div>

        <div className="featurel" onClick={() => navigate('/volunteer')}>
          <FaUsers className="feature-icon" /><br />
          <h1>Volunteer Assistance</h1>
          <p>Volunteers can help and connect with the elderly.</p>
        </div>

        <div className="featurel" onClick={() => navigate('/homecare')}>
          <FaUtensils className="feature-icon" /><br />
          <h1>Home Care Services</h1>
          <p>NGOs provide cooking, washing, and home assistance.</p>
        </div>
      </div>

      <footer className="footer">
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p className='email'>Email: oldcare@gmail.com</p>
          <p className='phone'>Phone: +91 8329281781</p>
          <p className='addr'>Address: Bangalore</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
