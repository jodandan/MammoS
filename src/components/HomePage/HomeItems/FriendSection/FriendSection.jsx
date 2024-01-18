import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  FriendBox,
  ScrollBox,
  Friend,
  Circle,
  FriendFont,
} from './FriendSectionItemCss';
import { Title } from '../HomeItemCss';

export default function FriendSection(friends) {
  const navigate = useNavigate();
  const friendBoxRef = useRef(null);

  const handleWheel = (e) => {
    friendBoxRef.current.scrollLeft += e.deltaY; // deltaY 값을 scrollLeft에 더합니다.
    e.preventDefault(); // 기본 스크롤 이벤트 막기
    e.stopPropagation(); // 이벤트 전파 중단
  };

  function clickHander() {
    navigate('/social');
  }

  function makeFriends() {
    const result = [];

    // 나를 제외한 내 친구들
    const filteredFriends = Object.values(friends.friends).filter(
      (friend) => friend.id !== friends.friends[0].id
    );

    filteredFriends.map((friend) => {
      const hours = Math.floor(friend.todayStudyTime / 60);
      const minutes = friend.todayStudyTime % 60;

      const formatTime = (value) => (value < 10 ? `0${value}` : value);
      const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}`;

      result.push(
        <Friend key={friend.id}>
          <Circle />
          <FriendFont className="name">{friend.name}</FriendFont>
          <FriendFont>{friend.id}</FriendFont>
          <FriendFont className="time">{formattedTime}</FriendFont>
        </Friend>
      );
    });

    return result;
  }

  // 5명까진 OK
  // 6명부터 스크롤
  return (
    <div>
      <Title onClick={() => clickHander()}>FRIENDS</Title>
      <FriendBox onWheel={handleWheel} ref={friendBoxRef}>
        <ScrollBox
          className={
            Object.values(friends.friends).length > 6 ? 'overflow' : 'normal'
          }
        >
          {makeFriends()}
        </ScrollBox>
      </FriendBox>
    </div>
  );
}
