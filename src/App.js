import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import PlannerPage from './pages/PlannerPage';
import StudyHomePage from './pages/StudyPage';
import StudyCalenderPage from './pages/StudyCalenderPage';
import SocialPage from './pages/SocialPage';
import MyPage from './pages/MyPage';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/studyHome" element={<StudyHomePage />} />
        <Route path="/studyCalender" element={<StudyCalenderPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/info" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
