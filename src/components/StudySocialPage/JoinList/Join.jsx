import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import axios from 'axios';
import {
  ModalFrame,
  TitleContainer,
  TabButton,
  ModalBox,
  ResponseContainer,
  InfoBox,
  Info,
  IconBox,
  RequestFriendCard,
  Title,
} from './JoinCss.jsx';
export default function Join({ currentIndex }) {
  const [studyData, setStudyData] = useState(null);
  const [currentTab, setCurrentTab] = useState('received'); // 'received' || 'sent'
  const [receivedRequests, setReceivedRequests] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);

  // 탭 전환 로직
  async function TabChangeHandler(tabName) {
    setCurrentTab(tabName);
    if (tabName === 'received') {
      await fetchReceivedRequests();
    } else if (tabName === 'sent') {
      await fetchSentRequests();
    }
  };

  async function fetchSentRequests() { //getInviteMembers API로 바꿔야함
    try {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const response = await axios.get(
        `http://3.38.7.193:8080/api/v1/study/members/invite/${studyData[currentIndex].studyIndex}`
      );
      console.log('Invite:', response.data);

      if (response.data.httpResponseStatus === 'SUCCESS') {
        setSentRequests(response.data.responseData);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('보낸 스터디 요청 정보 받아오기 오류 발생:', error);
    }
  };

  async function fetchReceivedRequests() {//getJoinMembers API로 바꿔야함
    try {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const response = await axios.get(
        `http://3.38.7.193:8080/api/v1/study/members/enroll/${studyData[currentIndex].studyIndex}`
      );
      console.log('Join:', response.data);

      if (response.data.httpResponseStatus === 'SUCCESS') {
        setReceivedRequests(response.data.responseData);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('보낸 친구 요청 정보 받아오기 오류 발생:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log(token);
        const response = await axios.get(
          'http://3.38.7.193:8080/api/v1/study',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setStudyData(response.data.responseData);
      } catch (error) {
        console.error('Error fetching study information:', error);
      }
    };
    // 메모이즈된 함수를 사용
    fetchData();
  }, [currentIndex]);

  return (
    <ModalBox onClick={(e) => e.stopPropagation()}>
      <TitleContainer>
        <TabButton
          onClick={() => TabChangeHandler('sent')}
          className={currentTab === 'sent' ? 'active' : ''}
        >
          초대 목록
        </TabButton>
        <TabButton
          onClick={() => TabChangeHandler('received')}
          className={currentTab === 'received' ? 'active' : ''}
        >
          참가 요청
        </TabButton>
      </TitleContainer>
      <ResponseContainer>
        {/* 참가 요청 */}
        {currentTab === 'received' && receivedRequests.map((request) => (
          <RequestFriendCard key={request.userIndex}>
            <InfoBox>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Info className="bold">{request.userId} | {request.name}</Info>
              </div>
            </InfoBox>
              <IconBox>
                <Icon
                    style={{
                      height: '15px',
                      width: '15px',
                      color: '#B9D967',
                      cursor: 'pointer',
                    }}
                    icon="fluent-mdl2:accept-medium"
                />
              </IconBox>
              <IconBox className="reject">
                <Icon
                  style={{
                    height: '15px',
                    width: '15px',
                    color: '#FF1C1C',
                    cursor: 'pointer',
                  }}
                  icon="bx:x"
                />
              </IconBox>
          </RequestFriendCard>
        ))}
        {currentTab === 'sent' && sentRequests.map((request) => (
          // 초대 목록
          <RequestFriendCard key={request.userStudyIdx}>
            <InfoBox>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Info className="bold">
                  {request.userId} | {request.name}
                </Info>
              </div>
            </InfoBox>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <IconBox className="reject">
                <Icon
                  style={{
                    height: '15px',
                    width: '15px',
                    color: '#FF1C1C',
                    cursor: 'pointer',
                  }}
                  icon="bx:x"
                />
              </IconBox>
            </div>

          </RequestFriendCard>
        ))}
      </ResponseContainer>
    </ModalBox>
  )
}

Join.propTypes = {
  currentIndex: PropTypes.number.isRequired,
};