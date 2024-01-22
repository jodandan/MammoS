import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';

export const ProjectContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 39%;
  border: 1px solid rgba(160, 160, 160, 0.5);
  box-shadow: 0px 0px 10px 4px rgba(160, 160, 160, 0.5);
  border-radius: 20px;
`;

export const ProjectBox = styled.div`
  margin: 1vw;
  margin-bottom: 0px;

  height: 83%;
  overflow: auto;
  &::-webkit-scrollbar {
    border-left: 9px solid white;
    border-right: 9px solid white;
    background-color: #b9d967;
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    border-left: 5px solid white;
    border-right: 5px solid white;
    background-color: #b9d967;
    border-radius: 7px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const ProjectBtn = styled.input`
  border: 2px solid;
  background-color: transparent;
  border-radius: 3px;
  margin-left: 15px;
  width: 10px;
  height: 10px;
`;

export const UserProject = styled.div`
  border-radius: 5px;
  margin-bottom: 0.4vw;
  height: ${({ ischecked }) => (ischecked === 'true' ? '1.6vw' : '2.5vw')};
  background-color: ${({ ischecked, isvisible }) =>
    ischecked === 'true'
      ? '#454545'
      : isvisible === 'true'
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
  }

  & > input {
    border-color: ${({ ischecked }) =>
      ischecked === 'true' ? 'white' : 'black'};
  }
`;

export const ProjectContentBox = styled.div`
  width: 56.5%;
`;

export const ProjectContent = styled.p`
  font-family: 'PretendardSemiBold';
  margin-left: 0.5vw;

  &.content {
    width: 90%;
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

  &.add {
    color: gray;
    margin-left: 20px;
    margin-right: 45%;
  }
`;

export const Duration = styled.p`
  font-family: 'PretendardSemiBold';
  font-size: 10px;

  &.start {
    font-size: 15px;
    margin-right: 5px;
  }

  &.end {
    margin-left: 5px;
    font-size: 15px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 60px;
`;

export const AddBtn = styled.div`
  cursor: pointer;
  font-family: 'PretendardSemiBold';
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
  width: 230px;
  margin-left: 20px;
  font-size: 15px;
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  padding-bottom: 5px;
`;
