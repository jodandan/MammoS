import styled from 'styled-components';

export const TotalBox = styled.div`
    height: 387px;
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    height: 297px;
    flex-shrink: 0;
    background-color: transparent;
    stroke-width: 4px;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const BoxTitle = styled.div`
    color: #000;
    font-family: 'PretendardBold';
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.68px;
    padding-bottom: 2vh;
    padding-left: 4px;
`;

export const FirstLine = styled.div`
    display: flex;
    padding: 1vw;
    //border: 1px solid blue;
`;

export const LeftSide = styled.div`
    width: 95%;
    color: #000;
    font-family: 'PretendardBold';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.4px;
`;

export const DataBox = styled.div`
    width: 80%;
    color: #000;
    font-family: 'PretendardBold';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.4px;
`;

export const LocationBox = styled.div`
    width: 100%;
    color: #000;
    font-family: 'PretendardBold';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.32px;
    margin: auto;
`;

export const SecondLine = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
`;

export const NoticeBox = styled.div`
    width: 60%;
    height: 100%;
    background-color: transparent;
    stroke-width: 4px;
    border-radius: 20px;
    border: 4px solid #A7CF41;
`;

export const Title = styled.div`
    width: 100%;
    color: #000;
    font-family: 'PretendardBold';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.32px;
`;

export const EditBox = styled.div`
    width: 5%;
`;

export const InputBox = styled.div`
    width: 376px;
    height: 110px;
    background-color: transparent;
    font-family: 'PretendardBold';
    //border: 1px solid blue;
    margin: 0.5rem;
`;

export const PeopleListBox = styled.div`
    width: 20%;
    //border: 1px solid red;
    padding-left: 20px;
`;

export const ListTitle = styled.div`
    width: 40%;
    color: #000;
    font-family: 'PretendardBold';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.32px;
`;

export const PeopleList = styled.div`
    width: 100%;
    height: 80%;
    //border: 1px solid black;
`;

export const CheckBoxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    input {
    appearance: none;
    margin-right: 0.5rem;
    border: 2px solid #A7CF41;
    border-radius: 3px;
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    border: 1.5px solid gainsboro;
    border-radius: 0.35rem;

  }

  input:checked {
    background-color: #A7CF41;
  }

  span {
    color: #000;
    font-family: 'PretendardBold';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
  }
`;

export const Pagingbox = styled.div`
    position: absolute;
    top: 80%;
    left: 3%;
    width: 90%;
    display: flex;
    justify-content: space-between;
`;

export const FirstBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 98%;


`;

export const InviteList = styled.div`
    width: 100%;
    text-decoration: underline;
  font-size: 18px;
  margin-left: 0.3vw;
`;

export const CountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
    border-radius: 50%;
    background-color: red;
    width: 1.8vw;
    height: 1.3vw;
    text-align: center;
    color: white;
`;






