import styled from 'styled-components';
import logo from '../../assets/Logo.png';

export function Logos() {
  return (
    <>
      <img style={{ height: '126px' }} src={logo} alt="맘모스" />
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
  height: 40px;
  width: 110px;
  border: solid;
  border-radius: 10px 10px 10px 10px;
  border-color: #a7cf41;
  box-shadow: 1px 2px 2px 0px gray;
  background-color: transparent;
  background-color: inherit;
  font-size: 15px;
  font-weight: bold;
  margin-top: 4vh;
`;

export const AccountManagement = styled.div`
  text-align: center;
  padding: 2vh;
`;

export const UserInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding: 1vh;
  margin-bottom: 3vh;
  width: 200px;
  margin-left: 20%;
  margin-right: 20%;
  box-sizing: border-box;
  text-align: center;
  font-size: 15px;
`;
