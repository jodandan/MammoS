import styled from 'styled-components';
import PageFrame from '../PageFrame/PageFrame';
import HomeSection from './HomeItems/HomeSection';
import AchivementSection from './HomeItems/AchivementSection';
import TodoSection from './HomeItems/TodoSection';
import FriendSection from './HomeItems/FriendSection';
import CalendarSection from './HomeItems/CalendarSection';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Title = styled.h3`
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 1.5vh;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  margin-left: 19.5vw;
`;

const Right = styled.div`
  margin-left: 3vw;
  margin-bottom: 3vw;
`;

const Bottom = styled.div`
  display: flex;
`;

export default function Home() {
  const [achievement, setAchievement] = useState({
    currentStreakDays: 0,
    tierDistribution: '',
    tierName: '',
    tierProgress: 0,
    topStreakDays: 0,
    totalCompleteSchedules: 0,
    totalStudyTimes: 0,
    streakList: [],
  });
  const [calendar, setCalendar] = useState({
    idx: 0,
    month: '',
    monthValue: 0,
    planDays: [],
    projects: [],
    year: 0,
  });
  const [friend, setFriend] = useState([]);
  const [home, setHome] = useState({
    id: '',
    majorName: '',
    name: '',
    pfp: '',
    universityName: '',
    badgeIcon: [],
  });
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    async function fetchPage() {
      try {
        // 토큰 가져오기
        const token = localStorage.getItem('token');
        // 토큰 설정
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // 정보 받아오기
        const response = await axios.get('http://localhost:8080/api/v1/home');
        // 정보 저장
        if (response.data.httpResponseStatus === 'SUCCESS') {
          setAchievement(response.data.responseData.achievement);
          setCalendar(response.data.responseData.calendar);
          setFriend(response.data.responseData.friend);
          setHome(response.data.responseData.home);
          setTodo(response.data.responseData.todo);

          console.log(response);
        } else {
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchPage();
  }, []);

  return (
    <PageFrame>
      <Top>
        <HomeSection
          name={home.name}
          id={home.id}
          universityName={home.universityName}
          majorName={home.majorName}
          pfp={home.pfp}
          badgeIcon={home.badgeIcon}
        />
        <AchivementSection
          currentStreak={achievement.currentStreakDays}
          tierDistribution={achievement.tierDistribution}
          tierIcon={achievement.tierIcon}
          tierName={achievement.tierName}
          tierProgress={achievement.tierProgress}
          topStreak={achievement.topStreakDays}
          totalCompleteSchedules={achievement.totalCompleteSchedules}
          totalStudyTime={achievement.totalStudyTimes}
          streakList={achievement.streakList}
        />
      </Top>
      <Bottom>
        <Left>
          <TodoSection plan={todo} />
          <FriendSection friends={friend} />
        </Left>
        <Right>
          <CalendarSection
            calendarIdx={calendar.idx}
            month={calendar.month}
            planDays={calendar.planDays}
            projects={calendar.projects}
          />
        </Right>
      </Bottom>
    </PageFrame>
  );
}
