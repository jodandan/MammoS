import React from 'react';
import styled from 'styled-components';
import RankingCard from './RankingCard';
import PropTypes from 'prop-types';

const RankingSectionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw
`;

const RankingSection = ({
    ranking,
    friendIndex
}) => {

    // 1. 랭킹을 주간 공부 시간에 따라 정렬하고 원래 순위를 기억
    const sortedRanking = [...ranking]
        .sort((a, b) => b.weeklyStudyTime - a.weeklyStudyTime)
        .map((item, index) => ({ ...item, originalRank: index + 1 }));


    // 2. 1등을 배열의 가운데로 이동
    const reorderedRanking = sortedRanking.length > 1
        ? [sortedRanking[1], sortedRanking[0], sortedRanking[2]]
        : sortedRanking;

    return (
        <RankingSectionBox>
            {reorderedRanking.map((rank) => (
                <RankingCard
                    key={friendIndex}
                    rank={rank.originalRank} // 랭킹 번호 전달
                    id={rank.id}
                    name={rank.name}
                    pfp={rank.pfp}
                    weeklyStudyTime={rank.weeklyStudyTime}
                />
            ))}
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
    friendIndex: PropTypes.number.isRequired
};
export default RankingSection;
