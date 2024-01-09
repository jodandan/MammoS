import styled from 'styled-components';
import { Title } from '../Home';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoBox = styled.div`
  display: flex;
  width: 29vw;
  height: 13vw;
  border: 3px solid #b9d967;
  border-radius: 30px 30px 30px 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: #ecf1e0;
`;

const TodoLine = styled.div`
  display: flex;
  margin: 0.5vw;
  width: 100%;
  height: 10%;
`;

const Todo = styled.div`
  display: flex;
  width: 42%;
  margin-left: 4%;
  margin-right: 4%;
`;

const TodoBtn = styled.input`
  width: 1.2vw;
  height: 1.2vw;
`;

const TodoContent = styled.p`
  margin-top: 2px;
  text-align: left;
  width: 80%;
  height: 100%;
  margin-left: 0.5vw;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export default function TodoSection(todo) {
  const navigate = useNavigate();

  function clickHander() {
    navigate('/planner');
  }

  function makeTodos() {
    const result = [];

    for (let i = 0; i < 5; i++) {
      result.push(<TodoLine>{makeTodo(i)}</TodoLine>);
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
