import React from 'react';
import styled from 'styled-components';
import RankingCard from './RankingCard';

const RankingSectionBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30vw
`;

const RankingSection = () => {
    return (
        <RankingSectionBox>
            <RankingCard></RankingCard>
            <RankingCard></RankingCard>
            <RankingCard></RankingCard>
        </RankingSectionBox>
    );
};

export default RankingSection;
