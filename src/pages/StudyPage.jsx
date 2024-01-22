import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import StudyHome from '../components/StudyPage/StudyHome';

export default function StudyHomePage({ onIndexChange, currentIndex }) {

  return (
    <StudyHome onIndexChange={onIndexChange} currentIndex={currentIndex} />
  );
}

StudyHomePage.propTypes = {
  onIndexChange: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
};