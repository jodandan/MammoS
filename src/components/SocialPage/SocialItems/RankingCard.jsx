import React from 'react';
import styled from 'styled-components';
import {css} from '@emotion/react';
import PropTypes from 'prop-types';
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


const RankingCard = ({
    pfp,
    id,
    name,
    weeklyStudyTime
}) => {
    return (
        <RankingCardBox>
            <RankCard>
                <RankBadge>1</RankBadge>
            </RankCard>
            <FontRow className="user_info">
                <RankingCardFont>{name}</RankingCardFont>
                <RankingCardFont>{id}</RankingCardFont>
            </FontRow>
            <FontRow>
                <RankingCardFont>WeekTime | {weeklyStudyTime}</RankingCardFont>
            </FontRow>
        </RankingCardBox>
    );
};

RankingCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    weeklyStudyTime: PropTypes.number.isRequired,
    pfp: PropTypes.string.isRequired
};

export default RankingCard;
