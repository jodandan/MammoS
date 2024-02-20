import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;
    height: 70%;
    flex-shrink: 0;
    background-color: transparent;
    stroke-width: 4px;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    color: #000;
    font-family: 'PretendardBold';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.4px;
    padding: 10px;
`;

export const NoticeList = styled.div`
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
    padding: 0.5rem;
    border: 2px solid #A7CF41;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
`;