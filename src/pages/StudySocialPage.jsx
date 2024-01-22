import React from 'react'
import PropTypes from 'prop-types';
import StudySocial from '../components/StudySocialPage/StudySocial';
export default function StudySocialPage({ currentIndex }) {
  return (
    <StudySocial currentIndex={currentIndex} />
  )
}

StudySocialPage.propTypes = {
  onIndexChange: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
};