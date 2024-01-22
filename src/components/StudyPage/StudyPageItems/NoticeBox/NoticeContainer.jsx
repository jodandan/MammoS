import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import { Container, Title, NoticeList, NoticeItem } from './NoticeContainerCss.jsx'
export default function NoticeContainer({ currentIndex }) {
  const [studyData, setStudyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://3.38.7.193:8080/api/v1/study', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStudyData(response.data.responseData.content[0]);
      } catch (error) {
        console.error('Error fetching study information:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <Container>
      <Title>Notice</Title>
      {studyData && studyData.post && (
        <NoticeList>
          {studyData.post.promotions.map((promotion) => (
            <NoticeItem key={promotion.idx}>
              <Text>
                {promotion.title}
              </Text>
            </NoticeItem>
          ))}
        </NoticeList>
      )}
    </Container>
  )
}

export const Text = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.32px;
`;


NoticeContainer.propTypes = {
  currentIndex: PropTypes.number.isRequired,
};
