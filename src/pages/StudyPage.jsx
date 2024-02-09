import React from 'react';
import PropTypes from 'prop-types';
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