import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../PageFrame/pageFrameItems/NavigationBar.jsx';
import {
  FrameContainer,
  ContainerBox,
  StudyTitle,
  SubText,
  TextBox,
  SecondLine,
  SideMenuBar,
  Img,
  Container,
  CheckContainer,
  Pagingbox,
  EditBox,
} from './StudyPageCss.jsx';
import StudyContainer from './StudyPageItems/StudyBox/StudyContainer.jsx';
import MemberContainer from './StudyPageItems/MemberBox/MemberContainer.jsx';
import NoticeContainer from './StudyPageItems/NoticeBox/NoticeContainer.jsx';
import Clickhome from '../assets/Clickhome.png';
import Calender from '../assets/Calender.png';
import User from '../assets/User.png';
import List from '../assets/List.png';
import { ReactComponent as LeftArrow } from '../assets/LeftArrow.svg';
import { ReactComponent as RightArrow } from '../assets/RightArrow.svg';
import { ReactComponent as Notice } from '../assets/Notice.svg';
import Edit from '../assets/Edit.png';
import Promotion from '../assets/Promotion.png';
import StudyInfoPopup from './StudyPageItems/PopupBox/StudyInfoPopup.jsx';

export default function StudyHome({ onIndexChange }) {
  const navigate = useNavigate();
  const [studyData, setStudyData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editedStudyName, setEditedStudyName] = useState('');
  const [editedStudyMemo, setEditedStudyMemo] = useState('');
  // const isLeader =
  //   studyData &&
  //   studyData[currentIndex]?.home?.projectTabResponseDto?.projectInMembers[0]
  //     ?.status === 'Leader';

  const handleEditModalSave = (newStudyName, newStudyMemo) => {
    setEditedStudyName(newStudyName);
    setEditedStudyMemo(newStudyMemo);
  };

  const handleLeftArrowClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      onIndexChange(currentIndex - 1); // Pass updated index
    }
  };

  const handleRightArrowClick = () => {
    if (currentIndex < studyData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      onIndexChange(currentIndex + 1); // Pass updated index
    }
  };

  const setModalOpen = () => {
    // if (isLeader) {
    setModalIsOpen(true);
    // } else {
    //   alert('리더만 수정할 수 있습니다.');
    // }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log(token);
        const response = await axios.get(
          'http://3.38.7.193:8080/api/v1/study',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // myStatus가 3이 아닌 스터디만 필터링하여 상태 업데이트
        const filteredData = response.data.responseData.filter(study => study.myStatus !== 3);
        setStudyData(filteredData);
      } catch (error) {
        console.error('Error fetching study information:', error);
      }
    };
    // 메모이즈된 함수를 사용
    onIndexChange(currentIndex);
    fetchData();
  }, [currentIndex, onIndexChange]);
  return (
    <>
      <NavigationBar />
      <Pagingbox>
        <LeftArrow onClick={handleLeftArrowClick} />
        <RightArrow onClick={handleRightArrowClick} />
      </Pagingbox>
      <FrameContainer>
        <SideMenuBar>
          <CheckContainer>
            <Img
              onClick={() => navigate('/studyHome')}
              src={Clickhome}
              alt="홈"
            />
          </CheckContainer>
          <Container>
            <Img
              onClick={() => navigate('/studyCalender')}
              src={Calender}
              alt="캘린더"
            />
          </Container>
          <Container>
            <Img
              onClick={() => navigate('/studySocial')}
              src={User}
              alt="유저"
            />
          </Container>
          <Container>
            <Notice onClick={() => navigate('/studyNotice')} />
          </Container>
          <Container>
            <Img
              onClick={() => navigate('/studyPromotion')}
              src={Promotion}
              alt="홍보"
            />
          </Container>
        </SideMenuBar>
        <ContainerBox>
          {studyData && (
            <TextBox>
              <StudyTitle>
                {studyData[currentIndex] &&
                  (studyData[currentIndex].home.title) || '없음'}
                <EditBox>
                  <img
                    src={Edit}
                    alt="수정"
                    // onClick={() => setModalIsOpen(true)}
                    onClick={setModalOpen}
                    style={{ width: '12px', height: '12px', cursor: 'pointer' }}
                  />
                  {modalIsOpen && (
                    <Modal
                      isOpen={true}
                      onRequestClose={() => setModalIsOpen(false)}
                      style={customModalStyles}
                    >
                      <StudyInfoPopup
                        modalIsOpen={modalIsOpen}
                        setModalIsOpen={setModalIsOpen}
                        currentIndex={currentIndex}
                      />
                    </Modal>
                  )}
                </EditBox>
              </StudyTitle>
              <SubText>
                {studyData[currentIndex] &&
                  (studyData[currentIndex].home.summary) || '없음'}
              </SubText>
            </TextBox>
          )}
          <StudyContainer currentIndex={currentIndex} />
          {studyData && (
            <SecondLine>
              <MemberContainer currentIndex={currentIndex} />
              <NoticeContainer currentIndex={currentIndex} />
            </SecondLine>
          )}
        </ContainerBox>
      </FrameContainer>
    </>
  );
}

StudyHome.propTypes = {
  onIndexChange: PropTypes.func.isRequired,
};

const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100vh',
    zIndex: '150',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  content: {
    width: '60%',
    height: '65%',
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
