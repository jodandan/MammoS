import React from 'react'
import PropTypes from 'prop-types';
import StudySocial from '../components/StudySocialPage/StudySocial';
export default function StudySocialPage({  onIndexChange,currentIndex }) {
  return (
    <StudySocial onIndexChange={onIndexChange} currentIndex={currentIndex} />
  )
}

StudySocialPage.propTypes = {
  onIndexChange: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
};