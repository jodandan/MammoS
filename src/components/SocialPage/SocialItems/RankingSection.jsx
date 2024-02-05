import React from 'react';
import styled from 'styled-components';
import RankingCard from './RankingCard';
import PropTypes from 'prop-types';

const RankingSectionBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30vw
`;

const RankingSection = ({
    ranking
}) => {
    return (
        <RankingSectionBox>
            <RankingCard></RankingCard>
            <RankingCard></RankingCard>
            <RankingCard></RankingCard>
        </RankingSectionBox>
    );
};

RankingSection.propTypes = {
    ranking: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            pfp: PropTypes.string.isRequired,
            weeklyStudyTime: PropTypes.number.isRequired,
        })
    ).isRequired,
};
export default RankingSection;
