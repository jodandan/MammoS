import React from 'react';
import styled from 'styled-components';
import {css} from '@emotion/react';

const RankingCardBox = styled.div`
    align-items: center;
`;


const RankCard = styled.div`
  background-color: #d9d9d9; 
  border-radius: 35px; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 7vw; 
  height: 7vw;
  padding: 1rem; 
  margin-top: 7vw;
  position: relative;
  
  // 1등 카드에만 적용되는 스타일
  ${({ rank }) => rank === '1' && css`
    transform: scale(1.5); 
  `}
`;

const RankBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: -10px; 
  left: 50%;
  background-color: rgba(199, 224, 135, 0.5); 
  color: black; 
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.5); 
  border-radius: 50%; 
  width: 2.5vw; 
  height: 2.5vw; 
  font-weight: bold;
  font-size: 1.3vw;
  position: absolute;
  transform: translate(-50%, 330%); // 왼쪽으로 50%, 아래로 뱃지 높이만큼 이동
`;

const RankingCardFont = styled.p`
  font-weight: bold;
  font-size: 13px;
  padding: 5px;
  margin: 0px;
`;

const FontRow = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 13px;
  &.user_info {
    margin-top: 25px;
  }
`;


const RankingCard = () => {
    return (
        <RankingCardBox>
            <RankCard>
                <RankBadge>1</RankBadge>
            </RankCard>
            <FontRow className="user_info">
                <RankingCardFont>김충영</RankingCardFont>
                <RankingCardFont>chungyomi</RankingCardFont>
            </FontRow>
            <FontRow>
                <RankingCardFont>WeekTime | 10:25</RankingCardFont>
            </FontRow>
        </RankingCardBox>
    );
};

export default RankingCard;
