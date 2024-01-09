import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  z-index: 1;
  background-color: transparent;
  color: inherit;
  opacity: ${({ isOutsideMonth }) => (isOutsideMonth ? 0.3 : 1)};
  position: relative;
  &.frame {
    height: 2vw;
    color: ${({ day }) => (day === 'SUN' ? 'red' : 'inherit')};
  }
`;

const Circle = styled.div`
  height: 1.5vw;
  width: 1.5vw;
  background-color: #c6ef5e; /* 동그라미의 배경색 설정, 필요에 따라 변경 가능 */
  border-radius: 50%;
  position: absolute; /* 동그라미의 위치를 상대적으로 설정한 부모에 대해 설정 */
  margin-top: -4px;
  margin-left: 9px;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  z-index: 2;
  transform: translateX(-50%); /* 가운데 정렬을 위해 50%만큼 이동 */
  display: ${({ isSelected }) =>
    isSelected
      ? 'flex'
      : 'none'}; /* 선택된 날에만 동그라미를 표시하도록 설정 */
`;

const Month = styled.h2`
  text-align: right;
  padding-right: 2vw;
  margin-bottom: 1vw;
`;

const DayFont = styled.p`
  width: 25%;
  text-align: center;
  position: absolute;
  z-index: 3;
  margin-left: 0px;
  margin-top: 0px;
`;

const ChartBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50%;
  height: 50%;
  width: 100%;
  align-items: baseline;
`;

const Chart = styled.div`
  display: flex;
  flex-direction: column;
  height: 18%;
  width: 100%;
  margin-bottom: 2px;
  padding-left: 8%;
  background-color: ${(props) =>
    props.isSelected ? '#90C20D' : 'transparent'};
`;

function ChartHandler(projects) {
  projects.forEach((project) => {
    let chartLevel = 1;
    const projectStartDate = new Date(project.projectStartTime).getDate();
    const projectEndDate = new Date(project.projectEndTime).getDate();

    // 맨 아래서부터 차트 몇번째 칸에 칠할지 탐색 (빈칸 탐색)
    // 라인 순서대로 탐색
    for (let line = 1; line < 6; line++) {
      // isExist === 이미 차트에 칠해진 부분이 있는지
      let isExist = false;

      for (let i = projectStartDate; i <= projectEndDate; i++) {
        // 프로젝트 시작부터 끝까지 라인별로 탐색
        const chartSameLine = document.querySelectorAll(
          '#day' + i + ' > div#line' + line
        );

        // 이미 칠해진 차트가 있다면 isExist를 true로 바꾸고, chartLevel을 다음 단계로
        chartSameLine.forEach((chart) => {
          if (!isExist && chart.getAttribute('isSelected') === 'true') {
            chartLevel++;
            isExist = true;
            return;
          }
        });
      }
      // 빈 칸을 찾았다면 break
      if (isExist === false) {
        break;
      }
    } // 차트 빈칸 탐색

    // 차트 칠하기
    for (let i = projectStartDate; i <= projectEndDate; i++) {
      const chartSameLine = document.querySelectorAll(
        '#day' + i + ' > div#line' + chartLevel
      );

      for (let j = 0; j < chartSameLine.length; j++) {
        const chart = chartSameLine[j];
        chart.setAttribute('isSelected', 'true');
        chart.style.backgroundColor = '#90C20D';
      }

      // 양 끝 border-radius 적용
      const leftIndex = i - projectStartDate;
      const rightIndex = i - projectEndDate;

      if (leftIndex >= 0 && leftIndex < chartSameLine.length) {
        const left = chartSameLine[leftIndex];
        console.log('left');
        console.log(left);
        left.style.borderRadius = '5px 0px 0px 5px';
        left.style.marginRight = '-2px';
      }

      if (rightIndex >= 0 && rightIndex < chartSameLine.length) {
        const right = chartSameLine[rightIndex];
        console.log('right');
        console.log(right);
        right.style.borderRadius = '0px 5px 5px 0px';
        right.style.marginLeft = '-2px';
        right.style.width = '98%';
      }

      // 만약 한 칸짜리 Project라면 양쪽 다 적용
      if (
        leftIndex >= 0 &&
        leftIndex < chartSameLine.length &&
        rightIndex >= 0 &&
        rightIndex < chartSameLine.length
      ) {
        const block = chartSameLine[leftIndex];
        block.style.borderRadius = '5px 5px 5px 5px';
        block.style.marginLeft = '-2px';
        block.style.marginRight = '-2px';
        block.style.width = '98%';
      }
    }
  });
}

const Calendar = ({ month, planDays, projects }) => {
  const weeks = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];
  let dayCnt = 0;

  useEffect(() => {
    ChartHandler(projects);
  }, []);

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

      dayCnt++;
    }

    // 현재 달의 일 수
    for (let day = 1; day <= lastDayOfMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );

      const isPlanDay = planDays.includes(day);

      days.push(
        <Day key={date} id="day" isSelected={isPlanDay}>
          <Circle isSelected={isPlanDay}></Circle>
          <DayFont style={{ color: dayCnt % 7 === 0 ? 'red' : 'inherit' }}>
            {day}
          </DayFont>
          <ChartBox id={'day' + date.getDate()}>
            <Chart id="line1" isSelected={false} />
            <Chart id="line2" isSelected={false} />
            <Chart id="line3" isSelected={false} />
            <Chart id="line4" isSelected={false} />
            <Chart id="line5" isSelected={false} />
          </ChartBox>
        </Day>
      );

      dayCnt++;
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
      <Month>{month}</Month>
      <CalendarContainer>{renderDays()}</CalendarContainer>
    </div>
  );
};

export default Calendar;

Calendar.propTypes = {
  month: PropTypes.string.isRequired,
  planDays: PropTypes.arrayOf(PropTypes.number).isRequired,
  projects: PropTypes.array.isRequired,
};
