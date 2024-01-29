import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import ReactDatePicker from 'react-datepicker';

const ModalFrame = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6); // 반투명 배경
  z-index: 1000;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 40px;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); // 상자에 그림자 추가
  z-index: 1001; // ModalFrame 위에 위치
  width: 50vw;
  height: 30vw;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3vw;
  margin-bottom: -3vw;
`;

const ProjectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25vw;
  height: 12vw;
  margin-left: 4.5vw;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-right: 13vw;
`;

const BadgeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2vw;
`;

const StreakBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23vw;
  height: 5vw;
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #C6EF5E;
  border: white 5px solid;
  border-radius: 10px;
  width: 30vw;
  height: 3vw;
`;

const Info = styled.p`
  font-family: 'PretendardSemiBold';
  &.bold {
    font-size: 25px;
    margin: 5px;
  }

  &.light {
    font-size: 20px;
    color: #909090;
    margin: 5px;
  }
`;

const BadgeCard = styled.div`
  width: 5vw;
  height: 6vw;
  background-color: #D9D9D9;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  margin-left: 2vw;
  
`

const PlanContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #C6EF5E;
  border: white 5px solid;
  border-radius: 10px;
  width: 30vw;
  height: 3vw;
`


const PlannerAndProject = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const PlanBox = styled.div`
  width: 32vw;
  height: 14vw;
  overflow: auto;
  margin-left: 6vw;

  &::-webkit-scrollbar {
    border-left: 9px solid;
    border-right: 9px solid;
    border-image: linear-gradient(#e8f3ce, #ffffff);
    border-image-slice: 1;
    background-color: #b9d967;
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    border-left: 7px solid;
    border-right: 7px solid;
    border-image: linear-gradient(#e8f3ce, #ffffff);
    border-image-slice: 1;
    background-color: #b9d967;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const StudyTime = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
`;

 const StudyTimeFont = styled.p`
  font-family: 'PretendardBold';
  margin-top: 5px;
  font-size: 15px;
  font-weight: bold;
  padding-right: 8px;

  &.time {
    font-size: 20px;
    padding-right: 20px;
  }
`;



const Font = styled.p`
  font-family: 'PretendardSemiBold';
  &.content {
    overflow: auto;
    white-space: nowrap;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }


  &.planName {
    font-weight: bold;
    text-align: left;
    margin-right: 20vw;
    font-size: 18px;
  }

  &.isComplete {
    font-weight: bold;
    text-align: right;
    font-size: 18px;
  }

  &.time {
    font-weight: bold;
    text-align: right;
    font-size: 18px;
  }

  &.notStarted {
    font-weight: bold;
    color: gray;
    padding-left: 28px;
  }

  &.project {
    font-family: 'PretendardSemiBold';
    font-size: 30px;
    margin-top: 250px;
    margin-left: -50px;
  }
`;



const PlannerModal = ({ onClose, friendIndex }) => {
  const [plannerData, setPlannerData] = useState('');
  console.log(friendIndex);

  async function fetchFriendPlanner() {
    try {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const response = await axios.get(
        `http://3.38.7.193:8080/api/v1/social/friendInfo/${friendIndex}`
      );
      console.log(response);
      if (response.data.httpResponseStatus === 'SUCCESS') {
        setPlannerData(response.data.responseData);
      } else {
        alert('플래너 정보를 불러오는 데 실패했습니다.');
      }
    } catch (error) {
      console.error('플래너 정보 요청 중 오류 발생:', error);
      alert('플래너 정보를 불러오는 데 실패했습니다.');
    }
  }

  useEffect(() => {
    if (friendIndex) {
      fetchFriendPlanner();
    }
  }, [friendIndex]);

  return (
    <ModalFrame onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <InfoContainer>
          <InfoBox>
            <Info className="bold">
              {plannerData.name} | {plannerData.id}
            </Info>
            <Info className="light">
              {plannerData.universityName} {plannerData.majorName}
            </Info>
            <Info className="bold">
              {plannerData.tier}
            </Info>
          </InfoBox>
          <BadgeBox>
            <BadgeCard></BadgeCard>
            <BadgeCard></BadgeCard>
            <BadgeCard></BadgeCard>
          </BadgeBox>
        </InfoContainer>
        <PlannerContainer>
          <PlannerAndProject>
            <PlanBox>
              {plannerData.planner && plannerData.planner.plannerPlans &&
                  plannerData.planner.plannerPlans.map((plan) => (
                      <PlanContainer key={plan.planIndex}>
                        <Font className="planName">{plan.planName}</Font>
                        <Font className="time">{plan.planStudyTime && plan.planIsComplete ? '' : plan.planStudyTime}</Font>
                        <Font className="isComplete">{plan.planIsComplete ? 'DONE' : ''}</Font>
                      </PlanContainer>
                  ))
              }
            </PlanBox>
            <ProjectBox>
              <Project>프로젝트</Project>
            </ProjectBox>
          </PlannerAndProject>
          <StreakBox>
            <Font className="project">현재 {plannerData.topStreaks} DAY STREAK!</Font>
          </StreakBox>
        </PlannerContainer>
      </ModalBox>
    </ModalFrame>
  );
};

PlannerModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  friendIndex: PropTypes.number.isRequired,
};

export default PlannerModal;
