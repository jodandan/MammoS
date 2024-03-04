import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import NavigationBar from '../PageFrame/pageFrameItems/NavigationBar.jsx';
import { useNavigate } from 'react-router-dom';
import {
  FrameContainer,
  ContainerBox,
  StudyTitle,
  SubText,
  TextBox,
  SideMenuBar,
  Img,
  Container,
  CheckContainer,
  FirstLine,
  LeftSide,
  DataBox,
  LocationBox,
  NoticeBox,
  LeftBox,
  EditBox,
  InputBox,
  NoticeContainer,
  RightBox,
  DataandPlaceBox,
  MemberBox,
  Title,
  Edit,
  UserProject,
  ProjectContent,
  AddBtn,
} from './StudyCalenderCss.jsx';
import home from '../assets/Home.png';
import ClickCalender from '../assets/ClickCalender.png';
import User from '../assets/User.png';
import Promotion from '../assets/Promotion.png';
import edit from '../assets/Edit.png';
import NoticeList from './StudyCalenderItems/NoticeList/NoticeList.jsx';
import MemberList from './StudyCalenderItems/MemberList/MemberList.jsx';
import { ReactComponent as Notice } from '../assets/Notice.svg';
import Modal from 'react-modal';
import EditNoticePopup from './StudyCalenderItems/NoticeList/EditNoticePopup';

export default function StudyCalender({ currentIndex, onIndexChange }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [studyData, setStudyData] = useState(null);
  const navigate = useNavigate();
  const [projectIndex, setProjectIndex] = useState(0);

  const handleProjectSelect = (index) => {
    setProjectIndex(index);
  };

  function openModal() {
    setModalIsOpen(true);
  }

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
        console.log('캘린더 페이지에서의 인덱스:', currentIndex);
      } catch (error) {
        console.error('Error fetching study information:', error);
      }
    };

    fetchData();
  }, [currentIndex]);
  return (
    <>
      <NavigationBar />
      <FrameContainer>
        <SideMenuBar>
          <Container>
            <Img onClick={() => navigate('/studyHome')} src={home} alt="홈" />
          </Container>
          <CheckContainer>
            <Img
              onClick={() => navigate('/studyCalender')}
              src={ClickCalender}
              alt="캘린더"
            />
          </CheckContainer>
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
          {studyData && studyData[currentIndex] && (
            <TextBox>
              <StudyTitle>
                {(studyData[currentIndex] &&
                  studyData[currentIndex].home.title) ||
                  '없음'}
                <Edit>
                  <img
                    src={edit}
                    alt="수정"
                    style={{ width: '12px', height: '12px' }}
                  />
                </Edit>
              </StudyTitle>
              <SubText>
                {studyData[currentIndex] &&
                  studyData[currentIndex].home.summary !== null
                  ? studyData[currentIndex].home.summary
                  : '없음'}
              </SubText>
            </TextBox>
          )}
          <Title>스터디 일정</Title>
          <div
            style={{ display: 'flex', flexDirection: 'row', height: '100%' }}
          >
            <LeftBox>
              <NoticeContainer>
                {studyData && studyData[currentIndex] && (
                <FirstLine>
                  <LeftSide>
                    {(studyData[currentIndex].project[projectIndex] &&
                      studyData[currentIndex].project[projectIndex]
                        .projectTitle) ||
                      '없음'}
                  </LeftSide>
                  <EditBox>
                    <Img
                        src={edit}
                        alt="수정"
                        style={{ width: '12px', height: '12px' }}
                        onClick={openModal}
                    />
                    {modalIsOpen && (
                        <Modal
                            isOpen={true}
                            onRequestClose={() => setModalIsOpen(false)}
                            style={customModalStyles}
                        >
                          <EditNoticePopup
                              setModalIsOpen={setModalIsOpen}
                              currentIndex={currentIndex}
                              projectIndex={projectIndex} // 현재 선택된 프로젝트 인덱스를 prop으로 전달
                          />

                        </Modal>
                    )}
                  </EditBox>
                </FirstLine>
                )}
                <NoticeBox>
                  {studyData && studyData[currentIndex] && (
                    <InputBox>
                      {studyData[currentIndex].project[projectIndex] &&
                        studyData[currentIndex].project[projectIndex]
                          .studySummary}
                    </InputBox>
                  )}
                </NoticeBox>
                <DataandPlaceBox>
                  {studyData && studyData[currentIndex] && (
                    <>
                      <DataBox>
                        {(studyData[currentIndex].project[projectIndex] &&
                          studyData[currentIndex].project[projectIndex]
                            .startDate) ||
                          '미정'}{' '}
                        ~{' '}
                        {(studyData[currentIndex].project[projectIndex] &&
                          studyData[currentIndex].project[projectIndex]
                            .endDate) ||
                          '미정'}
                      </DataBox>
                      <LocationBox>
                        {(studyData[currentIndex].project[projectIndex] &&
                          studyData[currentIndex].project[projectIndex]
                            .place) ||
                          '없음'}
                      </LocationBox>
                    </>
                  )}
                </DataandPlaceBox>
              </NoticeContainer>
              <MemberBox>
                <MemberList
                  projectIndex={projectIndex}
                  currentIndex={currentIndex}
                />
              </MemberBox>
            </LeftBox>
            <RightBox>
              <NoticeList
                currentIndex={currentIndex}
                onProjectSelect={handleProjectSelect}
              />
            </RightBox>
          </div>
        </ContainerBox>
      </FrameContainer>
    </>
  );
}

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
    width: '30%',
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

StudyCalender.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  onIndexChange: PropTypes.func.isRequired,
};
