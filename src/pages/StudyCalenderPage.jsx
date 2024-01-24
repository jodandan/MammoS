import React from 'react'
import PropTypes from 'prop-types';
import StudyCalender from '../components/StudyCalenderPage/StudyCalender.jsx'
export default function StudyCalenderPage({ onIndexChange, currentIndex }) {
    return (
        <StudyCalender onIndexChange={onIndexChange} currentIndex={currentIndex} />
    )
}

StudyCalenderPage.propTypes = {
    onIndexChange: PropTypes.func.isRequired,
    currentIndex: PropTypes.number.isRequired,
};