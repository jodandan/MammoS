import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


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
  width: 2vw;
  height: 2vw;
`;


const DeleteButton = styled.img`
  width: 2vw;
  height: 2vw;
`;

const FriendPlanner = styled.button`
  width: 3vw;
  height: 2vw;
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
  
  &.state {
    font-weight: bold;
    font-size: 10px;
    color: limegreen;
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


const FriendCard = () => {
    return (
        <FriendBox>
            <ProfileBox>
                <PfpImg src="path_to_default_image.png"></PfpImg>
            </ProfileBox>
            <FriendInfoBox>
                <FriendFont>김충영 / chungyomi</FriendFont>
                <FriendFont>가천대학교</FriendFont>
                <FriendFont className="major">AI소프트웨어전공</FriendFont>
                <FriendFont className="state">갓생중</FriendFont>
            </FriendInfoBox>
            <FriendTimeBox>
                <TimeRow>
                    <FriendFont className="day">Today</FriendFont>
                    <FriendFont className="time">10:11</FriendFont>
                </TimeRow>
                <TimeRow>
                    <FriendFont className="day">Week</FriendFont>
                    <FriendFont className="time">20:31</FriendFont>
                </TimeRow>
            </FriendTimeBox>
            <FriendSettingBox>
                <ButtonRow>
                    <FixButton></FixButton>
                    <DeleteButton></DeleteButton>
                </ButtonRow>
                <ButtonRow>
                    <FriendPlanner></FriendPlanner>
                </ButtonRow>
            </FriendSettingBox>
        </FriendBox>
    );
};

// FriendCard.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     universityName: PropTypes.string.isRequired,
//     majorName: PropTypes.string.isRequired,
//     todayTime: PropTypes.string.isRequired,
//     weekTime: PropTypes.string.isRequired,
// };

export default FriendCard;
