import React from 'react'
import PropTypes from 'prop-types';
import StudyPromotion from '../components/StudyPromotion/StudyPromotion';
export default function StudyPromotionPage({ onIndexChange, currentIndex }) {
  return (
    <StudyPromotion onIndexChange={onIndexChange} currentIndex={currentIndex} />
  )
}

StudyPromotionPage.propTypes = {
    onIndexChange: PropTypes.func.isRequired,
    currentIndex: PropTypes.number.isRequired,
  };
