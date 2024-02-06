import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const RankingCardBox = styled.div`
  align-items: center;
  margin-right: 2vw; 
  margin-left: 2vw; 
  margin-top: 3vw;
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
  margin-top: ${({ isTopRank }) => isTopRank ? '5vw' : '7vw'}; // 1등일 때 크기를 1.5배로 증가
  position: relative;
  transform: ${({ isTopRank }) => isTopRank ? 'scale(1.5)' : 'none'}; // 1등일 때 크기를 1.5배로 증가
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
  transform: translate(-50%, 330%);
  font-family: 'PretendardSemiBold';
`;

const RankingCardFont = styled.p`
  font-family: 'PretendardSemiBold';
  font-size: 13px;
  padding: 5px;
  margin: 0px;
  
`;

const FontBox= styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ isTopRank }) => isTopRank ? '3vw' : '0.5vw'}; // 1등일 때 크기를 1.5배로 증가
`

const FontRow = styled.div`
  display: flex;
  justify-content: center;
  &.user_info {
    margin-top: 25px;
  }
`;


const RankingCard = ({
    rank,
    pfp,
    id,
    name,
    weeklyStudyTime
}) => {
    const isTopRank = rank === 1; // 1등인지 여부 확인

    const formatTime = (minutes) => {
        const totalTimeHour = String(Math.floor(minutes / 60)).padStart(2, '0');
        const totalTimeMin = String(Math.floor(minutes % 60)).padStart(2, '0');
        return `${totalTimeHour}:${totalTimeMin}`;
    };

    const formattedWeeklyStudyTime = formatTime(weeklyStudyTime); // 주간 공부 시간 포매팅

    return (
        <RankingCardBox>
            <RankCard isTopRank={isTopRank}>
                <RankBadge>{rank}</RankBadge>
            </RankCard>
            <FontBox isTopRank={isTopRank}>
                <FontRow className="user_info">
                    <RankingCardFont>{name}</RankingCardFont>
                    <RankingCardFont>{id}</RankingCardFont>
                </FontRow>
                <FontRow>
                    <RankingCardFont>WeekTime | {formattedWeeklyStudyTime}</RankingCardFont>
                </FontRow>
            </FontBox>
        </RankingCardBox>
    );
};

RankingCard.propTypes = {
    rank: PropTypes.number.isRequired, // rank prop 타입 지정
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    weeklyStudyTime: PropTypes.number.isRequired,
    pfp: PropTypes.string.isRequired
};

export default RankingCard;
