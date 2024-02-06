import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;
  padding-top: 25px;
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
