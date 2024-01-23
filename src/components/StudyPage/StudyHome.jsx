import React, { useEffect, useState } from 'react';
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

export default function StudyHome({ onIndexChange }) {
  const navigate = useNavigate();
  const [studyData, setStudyData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
        setStudyData(response.data.responseData);
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
            <Img src={List} alt="리스트" />
          </Container>
        </SideMenuBar>
        <ContainerBox>
          {studyData && (
            <TextBox>
              <StudyTitle>
                {studyData[currentIndex].home.title || '없음'}
              </StudyTitle>
              <SubText>{studyData[currentIndex].summary || '없음'}</SubText>
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
