import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FixButtonImg from '../../assets/FixButton.png';
import DeleteButtonImg from '../../assets/DeleteButton.png';
import NonFixButtonImg from '../../assets/NonFixButton.png';
import PlannerModal from './PlannerModal';

const FriendBox = styled.div`
  display: flex;
  justify-content: center;
  width: 32vw;
  height: 9vw;
  margin-top: 1.5vw;
  border: 3px solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to bottom, #a6e087, #96a3d4, #aec0ff);
  border-radius: 10px;
  background-origin: border-box;
  background-clip: content-box, border-box;
  background-color: white;
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7vw;
`;

const PfpImg = styled.img`
  width: 5vw;
  height: 5vw;
  background-color: #d9d9d9;
  border-radius: 50%;
`;

const FriendInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
  padding-top: 20px;
  padding-left: 10px;
`;

const FriendTimeBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 10vw;
`;

const FriendSettingBox = styled.div`
  display: flex;
  flex-direction: column; // 요소들을 세로로 쌓음
  width: 7vw;
  align-items: flex-end;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5vw; // 다음 버튼 줄과의 간격
`;

const TimeRow = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 35px;
  padding-top: 25px;

  &.weekRow {
    padding-top: 0px;
  }
`;

const FixButton = styled.img`
  background-color: transparent;
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding-top: 12px;
  padding-right: 10px;

  &:hover {
    opacity: 0.6; // 마우스 오버시 버튼 투명도 변경
  }
`;

const DeleteButton = styled.img`
  background-color: transparent;
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding-top: 12px;
  padding-right: 10px;

  &:hover {
    opacity: 0.6; // 마우스 오버시 버튼 투명도 변경
  }
`;

const FriendPlanner = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 4vw;
  height: 2vw;
  font-size: 0.8vw;
  font-family: 'PretendardSemiBold';
  padding-bottom: 20px;
  &:hover {
    opacity: 0.6; // 마우스 오버시 버튼 투명도 변경
  }
`;

const FriendFont = styled.p`
  font-family: 'PretendardSemiBold';
  &.name {
    font-weight: bold;
    font-size: 14px;
    padding-top: 9px;
    
  }

  &.id {
    font-weight: bold;
    font-size: 14px;
    padding-top: 4px;
  }

  &.universityName {
    font-weight: bold;
    font-size: 14px;
    color: dimgray;
    padding-top: 12px;
  }

  &.major {
    font-weight: bold;
    font-size: 14px;
    color: dimgray;
    padding-top: 6px;
  }

  &.online {
    font-weight: bold;
    font-size: 12px;
    color: limegreen;
    padding-top: 6px;
  }

  &.offline {
    font-weight: bold;
    font-size: 12px;
    color: gray;
    padding-top: 6px;
  }

  &.day {
    font-weight: bold;
    font-size: 12px;
    padding-top: 13px;
    color: gray;
  }

  &.time {
    font-size: 28px;
    font-weight: bold;
    padding-top: 3px;
    padding-left: 12px;
  }
`;

const FriendCard = ({
  id,
  name,
  friendIndex,
  tier,
  universityName,
  majorName,
  pfp,
  weeklyStudyTime,
  dailyStudyTime,
  isOnline,
  isFixed,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plannerClickHandler = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const formatTime = (minutes) => {
    const totalTimeHour = String(Math.floor(minutes / 60)).padStart(2, '0');
    const totalTimeMin = String(Math.floor(minutes % 60)).padStart(2, '0');
    return `${totalTimeHour}:${totalTimeMin}`;
  };

  function FixButtonHandler() {
    console.log('삭제 팝업');
  }
  function deleteClickHandler() {
    console.log('삭제 팝업');
  }

  return (
    <FriendBox>
      <ProfileBox>
        <PfpImg src={pfp} />
      </ProfileBox>
      <FriendInfoBox>
        <FriendFont className="name">{name}</FriendFont>
        <FriendFont className="id">{id}</FriendFont>
        <FriendFont className="universityName">{universityName}</FriendFont>
        <FriendFont className="major">{majorName}</FriendFont>
        {isOnline ? (
          <FriendFont className="online">온라인</FriendFont>
        ) : (
          <FriendFont className="offline">오프라인</FriendFont>
        )}
      </FriendInfoBox>
      <FriendTimeBox>
        <TimeRow>
          <FriendFont className="day">Today</FriendFont>
          <FriendFont className="time">{formatTime(dailyStudyTime)}</FriendFont>
        </TimeRow>
        <TimeRow className="weekRow">
          <FriendFont className="day">Week</FriendFont>
          <FriendFont className="time">
            {formatTime(weeklyStudyTime)}
          </FriendFont>
        </TimeRow>
      </FriendTimeBox>
      <FriendSettingBox>
        <ButtonRow>
          <FixButton
            onClick={FixButtonHandler}
            src={isFixed ?  NonFixButtonImg : FixButtonImg}
          />
          <DeleteButton
            onClick={deleteClickHandler}
            src={DeleteButtonImg}
          ></DeleteButton>
        </ButtonRow>
        <ButtonRow>
          <FriendPlanner onClick={plannerClickHandler}>플래너</FriendPlanner>
          {isModalOpen && <PlannerModal onClose={() => setIsModalOpen(false)} />}
        </ButtonRow>
      </FriendSettingBox>
    </FriendBox>
  );
};

FriendCard.propTypes = {
  id: PropTypes.string.isRequired,
  friendIndex:PropTypes.number.isRequired,
  tier: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  weeklyStudyTime: PropTypes.number.isRequired,
  dailyStudyTime: PropTypes.number.isRequired,
  planner: PropTypes.string.isRequired,
  pfp: PropTypes.string.isRequired,
  universityName: PropTypes.string.isRequired,
  majorName: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  isFixed: PropTypes.bool.isRequired,
};
export default FriendCard;
