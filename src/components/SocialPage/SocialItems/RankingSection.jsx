import React from 'react';
import styled from 'styled-components';
import RankingCard from './RankingCard';
import PropTypes from 'prop-types';

const RankingSectionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
`;

const RankingSection = ({ ranking }) => {
  // 랭킹을 주간 공부 시간에 따라 정렬하고 원래 순위를 기억
  const sortedRanking = [...ranking]
    .sort((a, b) => b.weeklyStudyTime - a.weeklyStudyTime)
    .map((item, index) => ({ ...item, originalRank: index + 1 }));

  let reorderedRanking = [];
  if (sortedRanking.length >= 3) {
    // 1등을 가운데, 2등을 왼쪽, 3등을 오른쪽에 배치
    reorderedRanking = [sortedRanking[1], sortedRanking[0], sortedRanking[2]];
  } else if (sortedRanking.length === 2) {
    // 1등을 왼쪽, 2등을 왼쪽에 배치
    reorderedRanking = [sortedRanking[1], sortedRanking[0], {}];
  } else if (sortedRanking.length === 1) {
    // 1등만 표시
    reorderedRanking = [{}, sortedRanking[0], {}];
  } else {
    // 랭킹 정보가 없을 경우
    reorderedRanking = [{}, {}, {}];
  }

  function makeRanking() {
    const result = [];
    let cnt = 0;
    const ranking = [2, 1, 3];

    reorderedRanking.map((rank) => {
      result.push(
        <RankingCard
          key={rank.id}
          rank={ranking[cnt]} // 랭킹 번호 전달
          id={rank.id}
          name={rank.name}
          pfp={rank.pfp}
          weeklyStudyTime={rank.weeklyStudyTime}
        />
      );
      cnt++;
    });

    return result;
  }

  return <RankingSectionBox>{makeRanking()}</RankingSectionBox>;
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
