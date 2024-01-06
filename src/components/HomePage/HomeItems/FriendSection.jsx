import styled from 'styled-components';
import { Title } from '../Home';
import { useRef } from 'react';
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
  overflow-x: auto;
  flex-direction: row;
  justify-content: flex-start;
  height: 90%;
  width: 95%;

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

export default function FriendSection() {
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

  return (
    <div>
      <Title onClick={() => clickHander()}>FRIENDS</Title>
      <FriendBox onWheel={handleWheel} ref={friendBoxRef}>
        <ScrollBox>
          <Friend>
            <Circle />
            <FriendFont>guu119</FriendFont>
            <FriendFont>김경규1</FriendFont>
            <FriendFont className="time">03:20:19</FriendFont>
          </Friend>
          <Friend>
            <Circle />
            <FriendFont>guu119</FriendFont>
            <FriendFont>김경규2</FriendFont>
            <FriendFont className="time">03:20:19</FriendFont>
          </Friend>
          <Friend>
            <Circle />
            <FriendFont>guu119</FriendFont>
            <FriendFont>김경규3</FriendFont>
            <FriendFont className="time">03:20:19</FriendFont>
          </Friend>
          <Friend>
            <Circle />
            <FriendFont>guu119</FriendFont>
            <FriendFont>김경규4</FriendFont>
            <FriendFont className="time">03:20:19</FriendFont>
          </Friend>
          <Friend>
            <Circle />
            <FriendFont>guu119</FriendFont>
            <FriendFont>김경규5</FriendFont>
            <FriendFont className="time">03:20:19</FriendFont>
          </Friend>
          <Friend>
            <Circle />
            <FriendFont>guu119</FriendFont>
            <FriendFont>김경규6</FriendFont>
            <FriendFont className="time">03:20:19</FriendFont>
          </Friend>
        </ScrollBox>
      </FriendBox>
    </div>
  );
}
