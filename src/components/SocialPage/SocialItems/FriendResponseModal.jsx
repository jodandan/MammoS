import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Icon} from '@iconify/react';

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
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 40px;
  box-shadow: 0 5px 30px rgba(0, 0, 0.5, 0.5); // 상자에 그림자 추가
  z-index: 1001; // ModalFrame 위에 위치
  width: 55vw; 
  height: 30vw;
  overflow-y: auto; // 내용이 많을 경우 스크롤 가능
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;
  padding-top: 25px;
`;

const ResponseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 48vw;
  align-items: center;
  justify-content: space-between;
`;


const RequestFriendCard = styled.div`
  display: flex;
  justify-content: center;
  width: 22vw;
  height: 2.3vw;
  margin-top: 1.5vw;
  border: 2px solid #D9D9D9;
  border-radius: 5px;
  background-origin: border-box;
  background-clip: content-box,border-box;
  background-color: white;
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

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TabButton = styled.button`
  display: flex;
  font-family: 'PretendardSemiBold';
  background: none; 
  border: none; 
  outline: none;
  margin: 10px;
  cursor: pointer; 
  font-size: 25px; 
  color: #B3B3B3;
  &:hover {
    color: #000000; 
  }
  // 현재 활성화된 탭 스타일
  &.active {
    color: #000000; // 활성 탭의 글자색 변경
  }
`;

const IconBox = styled.div`
  
  &.accept { 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;
    border: 2px solid #A7CF41;
    border-radius: 5px;
    height: 15px;
    width: 15px;
    cursor: pointer;
    margin-left: 10px;
    
  }

  &.reject {  
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;
    border: 2px solid #FF1C1C;
    border-radius: 5px;
    height: 15px;
    width: 15px;
    cursor: pointer;
    margin-left: 15px;
  }
`;



const FriendResponseModal = ({onClose, fetchPage}) => {
    const [receivedRequests, setReceivedRequests] = useState([]);
    const [sentRequests, setSentRequests] = useState([]);
    const [currentTab, setCurrentTab] = useState('received'); // 'received' 또는 'sent'


    // 탭 전환 함수
    async function TabChangeHandler(tabName) {
        setCurrentTab(tabName);
        if (tabName === 'received') {
            await fetchReceivedRequests();
        } else if (tabName === 'sent') {
            await fetchSentRequests();
        }
    }


    async function fetchReceivedRequests() {
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            const response = await axios.get(
                'http://3.38.7.193:8080/api/v1/social/receive'
            );
            console.log('Received Requests:', response.data);

            if (response.data.httpResponseStatus === 'SUCCESS') {
                setReceivedRequests(response.data.responseData);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('보낸 친구 요청 정보 받아오기 오류 발생:', error);
            alert('에러');
        }
    }

    async function fetchSentRequests() {
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            const response = await axios.get(
                'http://3.38.7.193:8080/api/v1/social/send'
            );
            console.log('Received Requests:', response.data);

            if (response.data.httpResponseStatus === 'SUCCESS') {
                setSentRequests(response.data.responseData);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('보낸 친구 요청 정보 받아오기 오류 발생:', error);
            alert('에러');
        }
    }

    async function AcceptRequestHandler(friendIndex) {
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // 친구 추가 요청
            const response = await axios.patch(
                `http://3.38.7.193:8080/api/v1/social/request/${friendIndex}`
            );
            console.log('Received Requests:', response.data);

            if (response.data.httpResponseStatus === 'SUCCESS') {
                alert('친구 요청 수락 성공');
                fetchReceivedRequests();
                fetchPage();
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('친구 요청 수락 중 오류 발생:', error);
            alert('서버 송신 오류');
        }
    }

    async function RejectRequestHandler(input, friendIndex) {
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // 친구 추가 요청
            const response = await axios.delete(
                `http://3.38.7.193:8080/api/v1/social/request/${friendIndex}`
            );
            console.log('Received Requests:', response.data);

            if (response.data.httpResponseStatus === 'SUCCESS') {
                alert('친구 거절 성공');
                if(input === 'sent'){
                    fetchSentRequests();
                }
                else{
                    fetchReceivedRequests();
                }

            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('친구 거절 중 오류 발생:', error);
            alert('서버 송신 오류');
        }
    }

    useEffect(() => {
        fetchReceivedRequests();
        fetchSentRequests();
    }, []);


    return (
        <ModalFrame onClick={onClose}>
            <ModalBox onClick={(e)=> e.stopPropagation()}>
                <TitleContainer>
                    <TabButton
                        onClick={() => TabChangeHandler('received')}
                        className={currentTab === 'received' ? 'active' : ''}
                    >
                        받은 친구 요청
                    </TabButton>
                    <TabButton
                        onClick={() => TabChangeHandler('sent')}
                        className={currentTab === 'sent' ? 'active' : ''}
                    >
                        보낸 친구 요청
                    </TabButton>
                </TitleContainer>
                <ResponseContainer>
                    {currentTab === 'received' && receivedRequests.map((request) => (
                        <RequestFriendCard key={request.friendIndex}>
                            <InfoBox>
                                <Info className="bold">{request.id} | {request.name}</Info>
                                <Info className="light">
                                    {request.universityName} {request.majorName}
                                </Info>
                                <IconBox className="accept" onClick={() => AcceptRequestHandler(request.friendIndex)}>
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
                                <IconBox className="reject" onClick={() => RejectRequestHandler('recieve',request.friendIndex)}>
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
                            </InfoBox>
                        </RequestFriendCard>
                    ))}
                    {currentTab === 'sent' && sentRequests.map((request) => (
                        // 보낸 친구 요청 렌더링 로직
                        <RequestFriendCard key={request.friendIndex}>
                            <InfoBox>
                                <Info className="bold">{request.id} | {request.name}</Info>
                                <Info className="light">
                                    {request.universityName} {request.majorName}
                                </Info>
                                <IconBox className="reject" onClick={() => RejectRequestHandler('sent',request.friendIndex)}>
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
                            </InfoBox>
                        </RequestFriendCard>
                    ))}
                </ResponseContainer>
            </ModalBox>
        </ModalFrame>
    );
};

FriendResponseModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    fetchPage: PropTypes.func.isRequired
};

export default FriendResponseModal;
