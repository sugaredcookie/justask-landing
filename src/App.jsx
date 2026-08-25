import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MastheadPage from './pages/MastheadPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/masthead" element={<MastheadPage />} />
      </Routes>
    </Router>
  );
}

export default App;