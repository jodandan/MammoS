import React, { useEffect, useState } from 'react';
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
} from './StudyRequestListCss.jsx';
export default function StudyRequestList() {
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

    async function fetchReceivedRequests() {
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            const response = await axios.get(
                'http://3.38.7.193:8080/api/v1/study/invite'
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
    };

    async function fetchSentRequests() {
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            const response = await axios.get(
                'http://3.38.7.193:8080/api/v1/study/join'
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

    async function AcceptRequestHandler(userStudyIndex) {
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // 친구 추가 요청
            const response = await axios.patch(
                `http://3.38.7.193:8080/api/v1/study/members/invite/${userStudyIndex}`
            );
            console.log('Received Requests:', response.data);

            if (response.data.httpResponseStatus === 'SUCCESS') {
                alert('스터디 참가 요청 수락 성공');
                fetchReceivedRequests();
                // fetchPage();
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('스터디 요청 수락 중 오류 발생:', error);
            alert('서버 송신 오류');
        }
    }

    async function RejectRequestHandler(input, userStudyIndex) {
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // 친구 추가 요청
            const response = await axios.delete(
                `http://3.38.7.193:8080/api/v1/study/members/invite/${userStudyIndex}`
            );
            console.log('Received Requests:', response.data);

            if (response.data.httpResponseStatus === 'SUCCESS') {
                alert('스터디 참가 요청 거절 성공');
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
            console.error('스터디 요청 거절 중 오류 발생:', error);
            alert('서버 송신 오류');
        }
    }

    useEffect(() => {
        fetchReceivedRequests();
        fetchSentRequests();
    }, []);

    return (
        <ModalBox onClick={(e) => e.stopPropagation()}>
            <TitleContainer>
                <TabButton
                    onClick={() => TabChangeHandler('received')}
                    className={currentTab === 'received' ? 'active' : ''}
                >
                    내가 받은 스터디 초대
                </TabButton>
                <TabButton
                    onClick={() => TabChangeHandler('sent')}
                    className={currentTab === 'sent' ? 'active' : ''}
                >
                    스터디에서 유저에게 보낸 요청
                </TabButton>
            </TitleContainer>
            <ResponseContainer>
                {currentTab === 'received' && receivedRequests.map((request) => (
                    <RequestFriendCard key={request.userStudyIdx}>
                        <InfoBox>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <Info className="bold">{request.studyName}</Info>
                                <Info className="light">
                                    {request.currentMemberCnt} / {request.maxMemberCnt}
                                </Info>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <IconBox className="accept" onClick={() => AcceptRequestHandler(request.userStudyIdx)}>
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
                                <IconBox className="reject" onClick={() => RejectRequestHandler('recieve',request.userStudyIdx)}>
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
                        </InfoBox>
                    </RequestFriendCard>
                ))}
                {currentTab === 'sent' && sentRequests.map((request) => (
                    // 보낸 친구 요청 렌더링 로직
                    <RequestFriendCard key={request.userStudyIdx}>
                        <InfoBox>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <Info className="bold">{request.studyName}</Info>
                                <Info className="light">
                                    {request.currentMemberCnt} / {request.maxMemberCnt}
                                </Info>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <IconBox className="reject" onClick={() => RejectRequestHandler('sent',request.userStudyIdx)}>
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
                        </InfoBox>
                    </RequestFriendCard>
                ))}
            </ResponseContainer>
        </ModalBox>
    )
}
