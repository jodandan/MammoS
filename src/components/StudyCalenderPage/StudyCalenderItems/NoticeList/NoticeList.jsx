import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Container,
  NoticeItem,
  NoticeListBox,
  TextBox,
  UserProject,
  ProjectContent,
  AddBtn,
} from './NoticeListCss.jsx';
import Modal from 'react-modal';
import CreateNoticePopup from './CreateNoticePopup';
export default function NoticeList({ currentIndex, onProjectSelect }) {
  const [studyData, setStudyData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [projectName, setProjectName] = useState('');

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
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
      } catch (error) {
        console.error('Error fetching study information:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <Container>
      <UserProject key="add" className="add">
        <ProjectContent className="add">일정을 추가해주세요</ProjectContent>
        <AddBtn onClick={openModal}>일정추가</AddBtn>
      </UserProject>
      {modalIsOpen && (
        <Modal
          isOpen={true}
          onRequestClose={() => setModalIsOpen(false)}
          style={customModalStyles}
        >
          <CreateNoticePopup
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            currentIndex={currentIndex}
          />
        </Modal>
      )}
      {studyData && (
        <NoticeListBox>
          {studyData[currentIndex] &&
            studyData[currentIndex].project.map((project, projectIndex) => (
              <NoticeItem
                key={projectIndex}
                onClick={() => onProjectSelect(projectIndex)}
              >
                <Text>{project.projectTitle || '없음'}</Text>
                <TextBox>
                  {`${project.startDate} ~ ${project.endDate}`}
                  <br />
                  {project.place || '없음'}
                </TextBox>
              </NoticeItem>
            ))}
        </NoticeListBox>
      )}
    </Container>
  );
}
export const Text = styled.div`
  color: #000;
  font-family: 'PretendardBold';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.32px;
`;

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


NoticeList.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  onProjectSelect: PropTypes.func.isRequired,
};
