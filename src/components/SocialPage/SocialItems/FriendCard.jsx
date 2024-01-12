import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const FriendBox = styled.div`
  display: flex;
  justify-content: center;
  width: 34vw;
  height: 8.5vw;
  margin-top: 1.5vw;
  border: 3px solid #b9d967;
  border-radius: 10px;
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
  width: 20vw;
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

const FriendTimeInfo = styled.div`
  display: flex;
  position: absolute;
`;

const FriendInfoFont1 = styled.p`
  font-weight: bold;
  font-size: 1px;
`;

const FriendInfoFont2 = styled.p`
  font-size: 1px;
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
            <ProfileBox>
                <PfpImg src="path_to_default_image.png"></PfpImg>
            </ProfileBox>
            <FriendInfoBox>
                {/*<FriendInfoFont1>name</FriendInfoFont1>*/}
                {/*<FriendInfoFont1>id</FriendInfoFont1>*/}
                {/*<FriendInfoFont2>universityName</FriendInfoFont2>*/}
                {/*<FriendInfoFont2>majorName</FriendInfoFont2>*/}
                {/*<FriendTimeInfo>*/}
                {/*    <TodayTime>todayTime</TodayTime>*/}
                {/*    <FriendInfoFont2>Today</FriendInfoFont2>*/}
                {/*    <WeekTime>weekTime</WeekTime>*/}
                {/*    <FriendInfoFont2>Week</FriendInfoFont2>*/}
                {/*</FriendTimeInfo>*/}
                {/*<FriendInfoFont3>갓생중</FriendInfoFont3>*/}
            </FriendInfoBox>
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
