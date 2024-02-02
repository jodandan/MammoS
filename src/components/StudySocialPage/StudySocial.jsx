import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import NavigationBar from '../PageFrame/pageFrameItems/NavigationBar.jsx';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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
  TitleBox,
  MemberListBox,
  EditBox,
} from './StudySocialCss.jsx';
import MemberList from './MemberList/MemberList.jsx';
import home from '../assets/Home.png';
import Calender from '../assets/Calender.png';
import List from '../assets/List.png';
import Edit from '../assets/Edit.png';
import { ReactComponent as ClickUser } from '../assets/ClickUser.svg';
import { ReactComponent as Notice } from '../assets/Notice.svg';

export default function StudySocial({ currentIndex }) {
  const [studyData, setStudyData] = useState(null);
  const navigate = useNavigate();
  const [projectIndex, setProjectIndex] = useState(0);

  const handleProjectSelect = (index) => {
    setProjectIndex(index);
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
        console.log('소셜 페이지에서의 인덱스:', currentIndex);
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
          <Container>
            <Img
              onClick={() => navigate('/studyCalender')}
              src={Calender}
              alt="캘린더"
            />
          </Container>
          <CheckContainer>
            <ClickUser onClick={() => navigate('/studySocial')} />
          </CheckContainer>
          <Container>
            <Notice />
          </Container>
        </SideMenuBar>
        <ContainerBox>
          {studyData && (
            <TextBox>
              <StudyTitle>
                {(studyData[currentIndex] &&
                  studyData[currentIndex].home.title) ||
                  '없음'}
                <EditBox>
                  <img
                    src={Edit}
                    alt="수정"
                    style={{ width: '12px', height: '12px' }}
                  />
                </EditBox>
              </StudyTitle>
              <SubText>
                {studyData[currentIndex] &&
                  studyData[currentIndex].home.summary !== null
                  ? studyData.home.summary
                  : '없음'}
              </SubText>
            </TextBox>
          )}
          <Text>스터디원</Text>
          <TitleBox>
            <NameText>이름 / 아이디</NameText>
            <CollegeText>대학교 / 전공</CollegeText>
            <PositionText>직책</PositionText>
          </TitleBox>
          <MemberListBox>
            <MemberList currentIndex={currentIndex} />
          </MemberListBox>
        </ContainerBox>
      </FrameContainer>
    </>
  );
}

StudySocial.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  onIndexChange: PropTypes.func.isRequired,
};

export const Text = styled.div`
  color: #000;
  font-family: 'PretendardBold';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
  width: 100%;
`;

export const NameText = styled.div`
  color: #000;
  font-family: 'PretendardBold';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
  width: 40%;
`;

export const CollegeText = styled(NameText)`
  width: 40%;
`;

export const PositionText = styled(NameText)`
  width: 25%;
`;
