import styled from 'styled-components';

export function Logos() {
  return (
    <>
      <img
        style={{ height: '200px' }}
        src="https://i.namu.wiki/i/GJbyYln_LVx1CAfcEA53aO8cC8i271s5kIXAfExNLxoVUPm8E7D-H75YRo2aQrA9KBYMk-x2BokkDOAbYiPgX4wnGqz67Ns0kIOV0Ii3pqNqo63JBYP3hR6HcNbhZK4UwXMs-xEEVb1_Q-wVdImVgQ.webp"
        alt="¸¾¸ð½º·Î°í"
      />
    </>
  );
}

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

export const Title = styled.h2`
  text-align: center;
  padding-top: 3vh;
  padding-bottom: 7vh;
`;

export const LoginForm = styled.form`
  text-align: center;
  padding-top: 2vh;
`;

export const SubmitBtn = styled.button`
  border: none;
  background-color: inherit;
  font-size: 20px;
  margin-top: 4vh;
`;

export const AccountManagement = styled.div`
  text-align: center;
  padding: 2vh;
`;

export const UserInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding: 2vh;
  margin-bottom: 2vh;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  font-size: 20px;
`;
