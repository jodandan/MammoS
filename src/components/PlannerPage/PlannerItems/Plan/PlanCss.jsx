import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const PlanContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 55%;
  border: 1px solid rgba(160, 160, 160, 0.5);
  box-shadow: 0px 0px 10px 4px rgba(160, 160, 160, 0.5);
  margin-bottom: 2vw;
  border-radius: 20px;
`;

export const PlanBox = styled.div`
  margin: 1vw;
  margin-bottom: 0px;
  height: 83%;
  overflow: auto;

  &::-webkit-scrollbar {
    border-left: 9px solid;
    border-right: 9px solid;
    border-image: linear-gradient(#e8f3ce, #ffffff);
    border-image-slice: 1;
    background-color: #b9d967;
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    border-left: 5px solid;
    border-right: 5px solid;
    border-image: linear-gradient(#e8f3ce, #ffffff);
    border-image-slice: 1;
    background-color: #b9d967;
    border-radius: 7px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const StudyTime = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
`;

export const StudyTimeFont = styled.p`
  font-family: 'PretendardBold';
  margin-top: 5px;
  font-size: 15px;
  font-weight: bold;
  padding-right: 8px;

  &.time {
    font-size: 20px;
    padding-right: 20px;
  }
`;

export const UserPlan = styled.div`
  border-radius: 5px;
  margin-bottom: 0.4vw;
  height: ${({ ischecked }) => (ischecked === 'true' ? '1.6vw' : '2.5vw')};
  background-color: ${({ ischecked, isrunning }) =>
    ischecked === 'true'
      ? '#454545'
      : isrunning === 'true'
        ? '#90C20D'
        : '#C6EF5E'};
  box-shadow: 0px 3px 3px 0px rgb(0, 0, 0, 0.25);
  display: flex;
  align-items: center;

  &.add {
    background-color: #f7fee6;
  }

  & > p {
    color: ${({ ischecked }) => (ischecked === 'true' ? 'white' : 'black')};
  }

  & > div > p {
    color: ${({ ischecked }) => (ischecked === 'true' ? 'white' : 'black')};
    width: ${({ ischecked }) => (ischecked === 'true' ? '100%' : '88%')};
  }

  & > input {
    border-color: ${({ ischecked }) =>
      ischecked === 'true' ? 'white' : 'black'};
  }
`;

export const PlanBtn = styled.input`
  border: 2px solid;
  background-color: transparent;
  border-radius: 3px;
  margin-left: 15px;
  width: 10px;
  height: 10px;
`;

export const PlanContentBox = styled.div`
  width: 50%;
`;

export const PlanContent = styled.p`
  font-family: 'PretendardSemiBold';
  margin-left: 0.5vw;

  &.content {
    overflow: auto;

    white-space: nowrap;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &.timespent {
    font-size: 13px;
    text-align: right;
  }

  &.time {
    font-weight: bold;
    text-align: right;
    font-size: 18px;
  }

  &.notStarted {
    font-weight: bold;
    color: gray;
    padding-left: 28px;
  }

  &.add {
    color: gray;
    margin-left: 20px;
    margin-right: 45%;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 45px;
  margin-right: 3%;
`;

export const AddBtn = styled.div`
  font-family: 'PretendardSemiBold';
  cursor: pointer;
  display: flex;
  width: 80px;
  height: 20px;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  background-color: #b3e13e;
  border-radius: 30px;
  box-shadow: 1px 2px 3px 0px rgb(0, 0, 0, 0.25);
`;

export const UserInput = styled.input`
  font-family: 'PretendardSemiBold';
  border: none;
  border-bottom: 1px solid black;
  margin-left: 30px;
  font-size: 15px;
  width: 150px;
  padding-bottom: 5px;
  text-align: center;
`;

export const ModalContent = styled.p`
  font-family: 'PretendardSemiBold';
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const StyledDatePicker = styled(ReactDatePicker)`
  font-family: 'PretendardSemiBold';
  width: 150px;
  margin-left: 50px;
  font-size: 15px;
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  padding-bottom: 5px;
`;
