import styled from 'styled-components';
import { Title } from '../Home';
import { useNavigate } from 'react-router-dom';

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

export default function TodoSection() {
  const navigate = useNavigate();

  function clickHander() {
    navigate('/planner');
  }

  return (
    <div>
      <Title onClick={() => clickHander()}>TODAY&apos;S TO DO</Title>
      <TodoBox>
        <TodoLine>
          <Todo>
            <TodoBtn type="checkbox" />
            <TodoContent>
              해야 할 일 1 해야 할 일 1 해야 할 일 1 해야 할 일 1 해야 할 일 1
              해야 할 일 1 해야 할 일 1
            </TodoContent>
          </Todo>
          <Todo>
            <TodoBtn type="checkbox" />
            <TodoContent>해야 할 일 2</TodoContent>
          </Todo>
        </TodoLine>
        <TodoLine>
          <Todo>
            <TodoBtn type="checkbox" />
            <TodoContent>해야 할 일 3</TodoContent>
          </Todo>
          <Todo>
            <TodoBtn type="checkbox" />
            <TodoContent>해야 할 일 4</TodoContent>
          </Todo>
        </TodoLine>
        <TodoLine>
          <Todo>
            <TodoBtn type="checkbox" />
            <TodoContent>해야 할 일 5</TodoContent>
          </Todo>
          <Todo>
            <TodoBtn type="checkbox" />
            <TodoContent>해야 할 일 6</TodoContent>
          </Todo>
        </TodoLine>
        <TodoLine>
          <Todo>
            <TodoBtn type="checkbox" />
            <TodoContent>해야 할 일 7</TodoContent>
          </Todo>
          <Todo>
            <TodoBtn type="checkbox" />
            <TodoContent>해야 할 일 8</TodoContent>
          </Todo>
        </TodoLine>
        <TodoLine>
          <Todo>
            <TodoBtn type="checkbox" />
            <TodoContent>해야 할 일 9</TodoContent>
          </Todo>
          <Todo>
            <TodoBtn type="checkbox" />
            <TodoContent>해야 할 일 10</TodoContent>
          </Todo>
        </TodoLine>
      </TodoBox>
    </div>
  );
}
