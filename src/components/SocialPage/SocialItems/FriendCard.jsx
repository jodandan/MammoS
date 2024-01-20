import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FixButtonImg from '../../assets/FixButton.png'
import DeleteButtonImg from '../../assets/DeleteButton.png'
import nonFixButtonImg from '../../assets/NonFixButton.png';

const FriendBox = styled.div`
  display: flex;
  justify-content: center;
  width: 34vw;
  height: 8.5vw;
  margin-top: 1.5vw;
  border: 3px solid transparent;
  background-image: linear-gradient(#fff, #fff), linear-gradient(to bottom, #A6E087, #96A3D4, #AEC0FF);
  border-radius: 10px;
  background-origin: border-box;
  background-clip: content-box,border-box;
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
  background-color: #D9D9D9;
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
  padding-left: 2vw;
  padding-top: 0.7vw;
`;

const FixButton = styled.img`
  background-color: transparent;
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding-top:12px;
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
  padding-top:12px;
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
  padding-bottom: 20px;
  text-decoration: underline;
  &:hover {
    opacity: 0.6; // 마우스 오버시 버튼 투명도 변경
  }
`;


const FriendFont = styled.p`
  font-weight: bold;
  font-size: 12px;
  margin-top: 0px;

  &.major {
    font-weight: bold;
    font-size: 12px;
    color: dimgray;
    margin-top: -9px;
  }
  
  &.online {
    font-weight: bold;
    font-size: 10px;
    color: limegreen;
  }
  
  &.offline {
    font-weight: bold;
    font-size: 10px;
    color: gray;
  }
  
  &.day {
    font-weight: bold;
    font-size: 12px;
    padding-top: 13px;
    color: gray;
  }
  
  &.time {
    font-size: 25px;
    font-weight: bold;
    padding-top: 0px;
    padding-left: 12px;
  }
`;


const FriendCard = ({
    id,
    name,
    universityName,
    majorName,
    pfp,
    weeklyStudyTime,
    dailyStudyTime,
    isOnline,
    isFixed,
    onFix // 고정 상태 변경 함수
}) => {

    function FixButtonClickHandler() {
        onFix(id); // 고정 상태 변경
    }

    function deleteClickHandler(){
        console.log('삭제 팝업')
    }
    function plannerClickHandler() {
        console.log('플래너 화면');
    }

    return (
        <FriendBox>
            <ProfileBox>
                <PfpImg src={pfp} />
            </ProfileBox>
            <FriendInfoBox>
                <FriendFont>{name}</FriendFont>
                <FriendFont>{id}</FriendFont>
                <FriendFont>{universityName}</FriendFont>
                <FriendFont className="major">{majorName}</FriendFont>
                {isOnline ?
                    <FriendFont className="online">온라인</FriendFont> :
                    <FriendFont className="offline">오프라인</FriendFont>
                }
            </FriendInfoBox>
            <FriendTimeBox>
                <TimeRow>
                    <FriendFont className="day">Today</FriendFont>
                    <FriendFont className="time">{dailyStudyTime}</FriendFont>
                </TimeRow>
                <TimeRow>
                    <FriendFont className="day">Week</FriendFont>
                    <FriendFont className="time">{weeklyStudyTime}</FriendFont>
                </TimeRow>
            </FriendTimeBox>
            <FriendSettingBox>
                <ButtonRow>
                    <FixButton
                        onClick={FixButtonClickHandler}
                        src={isFixed ? nonFixButtonImg : FixButtonImg}
                    />
                    <DeleteButton onClick={deleteClickHandler} src={DeleteButtonImg}></DeleteButton>
                </ButtonRow>
                <ButtonRow>
                    <FriendPlanner onClick={plannerClickHandler}>플래너</FriendPlanner>
                </ButtonRow>
            </FriendSettingBox>
        </FriendBox>
    );
};

FriendCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    weeklyStudyTime: PropTypes.number.isRequired,
    dailyStudyTime: PropTypes.number.isRequired,
    planner: PropTypes.string.isRequired,
    pfp: PropTypes.string.isRequired,
    universityName: PropTypes.string.isRequired,
    majorName: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    isFixed: PropTypes.bool.isRequired,
    onFix: PropTypes.func.isRequired,
};
export default FriendCard;
