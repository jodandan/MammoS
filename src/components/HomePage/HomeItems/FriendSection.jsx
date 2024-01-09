import styled from 'styled-components';
import { Title } from '../Home';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FriendBox = styled.div`
  display: flex;
  align-items: center;
  width: 28vw;
  height: 9vw;
  border: 3px solid #b9d967;
  border-radius: 30px 30px 30px 30px;
  justify-content: center;
  padding-left: 0.5vw;
  padding-right: 0.5vw;

  background-color: #ecf1e0;
`;

const ScrollBox = styled.div`
  display: flex;
  height: 90%;
  width: 95%;

  &.overflow {
    overflow-x: auto;
    flex-direction: row;
    justify-content: flex-start;
  }

  &.normal {
    justify-content: center;
    align-items: center;
  }

  &::-webkit-scrollbar {
    height: 9px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #b9d967;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const Friend = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  height: 7vw;
  min-width: 4vw;
  justify-content: center;
  align-items: center;

  &.empty {
    border: 1px solid blue;
  }
`;

const Circle = styled.div`
  height: 3vw;
  width: 3vw;
  border: 3px solid black;
  border-radius: 50%;
`;

const FriendFont = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 13px;

  &.time {
    margin-top: 10px;
    font-size: 15px;
    font-weight: bold;
  }
`;

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

    filteredFriends.map((friend) =>
      result.push(
        <Friend key={friend.id}>
          <Circle />
          <FriendFont>{friend.name}</FriendFont>
          <FriendFont>{friend.id}</FriendFont>
          <FriendFont className="time">{friend.todayStudyTime}</FriendFont>
        </Friend>
      )
    );

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
