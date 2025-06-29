// FeatureRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Screens/Landing Page/LandingPage';

import SocialInteraction from './Screens/pages/SocialInteraction';
import MedicalSupport from './Screens/pages/MedicalSupport';
import HealthFitness from './Screens/pages/HealthFitness';
import VolunteerAssistance from './Screens/pages/VolunteerAssistance';
import HomeCare from './Screens/pages/HomeCare';


const FeatureRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/social" element={<SocialInteraction />} />
      <Route path="/medical" element={<MedicalSupport />} />
      <Route path="/fitness" element={<HealthFitness />} />
      <Route path="/volunteer" element={<VolunteerAssistance />} />
      <Route path="/homecare" element={<HomeCare />} />
    </Routes>
  );
};

export default FeatureRoutes;
