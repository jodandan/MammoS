import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import {
  Box,
  FirstLine,
  Title,
  SubTitle,
  ContainerBox,
  NameContainer,
  MemoContainer,
  LastContainer,
  NameInput,
  MemoInput,
  ButtonBox,
  ChangeButton,
  CancelButton,
  SwitchFrame,
  Switch,
  OnOff,
} from './StudyInfoPopupCss.jsx';
import StudyCompletedPopup from './StudyCompletedPopup.jsx';
export default function StudyInfoPopup({ setModalIsOpen, currentIndex }) {
  const [studyData, setStudyData] = useState(null);
  const [secondmodalIsOpen, setSecondModalIsOpen] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [newName, setNewName] = useState('');
  const [newMemo, setNewMemo] = useState('');

  const ButtonClickHandler = () => {
    setSecondModalIsOpen(true);
    setIsPublic(!isPublic);
  };

  const modalClose = () => {
    setModalIsOpen(false);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleMemoChange = (e) => {
    setNewMemo(e.target.value);
  };

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          'http://3.38.7.193:8080/api/v1/study',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setStudyData(response.data.responseData);
      } catch (error) {
        console.error('Error fetching study information:', error);
      }
    };
    fetchData();
  }, [currentIndex]);

  //변경 버튼 로직
  const handleApiCall = async () => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.patch(
        `http://3.38.7.193:8080/api/v1/study/${studyData[currentIndex].userStudyIndex}`,
        {
          newName: newName,
          newMemo: newMemo,
          isComplete: isPublic,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('변경이 완료되었습니다.');
      modalClose();
      window.location.reload(); // 페이지 새로고침
    } catch (error) {
      console.error('변경 실패:', error);
    }
  };

  return (
    <Box>
      <FirstLine>
        <Title>스터디 정보 설정</Title>
        <SubTitle>※ 변경하시려는 부분만 입력해주세요</SubTitle>
      </FirstLine>
      <ContainerBox>
        <NameContainer>
          <Text>스터디이름</Text>
          <NameInput
            placeholder="변경하실 이름을 입력해주세요"
            value={newName}
            onChange={handleNameChange}
          />
        </NameContainer>
        <MemoContainer>
          <MemoText>스터디메모</MemoText>
          <MemoInput
            placeholder="변경하실 메모를 입력해주세요"
            value={newMemo}
            onChange={handleMemoChange}
          />
        </MemoContainer>
        <LastContainer>
          <Text>스터디 완수 여부</Text>
          <SwitchFrame
            onClick={ButtonClickHandler}
            ispublic={isPublic.toString()}
          >
            {isPublic && <OnOff className="on"></OnOff>}
            {!isPublic && <OnOff className="off"></OnOff>}
            <Switch isOn={isPublic} />
          </SwitchFrame>
          {secondmodalIsOpen && (
            <Modal
              isOpen={true}
              onRequestClose={() => setSecondModalIsOpen(false)}
              style={customModalStyles}
            >
              <StudyCompletedPopup
                secondmodalIsOpen={secondmodalIsOpen}
                setSecondModalIsOpen={setSecondModalIsOpen}
                isPublic={isPublic}
                setIsPublic={setIsPublic}
              />
            </Modal>
          )}
        </LastContainer>
      </ContainerBox>
      <ButtonBox>
        <ChangeButton onClick={handleApiCall}>변경</ChangeButton>
        <CancelButton onClick={modalClose}>취소</CancelButton>
      </ButtonBox>
    </Box>
  );
}

StudyInfoPopup.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
};

export const Text = styled.div`
  width: 30%;
  color: #000;
  font-family: 'PretendardBold';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export const MemoText = styled(Text)`
  width: 38%;
`;

const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100vh',
    zIndex: '130',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  content: {
    width: '40%',
    height: '40%',
    zIndex: '150',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    justifyContent: 'center',
    overflow: 'hidden',
  },
};
