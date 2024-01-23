import styled from 'styled-components';

export const Container = styled.div`
    width: 35%;
    height: 60%;
    flex-shrink: 0;
    background-color: transparent;
    stroke-width: 4px;
    border-radius: 20px;
    border: 4px solid #A7CF41;
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

export const MemberList = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 70%;
    max-height: 300px;
    overflow-y: auto; 
    
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


export const MemberItem = styled.div`
  display: flex;
  padding: 0.5rem;
  width: 94.5%;
  align-items: center;
  justify-content: flex-end;

  div {
    flex: 1;
  }
`;

