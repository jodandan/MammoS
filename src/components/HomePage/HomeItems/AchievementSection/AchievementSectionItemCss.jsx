import styled from 'styled-components';

export const AchivementBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43vw;
  height: 15vw;
  border: 1px solid rgba(160, 160, 160, 0.5);
  box-shadow: 0px 2px 10px 2px rgba(160, 160, 160, 0.5);
  border-radius: 30px 30px 30px 30px;
  background-color: #ecf1e0;
`;

export const TierImg = styled.img`
  width: 12vw;
  height: 12vw;
  margin-right: 1vw;
`;

export const TierInfoBox = styled.div`
  margin-top: -0.5vw;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  width: 26vw;
  height: 2vw;
`;

export const TierTitle = styled.h3`
  font-family: 'PretendardBold';
  font-size: 24px;
  margin-top: 1vw;
  margin-bottom: 0vw;
`;

export const Comment = styled.p`
  font-family: 'PretendardBold';
  font-size: 11px;
  color: black;
  &.tier {
    opacity: 0.5;
    margin-bottom: -0.3vw;
    margin-top: -0.5vw;
    text-align: right;
  }
  &.gauge {
    margin-top: 0.2vw;
    margin-bottom: 0.5vw;
  }
  &.info {
    margin-top: 0.4vw;
    font-size: 15px;
  }
  &.userInput {
    margin-top: 0.4vw;
    margin-bottom: 0.2vw;
    height: 40px;
    width: 40%;
    font-size: 15px;
    text-align: right;
  }
`;

export const HorizontalBar = styled.hr`
  width: 100%;
  background: gray;
  height: 1px;
  border: 0px;
`;

export const GaugeBox = styled.div`
  background: white;
  width: 100%;
  height: 0.5vw;
  border-radius: 20px 20px 20px 20px;
`;

export const Gauge = styled.div`
  background: #b9d967;
  height: 100%;
  width: ${({ percent }) => `${percent}%`};
  border-radius: 20px 20px 20px 20px;
`;

export const MyInfoBox = styled.div`
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

export const StreakSection = styled.div`
  width: 26vw;
  height: 7vw;
  margin-left: 0.5vw;
  margin-bottom: 0.5vw;
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

export const TopStreakBox = styled.div`
  width: 7vw;
  margin-top: -1vw;

  & .title {
    text-align: right;
    margin-right: 0.5vw;
    margin-top: 1vw;
  }
`;

export const TopStreak = styled.p`
  font-family: 'PretendardBold';
  font-size: 15px;
  &.number {
    margin-top: 0px;
    text-align: right;
    margin-right: 0.5vw;
    font-size: 23px;
    font-weight: bold;
  }
`;

export const CurrentStreakBox = styled.div`
  height: 2.5vw;
  width: 7vw;
  margin-top: 2.5vw;

  & .title {
    margin-right: 0.5vw;
    margin-top: 1vw;
    text-align: right;
  }
`;

export const CurrentStreak = styled.p`
  font-family: 'PretendardBold';
  font-size: 15px;

  &.number {
    margin-top: 0px;
    text-align: right;
    margin-right: 0.5vw;
    font-size: 23px;
    font-weight: bold;
  }
`;

export const StreakBox = styled.div`
  display: flex;
  margin-left: 0.5vw;
  margin-right: -0.5vw;
  height: 5vw;
  width: 18vw;
  border-radius: 15px 15px 15px 15px;
`;

export const StreakLine = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px 15px 15px 15px;
  height: 6vw;
  margin-left: 0.1vw;
  margin-right: 0.1vw;
  flex-wrap: wrap;
`;

export const Streak = styled.img`
  height: 0.6vw;
  width: 0.6vw;
  margin-top: 0.1vw;
  margin-bottom: 0.1vw;
`;
