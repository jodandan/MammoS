import styled from 'styled-components';
import { Title } from '../Home';
import Calendar from './Calendar';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ecf1e0;
  width: 29vw;
  height: 29.5vw;
  border: 3px solid #b9d967;
  border-radius: 30px 30px 30px 30px;
`;

export default function CalendarSection({
  calendarIdx,
  month,
  planDays,
  projects,
}) {
  const navigate = useNavigate();

  function clickHandler() {
    navigate('/planner');
  }

  return (
    <div>
      <Title onClick={() => clickHandler()}>CALENDAR</Title>
      <CalendarBox>
        <Calendar
          key={calendarIdx}
          month={month}
          planDays={planDays}
          projects={projects}
        />
      </CalendarBox>
    </div>
  );
}

CalendarSection.propTypes = {
  calendarIdx: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired,
  planDays: PropTypes.arrayOf(PropTypes.number).isRequired,
  projects: PropTypes.array.isRequired,
};
