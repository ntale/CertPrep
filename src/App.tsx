import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import CertificationList from './components/CertificationList';
import CertificationDetail from './components/CertificationDetail';
import Quiz from './components/Quiz';
import StudyMaterials from './components/StudyMaterials';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/certifications" element={<CertificationList />} />
          <Route path="/certification/:certId" element={<CertificationDetail />} />
          <Route path="/quiz/:certId/:quizId" element={<Quiz />} />
          <Route path="/study-materials" element={<StudyMaterials />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;