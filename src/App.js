import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import StudyHomePage from './pages/StudyPage';
import StudyCalenderPage from './pages/StudyCalenderPage';
import StudySocialPage from './pages/StudySocialPage';

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
        <Route path="/studyHome" element={<StudyHomePage onIndexChange={handleIndexChange} />} />
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
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
