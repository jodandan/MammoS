import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 40px;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); // 상자에 그림자 추가
  z-index: 1001; // ModalFrame 위에 위치
  width: 30vw;
  height: 8vw;
  overflow-y: auto; // 내용이 많을 경우 스크롤 가능
`;

const DeleteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 3vw;
  font-family: 'PretendardSemiBold';
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AcceptButton = styled.button`
  font-family: 'PretendardSemiBold';
  width: 5.5vw;
  height: 2vw;
  border-radius: 7px;
  border: 1px solid;
  margin-right: 5vw;
  background-color: #ffffff;
  font-size: 17px;
  &:hover {
    background-color: #ed7070;
    border: white 1px solid;
    color: white;
  }
`;

const RejectButton = styled.button`
  font-family: 'PretendardSemiBold';
  width: 5.5vw;
  height: 2vw;
  border-radius: 7px;
  border: 1px solid;
  background-color: #ffffff;
  font-size: 17px;
  &:hover {
    background-color: #ed7070;
    border: white 1px solid;
    color: white;
  }
`;

const DeleteFriendModal = ({ onClose, friendIndex, fetchPage, name }) => {
  async function DeleteFriendHandler() {
    try {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const response = await axios.delete(
        `http://3.38.7.193:8080/api/v1/social/request/${friendIndex}`
      );

      if (response.data.httpResponseStatus === 'SUCCESS') {
        console.log(response);
        alert('친구 삭제 성공');
        onClose();
        fetchPage();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('친구 삭제 중 오류 발생:', error);
    }
  }

  return (
    <ModalFrame onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <DeleteContainer>
          <Title>[{name}]님을 친구목록에서 제외할까요?</Title>
          <ButtonContainer>
            <AcceptButton onClick={DeleteFriendHandler}>예</AcceptButton>
            <RejectButton onClick={onClose}>아니오</RejectButton>
          </ButtonContainer>
        </DeleteContainer>
      </ModalBox>
    </ModalFrame>
  );
};

DeleteFriendModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  friendIndex: PropTypes.number.isRequired,
  fetchPage: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  userIndex: PropTypes.number.isRequired,
  friendUserIndex: PropTypes.number.isRequired,
};

export default DeleteFriendModal;
