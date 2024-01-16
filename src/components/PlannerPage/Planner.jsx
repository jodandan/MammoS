import styled from 'styled-components';
import PageFrame from '../PageFrame/PageFrame';
import Plan from './PlannerItems/Plan';
import Project from './PlannerItems/Project';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Calendar from './PlannerItems/Calendar/Calendar';

const Right = styled.div`
  width: 27vw;
  justify-content: center;
  height: 35vw;
  margin-left: 2vw;
  margin-right: 2vw;
`;

const PageContainer = styled.div`
  margin-top: 2vw;
  display: flex;
  justify-content: center;
`;

export default function Planner() {
  const [calendar, setCalendar] = useState({
    idx: 0,
    year: 0,
    monthValue: 0,
    month: '',
    projects: [],
  });
  const [planner, setPlanner] = useState({
    day: 0,
    month: 0,
    plannerIdx: 0,
    plans: [
      {
        planIndex: 0,
        planIsComplete: false,
        planName: '',
        planStudyTime: 0,
        studytimeStartTime: new Date(),
      },
    ],
    todayStudyTime: 0,
  });
  const [project, setProject] = useState([]);

  async function fetchPage(date, isMonthBtn) {
    try {
      // 토큰 가져오기
      const token = localStorage.getItem('token');
      // 토큰 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // 정보 받아오기

      if (isMonthBtn) {
        if (
          new Date(date).getFullYear() === new Date().getFullYear() &&
          new Date(date).getMonth() === new Date().getMonth()
        ) {
          date = new Date();
        }
      }

      const now = date.toISOString().substring(0, 10);
      console.log(now);

      const response = await axios.get(
        'http://3.38.7.193:8080/api/v1/planner/' + now
      );
      // 정보 저장
      if (response.data.httpResponseStatus === 'SUCCESS') {
        setCalendar(response.data.responseData.calendar);
        setPlanner(response.data.responseData.planner);
        setProject(response.data.responseData.project);

        console.log(response);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPage(new Date());
  }, []);

  return (
    <PageFrame>
      <PageContainer>
        <Calendar
          key={calendar.idx}
          month={calendar.month}
          monthValue={calendar.monthValue}
          planDays={calendar.planDays}
          year={calendar.year}
          projects={calendar.projects}
          fetchPage={fetchPage}
          selectedDay={planner.day}
        />
        <Right>
          <Plan plan={planner.plans} totalStudyTime={planner.todayStudyTime} />
          <Project project={project} />
        </Right>
      </PageContainer>
    </PageFrame>
  );
}
