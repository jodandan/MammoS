import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    TitleContainer,
    TabButton,
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
    }

    async function fetchReceivedRequests() { //친구 기준이라 수정해야함
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

    async function fetchSentRequests() { //친구 기준이라 수정해야함
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
    return (
        <TitleContainer>
            <TabButton
                onClick={() => TabChangeHandler('received')}
                className={currentTab === 'received' ? 'active' : ''}
            >
                받은 요청
            </TabButton>
            <TabButton
                onClick={() => TabChangeHandler('sent')}
                className={currentTab === 'sent' ? 'active' : ''}
            >
                보낸 요청
            </TabButton>
        </TitleContainer>
    )
}
