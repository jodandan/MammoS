import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import FriendResponseButton from './FriendResponseButton';

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

const ResponseFont = styled.p`
  &.title {
    font-size: 23px;
    font-weight: bold;
    margin-left: 4vw;
  }
  
  &.font1 {
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    
  }
  &.font2 {
    font-size: 10px;
    text-align: center;
  }
`;


const ResponseButton = styled.button`
  &.accept {
    padding: 10px;

  }
  &.reject {
    padding: 10px;
  }
`;


const CountBadge = styled.div`
  background-color: red;
  color: white;
  text-align: center;
  border-radius: 50%;
  width: 1.8vw;
  height: 1.8vw;
  margin-left: 15px; 
  font-size: 20px;
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



const AddFriendModal = ({
    onClose,
    onAddFriend,
    friendRequestNum,
    id,
    name,
    universityName,
    majorName
}) => {
    const [userIdx, setUserIdx] = useState('');
    const [friendIdx, setFriendId] = useState('');
    const [friendIsFixed, setFriendIsFixed] = useState(true);
    const [friendStatus, setFriendStatus] = useState(1);

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // 친구 요청 받기
            const response = await axios.patch('http://3.38.7.193:8080/api/v1/social/request', {
                userIdx: userIdx,
                friendIdx: friendIdx
            });

            // 응답 처리
            if (response.data.httpResponseStatus === 'SUCCESS') {
                alert('친구 요청이 성공적으로 수락되었습니다.');
                onAddFriend({
                    friendIndex: response.data.responseData.friendIndex,
                    frinedIsFixed: response.data.responseData.friendIsFixed,
                    friendStatus: response.data.responseData.friendStatus
                });
                onClose(); // 모달 닫기
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('친구 요청 수락 중 오류 발생:', error);
            alert('친구 요청 수락 중 오류가 발생했습니다.');
        }
    };

    useEffect(() => {
        console.log(friendRequestNum);
    }, []);
    return (
        <ModalFrame onClick={onClose}>
            <ModalBox onClick={(e)=> e.stopPropagation()}>
                <TitleContainer>
                    <ResponseFont className="title">받은 친구 요청</ResponseFont>
                    {friendRequestNum !== 0 && <CountBadge>{friendRequestNum}</CountBadge>}
                </TitleContainer>
                <ResponseContainer>
                    <RequestFriendCard>
                        <ResponseFont className="font1">{id}chungyomi</ResponseFont>
                        <ResponseFont className="font1">{name}김충영</ResponseFont>
                        <ResponseFont className="font2">{universityName}가천대학교</ResponseFont>
                        <ResponseFont className="font2">{majorName}소프트웨어학과</ResponseFont>
                        <ResponseButton className="accept"></ResponseButton>
                        <ResponseButton className="reject"></ResponseButton>
                    </RequestFriendCard>
                    <RequestFriendCard></RequestFriendCard>
                    <RequestFriendCard></RequestFriendCard>
                </ResponseContainer>
            </ModalBox>
        </ModalFrame>
    );
};

AddFriendModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onAddFriend: PropTypes.func.isRequired,
    friendRequestNum: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    universityName: PropTypes.string.isRequired,
    majorName: PropTypes.string.isRequired,
};

export default AddFriendModal;
