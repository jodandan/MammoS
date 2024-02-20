import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import NavigationBar from '../PageFrame/pageFrameItems/NavigationBar.jsx';
import { useNavigate } from 'react-router-dom';
import home from '../assets/Home.png';
import Calender from '../assets/Calender.png';
import User from '../assets/User.png';
import Edit from '../assets/Edit.png';
import ClickNotice from '../assets/ClickNotice.png';
import Promotion from '../assets/Promotion.png';
import {
  FrameContainer,
  SideMenuBar,
  Container,
  Img,
  CheckContainer,
  ContainerBox,
  TextBox,
  StudyTitle,
  EditBox,
  SubText,
  NoticeBox,
  FirstLine,
  SecondLine,
  ListBox,
  List,
  Text,
  Count,
  Title,
  Writer,
  Data,
  PaginationContainer,
  PageNumber,
  PageButton,
} from './StudyNoticeCss.jsx';
export default function StudyNotice({ currentIndex }) {
  const navigate = useNavigate();
  const [studyData, setStudyData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 5;

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
        console.log('공지 페이지에서의 인덱스:', currentIndex);
      } catch (error) {
        console.error('Error fetching study information:', error);
      }
    };

    fetchData();
  }, [currentIndex]);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 표시할 공지사항 목록 계산
  // 현재 페이지에 표시할 공지사항 목록 계산
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices =
    studyData &&
    studyData[currentIndex]?.notices &&
    studyData[currentIndex].notices.slice(
      indexOfFirstNotice,
      indexOfLastNotice
    );

  function postNavigateHandler(userStudyIdx, postIdx) {
    if (postIdx) {
      navigate(`/post/${postIdx}/${userStudyIdx}`);
    } else {
      if (studyData[currentIndex].myStatus !== 1) {
        alert('권한이 없습니다.');
        return;
      }

      navigate(`/post/saving/notice/${userStudyIdx}`);
    }
  }

  return (
    <>
      <NavigationBar />
      <FrameContainer>
        {/* 메뉴 아이콘들 */}
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
          <Container>
            <Img
              onClick={() => navigate('/studySocial')}
              src={User}
              alt="소셜"
            />
          </Container>
          <CheckContainer>
            <Img
              onClick={() => navigate('/studyNotice')}
              src={ClickNotice}
              alt="소셜"
            />
          </CheckContainer>
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
                  ? studyData[currentIndex].home.summary
                  : '없음'}
              </SubText>
            </TextBox>
          )}
          <NoticeBox>
            <FirstLine>
              <Text>공지사항</Text>
              <Text
                onClick={() =>
                  postNavigateHandler(studyData[currentIndex].userStudyIndex)
                }
              >
                글쓰기
              </Text>
            </FirstLine>
            <SecondLine>
              {/* 전체 공지사항 수 */}
              {studyData &&
                studyData[currentIndex] &&
                studyData[currentIndex].notices && (
                  <Text>전체 {studyData[currentIndex].notices.length}건</Text>
                )}
            </SecondLine>
            {/* 현재 페이지의 공지사항 목록 */}
            {studyData &&
              studyData[currentIndex] &&
              studyData[currentIndex].notices && (
                <ListBox>
                  {studyData[currentIndex].notices.length > 0 ? (
                    studyData[currentIndex].notices.map((notice, index) => {
                      // 날짜 시간 문자열을 Date 객체로 변환
                      const updatedAt = new Date(
                        notice.updatedAt ? notice.updatedAt : notice.createdAt
                      );
                      // 연도, 월, 일을 추출
                      const year = updatedAt.getFullYear();
                      const month = updatedAt.getMonth() + 1; // 월은 0부터 시작
                      const day = updatedAt.getDate();
                      // 날짜 문자열을 형식화
                      const formattedDate = `${year}-${
                        month < 10 ? '0' + month : month
                      }-${day < 10 ? '0' + day : day}`;
                      return (
                        <List
                          key={notice.idx}
                          onClick={() =>
                            postNavigateHandler(
                              studyData[currentIndex].userStudyIndex,
                              notice.idx
                            )
                          }
                        >
                          <Count>{index + 1}</Count>
                          <Title>{notice.title}</Title>
                          <Img className='calendar' src={Calender}></Img>
                          <Data>{formattedDate}</Data>
                          <Img className='edit' src={Edit}></Img>
                          <Writer>{notice.writer}</Writer>
                        </List>
                      );
                    })
                  ) : (
                    <p>공지사항이 없습니다</p>
                  )}
                  {/* 페이지네이션 */}
                  {currentPage > 0 && (
                    <PaginationContainer>
                      <PageButton
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        이전
                      </PageButton>
                      <PageNumber>{currentPage}</PageNumber>
                      <PageButton
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={
                          indexOfLastNotice >=
                          studyData[currentIndex]?.notices.length
                        }
                      >
                        다음
                      </PageButton>
                    </PaginationContainer>
                  )}
                </ListBox>
              )}
          </NoticeBox>
        </ContainerBox>
      </FrameContainer>
    </>
  );
}

StudyNotice.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  onIndexChange: PropTypes.func.isRequired,
};
