import React from 'react'
import PropTypes from 'prop-types';
import StudyNotice from '../components/StudyNoticePage/StudyNotice';
export default function StudyNoticePage({  onIndexChange,currentIndex }) {
  return (
    <StudyNotice onIndexChange={onIndexChange} currentIndex={currentIndex} />
  )
}

StudyNoticePage.propTypes = {
    onIndexChange: PropTypes.func.isRequired,
    currentIndex: PropTypes.number.isRequired,
  };