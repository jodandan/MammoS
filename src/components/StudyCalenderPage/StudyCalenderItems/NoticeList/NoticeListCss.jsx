import styled from 'styled-components';

export const Container = styled.div`
    width: 95%;
    height: 60%;
    flex-shrink: 0;
    border-radius: 15px;
    border: 2px solid rgba(167, 207, 65, 0.30);
    background: #FFF;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    white-space: pre-wrap;
    //border: 1px solid red;
`
export const NoticeListBox = styled.div`
    width: 95%;
    height: 70%;
    max-height: 300px;
    overflow-y: auto; 
    padding: 10px;
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

export const NoticeItem = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    border: 2px solid #A7CF41;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    justify-content: space-between;
    cursor: pointer;
    margin-right: 20px;
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 10%;
    //border: 1px solid red;
    text-align: right;
    color: #000;
    font-family: 'PretendardBold';
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.2px;
`;

