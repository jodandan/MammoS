import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

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
  width: 35vw;
  height: 20vw;
  overflow-y: auto; // 내용이 많을 경우 스크롤 가능
`;

const InfoContainer = styled.div`
  display: flex;
`;

const PlannerContainer = styled.div`
  display: flex;
`;

const InfoBox = styled.div`
  display: flex;
`;

const BadgeBox = styled.div`
  display: flex;
`;

const PlannerBox = styled.div`
  display: flex;
`;

const StreakBox = styled.div`
  display: flex;
`;

const Info = styled.p`
  font-family: 'PretendardSemiBold';
  &.bold {
    font-size: 17px;
  }

  &.light {
    margin-left: 10px;
    font-size: 13px;
    color: #909090;
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
            <Info></Info>
            <Info></Info>
          </InfoBox>
          <BadgeBox></BadgeBox>
        </InfoContainer>
        <PlannerContainer>
          <PlannerBox></PlannerBox>
          <StreakBox></StreakBox>
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
