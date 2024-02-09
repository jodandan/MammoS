import styled from 'styled-components';

export const ModalBox = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  z-index: 1001; // ModalFrame 위에 위치
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
  margin: 10px;
  cursor: pointer; 
  font-size: 25px; 
  color: #B3B3B3;
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
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;


export const RequestFriendCard = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 2.3vw;
  border: 2px solid #D9D9D9;
  border-radius: 5px;
  background-origin: border-box;
  background-clip: content-box,border-box;
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
  justify-content: space-between;
  align-items: center;
  gap: 270px;
`;


export const IconBox = styled.div`
  
  &.accept { 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;
    border: 2px solid #A7CF41;
    border-radius: 5px;
    height: 15px;
    width: 15px;
    cursor: pointer;
    margin-left: 10px;
    
  }

  &.reject {  
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;
    border: 2px solid #FF1C1C;
    border-radius: 5px;
    height: 15px;
    width: 15px;
    cursor: pointer;
    margin-left: 15px;
  }
`;

export const Title = styled.div`
    font-size: 25px; 
    color: black;
    font-family: 'PretendardSemiBold';
`;