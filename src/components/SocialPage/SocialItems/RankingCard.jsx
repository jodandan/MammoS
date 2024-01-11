import React from 'react';
import styled from 'styled-components';
import {css} from '@emotion/react';

const RankCard = styled.div`
  background-color: #d9d9d9; // 랭킹 카드의 배경색
  border-radius: 35px; // 랭킹 카드의 둥근 모서리
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 7vw; // 카드의 너비
  height: 7vw;
  padding: 1rem; // 내부 여백
  margin-top: 8vw;
  position: relative;
  
  // 1등 카드에만 적용되는 스타일
  ${({ rank }) => rank === '1' && css`
    transform: scale(1.5); // 1등 카드를 조금 더 크게 만듦.
    border: 2px solid #b9d967;
  `}
`;

const RankBadge = styled.div`
  top: -10px; // 배지를 상단 외부로 조금 내보냄
  left: 50%;
  background-color: rgba(199, 224, 135, 0.5); // 배지의 배경색
  color: black; // 배지의 텍스트 색상
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.5); // 배지의 그림자 효과 (앞에서 부터 수평, 수직, 퍼짐 정도, 진하기)
  border-radius: 50%; // 원형 배지
  width: 2.5vw; // 배지의 너비
  height: 2.5vw; // 배지의 높이
  font-weight: bold;
  font-size: 1.3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: absolute;
  bottom: -50%; // 뱃지의 높이의 반만큼 위로 올라오게 하고, 20px 더 올라오게 조정
  left: 50%;
  transform: translate(-50%, 330%); // 왼쪽으로 50%, 아래로 뱃지 높이만큼 이동
`;

const RankingCardFont = styled.p`
  font-weight: bold;
  font-size: 0.8vw;
  text-align: center; // 텍스트를 중앙 정렬
  margin-top: 16vw; // 뱃지와의 거리를 설정
  width: 100%;
  flex-direction: column;
`;


const RankingCard = () => {
    return (
        <RankCard>
            <RankBadge>1</RankBadge>
            <RankingCardFont>김충영 / chungyomi</RankingCardFont>
            {/*<RankingCardFont>ThisWeek | 12:57</RankingCardFont>*/}
        </RankCard>
    );
};

export default RankingCard;
