import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  TodoBox,
  TodoLine,
  Todo,
  TodoBtn,
  TodoContent,
} from './TodoSectionItemCss';
import { Title } from '../HomeItemCss';

export default function TodoSection(todo) {
  const navigate = useNavigate();

  function clickHander() {
    navigate('/planner');
  }

  function makeTodos() {
    const result = [];

    for (let i = 0; i < 5; i++) {
      result.push(<TodoLine key={i}>{makeTodo(i)}</TodoLine>);
    }

    return result;
  }

  function TodoItem({ plan }) {
    const [isChecked, setIsChecked] = useState(plan.isComplete);

    const checkHandler = async () => {
      setIsChecked(!isChecked);

      await axios.patch(`http://localhost:8080/api/v1/home/${plan.planIdx}`);
    };

    return (
      <Todo>
        <TodoBtn
          type="checkbox"
          name={plan.planIdx}
          onChange={checkHandler}
          checked={isChecked}
        />
        <TodoContent>{plan.planName}</TodoContent>
      </Todo>
    );
  }

  TodoItem.propTypes = {
    plan: PropTypes.shape({
      planIdx: PropTypes.number.isRequired,
      planName: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    }).isRequired,
  };

  function makeTodo(line) {
    const result = [];

    for (let i = 0; i < 2; i++) {
      if (todo.plan.length > line * 2 + i) {
        result.push(
          <TodoItem
            key={todo.plan[line * 2 + i].planIdx}
            plan={todo.plan[line * 2 + i]}
          />
        );
      } else {
        result.push(
          <Todo key={i}>
            <TodoBtn type="checkbox" />
            <TodoContent></TodoContent>
          </Todo>
        );
      }
    }

    return result;
  }

  return (
    <div>
      <Title onClick={() => clickHander()}>TODAY&apos;S TO DO</Title>
      <TodoBox>{makeTodos()}</TodoBox>
    </div>
  );
}
