import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

import {
  CalendarContainer,
  Day,
  Circle,
  Month,
  DayFont,
  ChartBox,
  Chart,
  CalendarBox,
  Top,
  Year,
  Title,
  PrevMonthBtn,
  NextMonthBtn,
  BackgroundColor,
  Today,
  TodayFont,
} from './CalendarItemCss';

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
          if (!isExist && chart.getAttribute('isplanned') === 'true') {
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
        chart.setAttribute('isplanned', 'true');
        chart.style.backgroundColor = '#B6DC79';
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

const Calendar = ({
  month,
  monthValue,
  year,
  selectedDay,
  planDays,
  projects,
  fetchPage,
}) => {
  const weeks = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];
  let dayCnt = 0;

  useEffect(() => {
    ChartHandler(projects);
  }, []);

  function ClickDayHandler(clickedDay) {
    const clickedDate = new Date(year, monthValue - 1, clickedDay + 1);

    fetchPage(clickedDate, false);
  }

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
        <Day key={date} isoutsidemonth="true">
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

      let isPlanDay = false;
      if (planDays) {
        isPlanDay = planDays.includes(day);
      }

      days.push(
        <Day
          key={date}
          id="day"
          isplanned={isPlanDay.toString()}
          onClick={() => ClickDayHandler(day)}
        >
          {day === selectedDay && <Today />}
          {day === new Date().getDate() &&
            monthValue - 1 === new Date().getMonth() &&
            year === new Date().getFullYear() && <TodayFont>Today</TodayFont>}
          <Circle isplanned={isPlanDay.toString()}></Circle>
          <DayFont style={{ color: dayCnt % 7 === 0 ? 'red' : 'inherit' }}>
            {day}
          </DayFont>
          <ChartBox id={'day' + date.getDate()}>
            <Chart id="line1" isplanned="false" />
            <Chart id="line2" isplanned="false" />
            <Chart id="line3" isplanned="false" />
            <Chart id="line4" isplanned="false" />
            <Chart id="line5" isplanned="false" />
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
        <Day key={date} isoutsidemonth="true">
          {date.getDate()}
        </Day>
      );
    }

    return days;
  };

  function CalendarButtonClickHandler(input) {
    let targetMonth;
    if (input === 'prev') {
      // 현재 달이 1월이면 작년 12월로 설정
      if (monthValue === 1) {
        targetMonth = new Date(year - 1, 11, 2);
        console.log(true);
      } else {
        console.log(monthValue);
        targetMonth = new Date(year, monthValue - 2, 2);
        console.log(false);
      }
    } else {
      // 다음 달의 첫 날
      targetMonth = new Date(year, monthValue, 2);
    }
    console.log(targetMonth);

    fetchPage(targetMonth, true);
  }

  return (
    <CalendarBox>
      <BackgroundColor>
        <Top>
          <PrevMonthBtn onClick={() => CalendarButtonClickHandler('prev')}>
            <Icon
              style={{
                marginLeft: '-2px',
                height: '30px',
                width: '30px',
                color: '#9D9D9D',
              }}
              icon="mingcute:left-fill"
            />
          </PrevMonthBtn>
          <Title>
            <Month>{month}</Month>
            <Year>{year}</Year>
          </Title>
          <NextMonthBtn onClick={() => CalendarButtonClickHandler('next')}>
            <Icon
              style={{
                marginRight: '-2px',
                height: '30px',
                width: '30px',
                color: '#9D9D9D',
              }}
              icon="mingcute:right-fill"
            />
          </NextMonthBtn>
        </Top>
      </BackgroundColor>
      <CalendarContainer>{renderDays()}</CalendarContainer>
    </CalendarBox>
  );
};

export default Calendar;

Calendar.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  selectedDay: PropTypes.number.isRequired,
  monthValue: PropTypes.number.isRequired,
  planDays: PropTypes.arrayOf(PropTypes.number).isRequired,
  projects: PropTypes.array.isRequired,
  fetchPage: PropTypes.func.isRequired,
};
