import styled from 'styled-components';

export const ModalBox = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TabButton = styled.button`
  display: flex;
  font-family: 'PretendardSemiBold';
  background: none; 
  border: none; 
  outline: none;
  cursor: pointer; 
  font-size: 24px; 
  color: #B3B3B3;
  margin-left: 2vw;
  margin-top: 1.2vw;
  &:hover {
    color: #000000; 
  }
  // 현재 활성화된 탭 스타일
  &.active {
    color: #000000; // 활성 탭의 글자색 변경
  }
`;

export const ResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const RequestFriendCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25vw;
  height: 2vw;
  margin-top: 1.5vw;
  border: 2px solid #D9D9D9;
  border-radius: 5px;
  background-color: white;
`;


export const Info = styled.p`
  font-family: 'PretendardSemiBold';
  margin: auto;
  &.bold {
    font-size: 17px;
  }

  &.light {
    margin-left: 10px;
    font-size: 13px;
    color: #909090;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 1vw;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1vw;
  
  &.accept {
    padding: 1px;
    border: 2px solid #A7CF41;
    border-radius: 5px;
    cursor: pointer;
  }

  &.reject {
    padding: 1px;
    border: 2px solid #FF1C1C;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const Title = styled.div`
    font-size: 25px; 
    color: black;
    font-family: 'PretendardSemiBold';
`;