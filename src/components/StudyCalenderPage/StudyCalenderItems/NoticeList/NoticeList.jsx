import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Container,
  NoticeItem,
  NoticeListBox,
  TextBox,
} from './NoticeListCss.jsx';
export default function NoticeList({ currentIndex, onProjectSelect }) {
  const [studyData, setStudyData] = useState(null);

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

NoticeList.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  onProjectSelect: PropTypes.func.isRequired,
};
