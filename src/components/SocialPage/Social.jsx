import PageFrame from '../PageFrame/PageFrame';
import styled from 'styled-components';
import FriendSection from './SocialItems/FriendSection';
import FriendResponseButton from './SocialItems/FriendResponseButton';
import RankingSection from './SocialItems/RankingSection';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Top = styled.div`
  display: flex;
  justify-content: center;
  height: 18vw;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Social() {
  const [ranking, setRanking] = useState('');

  const [friendRequestNum, setFriendRequestNum] = useState(0);

  const [friends, setFriends] = useState([]);

  const [userIndex, setUserIndex] = useState('');

  async function fetchPage() {
    try {
      // 토큰 가져오기
      const token = localStorage.getItem('token');
      // 토큰 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // 정보 받아오기
      const response = await axios.get('http://3.38.7.193:8080/api/v1/social');
      // 정보 저장
      if (response.data.httpResponseStatus === 'SUCCESS') {
        setRanking(response.data.responseData.ranking);
        setFriendRequestNum(response.data.responseData.friendRequestNum);
        setFriends(response.data.responseData.friend);
        setUserIndex(response.data.responseData.userIdx);
        console.log(response);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPage();
  }, []);

  return (
    <PageFrame>
      <Top>
        <RankingSection
            ranking={ranking}
        />
      </Top>
      <Bottom>
        <FriendResponseButton
          friendRequestNum={friendRequestNum}
          fetchPage={fetchPage}
        />
        <FriendSection
          friends={friends}
          fetchPage={fetchPage}
          userIndex={userIndex}
        />
      </Bottom>
    </PageFrame>
  );
}
