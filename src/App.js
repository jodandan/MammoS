import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import PlannerPage from './pages/PlannerPage';
import StudyHomePage from './pages/StudyPage';
import StudyCalenderPage from './pages/StudyCalenderPage';
import StudySocialPage from './pages/StudySocialPage';
import StudyNoticePage from './pages/StudyNoticePage';
import StudyPromotionPage from './pages/StudyPromotionPage';
import SocialPage from './pages/SocialPage';
import MyPage from './pages/MyPage';
import './App.css';
import ChallengePage from './pages/ChallengePage';
import PostPage from './pages/PostPage';
import SavingPostPage from './pages/SavingPostPage';
import StudyMyPromotionPage from './pages/StudyMyPromotionPage';
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
        <Route
          path="/studyHome"
          element={
            <StudyHomePage
              currentIndex={currentIndex}
              onIndexChange={handleIndexChange}
            />
          }
        />
        <Route
          path="/studyCalender"
          element={
            <StudyCalenderPage
              currentIndex={currentIndex} // 전달
              onIndexChange={handleIndexChange} // 이벤트 핸들러 전달
            />
          }
        />
        <Route
          path="/studySocial"
          element={
            <StudySocialPage
              currentIndex={currentIndex}
              onIndexChange={handleIndexChange}
            />
          }
        />
        <Route
          path="/studyNotice"
          element={
            <StudyNoticePage
              currentIndex={currentIndex}
              onIndexChange={handleIndexChange}
            />
          }
        />
        <Route
          path="/studyPromotion"
          element={
            <StudyPromotionPage
              currentIndex={currentIndex}
              onIndexChange={handleIndexChange}
            />
          }
        />
        <Route
          path="/studyMyPromotion"
          element={
            <StudyMyPromotionPage
              currentIndex={currentIndex}
              onIndexChange={handleIndexChange}
            />
          }
        />

        <Route path="/Challenge" element={<ChallengePage />} />
        <Route path="/info" element={<MyPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/post/:postIdx/:userStudyIdx" element={<PostPage />} />
        <Route
          path="/post/saving/:purpose/:postIdx/:userStudyIdx"
          element={<SavingPostPage />}
        />
        <Route
          path="/post/saving/:purpose/:userStudyIdx"
          element={<SavingPostPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
