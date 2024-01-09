import styled from 'styled-components';
import { Title } from '../Home';
import onStreak from './OnStreak.png';
import offStreak from './OffStreak.png';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AchivementBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43vw;
  height: 15vw;
  border: 3px solid #b9d967;
  border-radius: 30px 30px 30px 30px;
  background-color: #ecf1e0;
`;

const TierImg = styled.img`
  width: 12vw;
  height: 12vw;
  margin-right: 1vw;
  border: 3px solid black;
  border-radius: 30px 30px 30px 30px;
`;

const TierInfoBox = styled.div`
  margin-top: -0.5vw;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  width: 26vw;
  height: 2vw;
`;

const TierTitle = styled.h3`
  font-size: 24px;
  margin-top: 0.5vw;
  margin-bottom: 0vw;
`;

const Comment = styled.p`
  font-size: 11px;
  color: black;
  &.tier {
    opacity: 0.5;
    margin-bottom: -0.3vw;
    margin-top: -0.5vw;
    text-align: right;
  }
  &.gauge {
    margin-bottom: 0.5vw;
  }
  &.info {
    font-size: 13px;
  }
  &.userInput {
    width: 40%;
    font-size: 13px;
    text-align: right;
  }
`;

const HorizontalBar = styled.hr`
  width: 100%;
  background: gray;
  height: 1px;
  border: 0px;
`;

const GaugeBox = styled.div`
  background: white;
  width: 100%;
  height: 0.5vw;
  border-radius: 20px 20px 20px 20px;
`;

const Gauge = styled.div`
  background: #b9d967;
  height: 100%;
  width: ${({ percent }) => `${percent}%`};
  border-radius: 20px 20px 20px 20px;
`;

const MyInfoBox = styled.div`
  display: flex;
  width: 26vw;
  height: 2vw;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  margin-bottom: 1.5vw;

  & > .left {
    width: 50%;
    margin-right: 10%;
  }
  & > .right {
    width: 40%;
    margin-left: 10%;
    & > .top {
      display: flex;
      margin-bottom: -1.3vw;
    }
    & > .bottom {
      display: flex;
    }
  }
`;

const StreakSection = styled.div`
  width: 26vw;
  height: 7vw;
  margin: 0.5vw;
  background: white;
  border: 1px solid;
  border-color: transparent;
  border-radius: 15px 15px 15px 15px;
  vertical-align: bottom;

  & .left {
    margin-top: 0.7vw;
    margin-left: 0.5vw;
    display: flex;
  }

  & .right {
    margin-top: -1.3vw;
  }
`;

const TopStreakBox = styled.div`
  width: 7vw;
  margin-top: -1vw;

  & .title {
    text-align: right;
    margin-right: 0.5vw;
    margin-top: 1vw;
  }
  & .number {
    text-align: right;
    margin-right: 0.5vw;
    margin-top: -1vw;
    font-size: 23px;
    font-weight: bold;
  }
`;

const TopStreak = styled.p`
  font-size: 15px;
`;

const CurrentStreakBox = styled.div`
  height: 2.5vw;
  width: 7vw;
  margin-top: 2vw;

  & .title {
    margin-right: 0.5vw;
    margin-top: 1vw;
    text-align: right;
  }

  & .number {
    text-align: right;
    margin-right: 0.5vw;
    margin-top: -1vw;
    font-size: 23px;
    font-weight: bold;
  }
`;

const CurrentStreak = styled.p`
  font-size: 15px;
`;

const StreakBox = styled.div`
  display: flex;
  margin-left: 0.5vw;
  margin-right: -0.5vw;
  height: 5vw;
  width: 18vw;
  border-radius: 15px 15px 15px 15px;
`;

const StreakLine = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px 15px 15px 15px;
  height: 6vw;
  margin-left: 0.1vw;
  margin-right: 0.1vw;
  flex-wrap: wrap;
`;

const Streak = styled.img`
  height: 0.6vw;
  width: 0.6vw;
  margin-top: 0.1vw;
  margin-bottom: 0.1vw;
`;

export default function AchivementSection({
  currentStreak,
  tierDistribution,
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
      result.push(<StreakLine>{makeStreak(i)}</StreakLine>);
    }

    return result;
  }

  function makeStreak(line) {
    const result = [];

    for (let i = 1; i < 8; i++) {
      const reverseStreakList = Object.values(streakList).reverse();
      // 스트릭 범위 밖은 offStreak 처리
      if (Object.keys(streakList).length < 148 - (line * 7 + i)) {
        result.push(<Streak src={offStreak}></Streak>);
      } else {
        if (reverseStreakList[147 - (line * 7 + i)].streakLevel) {
          result.push(<Streak src={onStreak}></Streak>);
        } else {
          result.push(<Streak src={offStreak}></Streak>);
        }
      }
    }

    return result;
  }

  return (
    <div>
      <Title onClick={() => clickHander()}>ACHIEVEMENT</Title>
      <AchivementBox>
        <TierImg />
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
                <Gauge percent={tierProgress} />
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
  tierName: PropTypes.string.isRequired,
  tierProgress: PropTypes.number.isRequired,
  topStreak: PropTypes.number.isRequired,
  totalCompleteSchedules: PropTypes.number.isRequired,
  totalSchedules: PropTypes.number.isRequired,
  totalStudyTime: PropTypes.number.isRequired,
  streakList: PropTypes.array.isRequired,
};
