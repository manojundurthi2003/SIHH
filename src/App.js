import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ResearchesPage from './ResearchesPage';
import IPRPage from './IPRPage';
import InnovationPage from './InnovationPage';
import StartupsPage from './StartupsPage';
import FundsPage from './FundsPage';
import SupportPage from './SupportPage';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/researches" element={<ResearchesPage />} />
        <Route path="/ipr" element={<IPRPage />} />
        <Route path="/innovation" element={<InnovationPage />} />
        <Route path="/startups" element={<StartupsPage />} />
        <Route path="/funds" element={<FundsPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </Router>
  );
};

export default App;
