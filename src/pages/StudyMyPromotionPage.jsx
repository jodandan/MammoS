import React from 'react'
import PropTypes from 'prop-types';
import StudyMyPromotion from '../components/StudyMyPromotion/StudyMyPromotion';
export default function StudyMyPromotionPage({ onIndexChange, currentIndex }) {
  return (
    <StudyMyPromotion onIndexChange={onIndexChange} currentIndex={currentIndex} />
  )
}

StudyMyPromotionPage.propTypes = {
    onIndexChange: PropTypes.func.isRequired,
    currentIndex: PropTypes.number.isRequired,
  };
