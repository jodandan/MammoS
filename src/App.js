import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import PlannerPage from './pages/PlannerPage';
import StudyHomePage from './pages/StudyPage';
import StudyCalenderPage from './pages/StudyCalenderPage';
import StudySocialPage from './pages/StudySocialPage';
import SocialPage from './pages/SocialPage';
import MyPage from './pages/MyPage';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/studyHome"
          element={
            <StudyHomePage
              currentIndex={currentIndex}
              onIndexChange={handleIndexChange}
            />
          }
        />
        <Route path="/studyCalender"
          element={
            <StudyCalenderPage
              currentIndex={currentIndex} // 전달
              onIndexChange={handleIndexChange} // 이벤트 핸들러 전달
            />
          }
        />
        <Route path="/studySocial"
          element={
            <StudySocialPage
              currentIndex={currentIndex}
              onIndexChange={handleIndexChange}
            />
          }
        />
        <Route path="/info" element={<MyPage />} />
        <Route path="/social" element={<SocialPage />} />
      </Routes>
    </div>
  );
}

export default App;
