import styled from 'styled-components';

export const TodoBox = styled.div`
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

export const TodoLine = styled.div`
  display: flex;
  margin: 0.5vw;
  width: 100%;
  height: 10%;
`;

export const Todo = styled.div`
  display: flex;
  align-items: center;
  width: 42%;
  margin-left: 4%;
  margin-right: 4%;
`;

export const TodoBtn = styled.input`
  width: 1.2vw;
  height: 1.2vw;
`;

export const TodoContent = styled.p`
  display: flex;
  font-family: 'PretendardSemiBold';
  margin-top: 2px;
  text-align: left;
  align-items: center;
  width: 80%;
  height: 100%;
  margin-left: 0.5vw;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
