import Calendar from './Calendar';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CalendarBox } from './CalendarSectionItemCss';
import { Title } from '../HomeItemCss';

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
