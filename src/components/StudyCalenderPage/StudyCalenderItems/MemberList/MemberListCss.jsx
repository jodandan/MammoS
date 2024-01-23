import styled from 'styled-components';

export const PeopleListBox = styled.div`
    width: 80%;
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
    padding-top: 10px;

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