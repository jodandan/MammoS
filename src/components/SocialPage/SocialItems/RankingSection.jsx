import React from 'react';
import styled from 'styled-components';
import RankingCard from './RankingCard';

const RankingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
`;

const RankingSection = () => {
    return (
        <RankingBox>
            <RankingCard></RankingCard>
            <RankingCard></RankingCard>
            <RankingCard></RankingCard>
        </RankingBox>
    );
};

export default RankingSection;
