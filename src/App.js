import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SocialPage from './pages/SocialPage';
function App() {
  return (
    <div>
        <Routes>
            <Route path ="/social" element={<SocialPage />}/>
        </Routes>
    </div>
  )
}

export default App;
