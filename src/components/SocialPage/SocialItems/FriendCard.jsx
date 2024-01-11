import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const FriendBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  width: 46.5278vw;
  height: 13.1944vw;
  margin: 2vw;
  border: 3px solid #b9d967;
  border-radius: 30px 30px 30px 30px;
  justify-content: space-around;
  background-color: #ecf1e0;
`;

const PfpImg = styled.img`
  position: absolute;
  flex-wrap: nowrap;
  margin-right: 35vw;
  margin-top: 3vw;
  width: 7vw;
  height: 7vw;
  border: 3px solid black;
  background-color: darkgray;
  border-radius: 50%;
`;

const FriendInfo = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  background-color: blueviolet;
  margin-top: 1.5vw;
  width: 27vw;
  height: 10vw;  
`;

const FriendSetting = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  background-color: chartreuse;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 6vw;
`;

const FriendTimeInfo = styled.div`
  display: flex;
  position: absolute;
  flex-wrap: wrap;
`;

const FriendInfoFont1 = styled.p`
  font-weight: bold;
  font-size: 1vw;
`;

const FriendInfoFont2 = styled.p`
  font-size: 15px;
`;

const FixButton = styled.button`
  background-color: red;
  width: 1vw;
`;


const DeleteButton = styled.button`
  background-color: blue;
  width: 1vw;
`;

const FriendPlanner = styled.button`
  background-color: green;
  width: 1vw;
`;

const TodayTime = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

const WeekTime = styled.p`
  font-size: 15px;
  font-weight: bold;
`;



const FriendInfoFont3 = styled.p`
  font-size: 15px;
  margin: 0;
`;


const FriendCard = () => {
    return (
        <FriendBox>
            <PfpImg src="path_to_default_image.png"></PfpImg>
            <FriendInfo>
                <FriendInfoFont1>name</FriendInfoFont1>
                <FriendInfoFont1>id</FriendInfoFont1>
                <FriendInfoFont2>universityName</FriendInfoFont2>
                <FriendInfoFont2>majorName</FriendInfoFont2>
                <FriendTimeInfo>
                    <TodayTime>todayTime</TodayTime>
                    <FriendInfoFont2>Today</FriendInfoFont2>
                    <WeekTime>weekTime</WeekTime>
                    <FriendInfoFont2>Week</FriendInfoFont2>
                </FriendTimeInfo>
                <FriendInfoFont3>갓생중</FriendInfoFont3>
            </FriendInfo>
            <FriendSetting>
                <FixButton>핀</FixButton>
                <DeleteButton>쓰레기통</DeleteButton>
                <FriendPlanner>플래너</FriendPlanner>
            </FriendSetting>
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
