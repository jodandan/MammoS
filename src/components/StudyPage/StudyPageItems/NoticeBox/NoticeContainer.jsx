import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import {
  Container,
  Title,
  NoticeList,
  NoticeItem,
} from './NoticeContainerCss.jsx';
import Post from '../../../PostPage/Post.jsx';
import { useNavigate } from 'react-router-dom';
export default function NoticeContainer({ currentIndex }) {
  const [studyData, setStudyData] = useState([]);
  const navigate = useNavigate();

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
        console.log(response);
        setStudyData(response.data.responseData);
      } catch (error) {
        console.error('Error fetching study information:', error);
      }
    };

    fetchData();
  }, []);

  function postNavigateHandler(postIdx, userStudyIdx) {
    navigate(`/post/${postIdx}/${userStudyIdx}`);
  }

  return (
    <Container>
      <Title>Notice</Title>
      {studyData.length !== 0 && studyData[currentIndex].home.notices && (
        <NoticeList>
          {studyData[currentIndex].home.notices.map((notice) => (
            <NoticeItem
              key={notice.idx}
              onClick={() =>
                postNavigateHandler(
                  notice.idx,
                  studyData[currentIndex].userStudyIndex
                )
              }
            >
              <Text>{notice.title}</Text>
            </NoticeItem>
          ))}
        </NoticeList>
      )}
    </Container>
  );
}

export const Text = styled.div`
  color: #000;
  font-family: 'PretendardBold';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.32px;
`;

NoticeContainer.propTypes = {
  currentIndex: PropTypes.number.isRequired,
};
