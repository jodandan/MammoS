import onStreak from './OnStreak.png';
import offStreak from './OffStreak.png';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Title } from '../HomeItemCss';
import {
  AchivementBox,
  TierImg,
  TierInfoBox,
  TierTitle,
  Comment,
  HorizontalBar,
  GaugeBox,
  Gauge,
  MyInfoBox,
  StreakSection,
  TopStreakBox,
  TopStreak,
  CurrentStreakBox,
  CurrentStreak,
  StreakBox,
  StreakLine,
  Streak,
} from './AchievementSectionItemCss';

export default function AchivementSection({
  currentStreak,
  tierDistribution,
  tierIcon,
  tierName,
  tierProgress,
  topStreak,
  totalCompleteSchedules,
  totalStudyTime,
  streakList,
}) {
  const navigate = useNavigate();

  function clickHander() {
    navigate('/challenge');
  }

  function makeStreaks() {
    const result = [];

    for (let i = 0; i < 21; i++) {
      result.push(<StreakLine key={i}>{makeStreak(i)}</StreakLine>);
    }

    return result;
  }

  function makeStreak(line) {
    const result = [];

    for (let i = 1; i < 8; i++) {
      let thisDay = new Date();
      thisDay.setDate(thisDay.getDate() - (147 - (line * 7 + i)));

      let thisDayStreak;
      streakList.forEach((streak) => {
        const streakDay = new Date(streak.streakDate);
        if (streakDay.getFullYear() === thisDay.getFullYear()) {
          if (streakDay.getMonth() === thisDay.getMonth()) {
            if (streakDay.getDate() === thisDay.getDate())
              thisDayStreak = streak;
          }
        }
      });

      const reverseStreakList = Object.values(streakList).reverse();

      // 스트릭 범위 밖은 offStreak 처리
      if (thisDayStreak === undefined) {
        result.push(
          <Streak key={148 - (line * 7 + i)} src={offStreak}></Streak>
        );
      } else {
        if (thisDayStreak.streakLevel) {
          result.push(
            <Streak key={148 - (line * 7 + i)} src={onStreak}></Streak>
          );
        } else {
          result.push(
            <Streak key={148 - (line * 7 + i)} src={offStreak}></Streak>
          );
        }
      }
    }

    return result;
  }

  return (
    <div>
      <Title onClick={() => clickHander()}>ACHIEVEMENT</Title>
      <AchivementBox>
        <TierImg src={tierIcon} />
        <div>
          <TierInfoBox>
            <TierTitle>{tierName}</TierTitle>
            <Comment className="tier">{tierDistribution}</Comment>
            <HorizontalBar />
          </TierInfoBox>
          <MyInfoBox>
            <div className="left">
              <Comment className="gauge">현재 티어 진행도</Comment>
              <GaugeBox>
                {tierProgress <= 100 && <Gauge percent={tierProgress} />}
                {tierProgress > 100 && <Gauge percent={100} />}
              </GaugeBox>
            </div>
            <div className="right">
              <div className="top">
                <Comment className="info">총 공부 시간 :</Comment>
                <Comment className="userInput">{totalStudyTime}시간</Comment>
              </div>
              <div className="bottom">
                <Comment className="info">총 완수 계획 :</Comment>
                <Comment className="userInput">
                  {totalCompleteSchedules}개
                </Comment>
              </div>
            </div>
          </MyInfoBox>
          <StreakSection>
            <div className="left">
              <StreakBox>{makeStreaks()}</StreakBox>
              <div className="right">
                <CurrentStreakBox>
                  <CurrentStreak className="title">
                    Current Streak
                  </CurrentStreak>
                  <CurrentStreak className="number">
                    {currentStreak}
                  </CurrentStreak>
                </CurrentStreakBox>
                <TopStreakBox>
                  <TopStreak className="title">Top Streak</TopStreak>
                  <TopStreak className="number">{topStreak}</TopStreak>
                </TopStreakBox>
              </div>
            </div>
          </StreakSection>
        </div>
      </AchivementBox>
    </div>
  );
}

AchivementSection.propTypes = {
  currentStreak: PropTypes.number.isRequired,
  tierDistribution: PropTypes.string.isRequired,
  tierIcon: PropTypes.string.isRequired,
  tierName: PropTypes.string.isRequired,
  tierProgress: PropTypes.number.isRequired,
  topStreak: PropTypes.number.isRequired,
  totalCompleteSchedules: PropTypes.number.isRequired,
  totalStudyTime: PropTypes.number.isRequired,
  streakList: PropTypes.array.isRequired,
};
