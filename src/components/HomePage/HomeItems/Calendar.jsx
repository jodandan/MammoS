import React, { useState } from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 0fr);
  grid-column-gap: 0px;
  justify-content: center;
`;

const Day = styled.div`
  display: flex;
  font-weight: bold;
  width: 3.5vw;
  height: 4.3vw;
  padding-left: 5px;
  padding-top: 5px;
  background-color: ${({ isSelected }) =>
    isSelected ? '#b9d967' : 'transparent'};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'inherit')};
  opacity: ${({ isOutsideMonth }) => (isOutsideMonth ? 0.3 : 1)};
  &.frame {
    height: 2vw;
    color: ${({ day }) => (day === 'SUN' ? 'red' : 'inherit')};
  }
`;

const Month = styled.h2`
  text-align: right;
  padding-right: 2vw;
  margin-bottom: 1vw;
`;

const Calendar = () => {
  const weeks = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];

  const renderDays = () => {
    const days = [];
    const currentDate = new Date();
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const startDay = firstDayOfMonth.getDay(); // 0부터 시작 (일요일)

    weeks.forEach((day) => {
      days.push(
        <Day key={day} className="frame">
          {day}
        </Day>
      );
    });

    // 이전 달의 마지막 날짜
    const lastDayOfPrevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();

    // 이전 달의 일 수
    for (let i = startDay - 1; i >= 0; i--) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        lastDayOfPrevMonth - i
      );
      days.push(
        <Day key={date} isOutsideMonth>
          {date.getDate()}
        </Day>
      );
    }

    // 현재 달의 일 수
    for (let day = 1; day <= lastDayOfMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      days.push(<Day key={date}>{day}</Day>);
    }

    // 다음 달의 일 수
    const remainingDays = 7 - (days.length % 7);
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        i
      );
      days.push(
        <Day key={date} isOutsideMonth>
          {date.getDate()}
        </Day>
      );
    }

    return days;
  };

  return (
    <div>
      <Month>SEPTEMBER</Month>
      <CalendarContainer>{renderDays()}</CalendarContainer>
    </div>
  );
};

export default Calendar;
