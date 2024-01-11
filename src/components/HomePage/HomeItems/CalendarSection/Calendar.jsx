import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  CalendarContainer,
  Day,
  Circle,
  Month,
  DayFont,
  ChartBox,
  Chart,
} from './CalendarSectionItemCss';

function ChartHandler(projects) {
  projects.forEach((project) => {
    let chartLevel = 1;

    let projectStartDate = new Date(project.projectStartTime).getDate();
    let projectEndDate = new Date(project.projectEndTime).getDate();

    // 만약 한달을 넘기는 프로젝트라면 시작과 끝을 1일과 말일로 설정
    if (
      new Date(project.projectStartTime).getFullYear() <
        new Date().getFullYear() ||
      new Date(project.projectStartTime).getMonth() < new Date().getMonth()
    ) {
      projectStartDate = 1;
    }
    if (
      new Date(project.projectEndTime).getFullYear() >
        new Date().getFullYear() ||
      new Date(project.projectEndTime).getMonth() > new Date().getMonth()
    ) {
      const currentDate = new Date();

      projectEndDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getDate();
    }

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
    }

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
        left.style.borderRadius = '5px 0px 0px 5px';
        left.style.marginRight = '-2px';
      }

      if (rightIndex >= 0 && rightIndex < chartSameLine.length) {
        const right = chartSameLine[rightIndex];
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
