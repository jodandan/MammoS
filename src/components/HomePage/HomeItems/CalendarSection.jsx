import styled from 'styled-components';
import { Title } from '../Home';
import Calendar from './Calendar';
import { useNavigate } from 'react-router-dom';

const CalendarBox = styled.div`
  background-color: #ecf1e0;
  width: 29vw;
  height: 29.5vw;
  border: 3px solid #b9d967;
  border-radius: 30px 30px 30px 30px;
`;

const Weeks = styled.ul``;

const Days = styled.li``;

export default function CalendarSection() {
  const navigate = useNavigate();

  function clickHandler() {
    navigate('/planner');
  }

  return (
    <div>
      <Title onClick={() => clickHandler()}>CALENDAR</Title>
      <CalendarBox>
        <Calendar />
      </CalendarBox>
    </div>
  );
}
