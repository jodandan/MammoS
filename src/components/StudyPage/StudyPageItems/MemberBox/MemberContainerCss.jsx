import styled from 'styled-components';

export const Container = styled.div`
    width: 45%;
    height: 70%;
    flex-shrink: 0;
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

export const MemberList = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 70%;
    max-height: 300px;
    overflow-y: auto; 
    overflow-x: hidden; 
    
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
  width: 90%;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid #9C9C9C;
  margin-left: 2px;
  div {
    flex: 1;
  }
`;

