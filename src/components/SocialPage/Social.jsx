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

    const [ranking, setRanking] = useState({
        pfp: '',
        name: '',
        id: '',
        weeklyStudyTime: 0
    });

    const [friendRequestNum, setFriendRequestNum] = useState(0);

    const [friend, setFriend] = useState({
        id: '',
        majorName: '',
        name: '',
        pfp: '',
        universityName: '',
        isOnline: '',
        weeklyStudyTime: 0,
        dailyStudyTime: 0,
        isFixed: '',
    });


    useEffect(() => {
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
                    setFriend(response.data.responseData.friend);
                    console.log(response);
                } else {
                    console.log(response);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchPage();
    }, []);

    return (
        <PageFrame>
            <Top>
              <RankingSection
                  pfp={ranking.pfp}
                  id={ranking.id}
                  name={ranking.name}
                  weeklyStudyTime={ranking.weeklyStudyTime}
              />
            </Top>
            <Bottom>
                <FriendResponseButton
                    friendRequestNum={friendRequestNum}
                />
                <FriendSection
                    pfp={friend.pfp}
                    id={friend.id}
                    name={friend.name}
                    majorName={friend.majorName}
                    universityName={friend.universityName}
                    isOnline={friend.isOnline}
                    weeklyStudyTime={friend.weeklyStudyTime}
                    dailyStudyTime={friend.dailyStudyTime}
                    isFixed={friend.isFixed}
                />
            </Bottom>
        </PageFrame>
    );
}
