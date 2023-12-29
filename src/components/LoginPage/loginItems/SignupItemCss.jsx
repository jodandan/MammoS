import styled from 'styled-components';
import logo from './Logo.png';

export function Logos() {
  return (
    <>
      <img
        style={{ height: '56px', marginRight: '20px' }}
        src={logo}
        alt="맘모스"
      />
    </>
  );
}

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const UserInput = styled.input`
  border: 3px solid black;
  padding: 2vh;
  margin-bottom: -0.4vh;
  width: 30%;
  box-sizing: border-box;

  font-size: 15px;
`;

export const Title = styled.h1`
  padding: 2vh;
`;

export const SelectUniv = styled.select`
  width: 30%;
  border: 3px solid black;
  padding: 2vh;
  font-size: 15px;
  margin-bottom: -0.4vh;
`;

export const SelectCollege = styled.select`
  width: 15.1%;
  border: 3px solid black;
  padding: 2vh;
  font-size: 15px;
  margin-right: -0.2vh;
`;

export const SelectMajor = styled.select`
  width: 15.1%;
  border: 3px solid black;
  padding: 2vh;
  margin-left: -0.2vh;
  font-size: 15px;
`;

export const HorizontalInputBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin-left: 33%;
  padding-top: 2rem;
  border: none;
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  margin-top: -15px;
`;

export const StyledInput = styled.input`
  width: 1rem;
  height: 1rem;
`;

export const StyledP = styled.p`
  margin-left: 0.5rem;
  font-weight: ${(props) => (props.isBold ? 'bold' : 'normal')};
`;

export const EmailInput = styled.div`
  position: relative;
  width: 100%;
  left: 35%;
`;

export const EmailButton = styled.button`
  position: absolute;
  border: none;
  border-left: none;
  padding: 1.96vh;
  margin-top: 2px;
  margin-left: -6%;

  background-color: transparent;
  cursor: pointer;
`;

export const SubmitBtn = styled.button`
  height: 49px;
  width: 214px;
  font-weight: bold;
  font-size: 20px;
  border: solid;
  border-radius: 10px 10px 10px 10px;
  border-color: #a7cf41;
  box-shadow: 1px 2px 2px 0px gray;
  background-color: transparent;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 20px;
`;

export const Top = styled.div`
  margin-left: 15%;
  width: 70%;
  display: flex;
`;
