import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Edit from '../../../assets/Edit.png';
import styled from 'styled-components';
import axios from 'axios';
import {
  Container,
  TotalBox,
  BoxTitle,
  FirstLine,
  LeftSide,
  DataBox,
  LocationBox,
  SecondLine,
  NoticeBox,
  Title,
  EditBox,
  InputBox,
  PeopleListBox,
  ListTitle,
  PeopleList,
  CheckBoxLabel,
  InviteList,
  FirstBox,
  CountBox,
} from './StudyContainerCss';

import StudyRequestList from '../PopupBox/StudyRequestList';
import StudySummaryEditPopup from '../PopupBox/StudySummaryEditPopup.jsx';
Modal.setAppElement('#root'); //에러 발생해서 넣은 로직

export default function StudyContainer({ currentIndex }) {
  const [studyData, setStudyData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [EditModalOpen, setEditModalIsOpen] = useState(false);

  const setModalOpen = () => {
    setModalIsOpen(true);
  };

  const setEditModalOpen = () => {
    setEditModalIsOpen(true);
  };

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
  }, []);
  return (
    <TotalBox>
      <FirstBox>
        <BoxTitle>최근 스터디</BoxTitle>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <CountBox>1</CountBox>
          <InviteList
            onClick={setModalOpen}
            style={{
              cursor: 'pointer',
            }}
          >
            요청목록
          </InviteList>
          {modalIsOpen && (
            <Modal
              isOpen={true}
              onRequestClose={() => setModalIsOpen(false)}
              style={customModalStyles}
            >
              <StudyRequestList
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                currentIndex={currentIndex}
              />
            </Modal>
          )}
        </div>
      </FirstBox>
      <Container>
        {studyData && studyData[currentIndex]?.home && (
          <FirstLine>
            <LeftSide>
              {(studyData[currentIndex] &&
                studyData[currentIndex]?.home?.projectTabResponseDto
                  ?.projectTitle) ||
                '없음'}
            </LeftSide>
            <DataBox>
              {studyData[currentIndex]?.home?.projectTabResponseDto?.startDate}{' '}
              ~ {studyData[currentIndex]?.home?.projectTabResponseDto?.endDate}
            </DataBox>
            <LocationBox>
              {(studyData[currentIndex] &&
                studyData[currentIndex]?.home?.projectTabResponseDto?.place) ||
                '없음'}
            </LocationBox>
          </FirstLine>
        )}
        <SecondLine>
          <NoticeBox>
            <div
              style={{
                display: 'flex',
                flexDirection: 'columns',
                padding: '0.5rem 0.5rem 0.1rem 0.5rem',
              }}
            >
              <Title>Study Summary</Title>
              <EditBox>
                <img
                  src={Edit}
                  alt="수정"
                  onClick={setEditModalOpen}
                  style={{ width: '12px', height: '12px', cursor: 'pointer' }}
                />
              </EditBox>
              {EditModalOpen && (
                <Modal
                  isOpen={true}
                  onRequestClose={() => setEditModalIsOpen(false)}
                  style={customEditModalStyles}
                >
                  <StudySummaryEditPopup
                    modalIsOpen={EditModalOpen}
                    setEditModalIsOpen={setEditModalIsOpen}
                    currentIndex={currentIndex}
                  />
                </Modal>
              )}
            </div>
            {studyData && studyData[currentIndex]?.home && (
              <InputBox>
                {(studyData[currentIndex] &&
                  studyData[currentIndex].home.projectTabResponseDto
                    .studySummary) ||
                  '없음'}
              </InputBox>
            )}
          </NoticeBox>
          <PeopleListBox>
            <ListTitle>참여 인원</ListTitle>
            {studyData && studyData[currentIndex]?.home && (
              <PeopleList>
                {studyData[currentIndex] &&
                  studyData[currentIndex].home.projectTabResponseDto
                    .projectInMembers
                  ? studyData[
                    currentIndex
                  ].home.projectTabResponseDto.projectInMembers.map(
                    (member) => (
                      <CheckBoxLabel key={member.id}>
                        <input type="checkbox" />
                        <TextBox>{member.name || '없음'} /</TextBox>
                        <TextBox2>&nbsp;{member.id || '없음'}</TextBox2>
                      </CheckBoxLabel>
                    )
                  )
                  : '없음'}
              </PeopleList>
            )}
          </PeopleListBox>
        </SecondLine>
      </Container>
    </TotalBox>
  );
}

export const TextBox = styled.div`
  color: #000;
  font-family: 'PretendardBold';
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  letter-spacing: -0.32px;
`;

export const TextBox2 = styled(TextBox)``;

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

const customEditModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100vh',
    zIndex: '200',
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

StudyContainer.propTypes = {
  currentIndex: PropTypes.number.isRequired,
};
