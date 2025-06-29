import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FeatureRoutes from './FeatureRoutes'; // ✅ Import feature routes
import NotFound from './Screens/NotFound';
import Home from './Screens/Home';
import LandingPage from './Screens/Landing Page/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define your primary routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home/*" element={<Home />} />
          
          {/* Define your feature-specific routes */}
          <Route path="/landing" element={<LandingPage />} />

          {/* Add feature routes if needed */}
          <Route path="/*" element={<FeatureRoutes />} />
          
          {/* Catch-all route for undefined pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
