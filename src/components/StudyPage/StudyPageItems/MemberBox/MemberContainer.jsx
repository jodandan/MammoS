import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Container, Title, MemberList, MemberItem } from './MemberContainerCss.jsx';
import styled from 'styled-components';
export default function MemberContainer({ currentIndex }) {
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
        setStudyData(response.data.responseData);
        console.log(studyData[currentIndex].home.projectTabResponseDto.projectInMembers.status)
        //console.log('현재 인덱스:', currentIndex);
      } catch (error) {
        console.error('Error fetching study information:', error);
      }
    };

    fetchData();
  }, [currentIndex]);
  return (
    <Container>
      <Title>Members</Title>
      {studyData && studyData[currentIndex]?.home && (
        <MemberList>
          {studyData[currentIndex].home.projectTabResponseDto?.projectInMembers?.map((member) => (
            <MemberItem key={member.id}>
              <Name>{member.name}</Name>
              <div>/&nbsp;{member.id}</div>
              <UniversityName>{member.universityName}</UniversityName>
              <MajorName>{member.majorName}</MajorName>
              <Status>{member.status || '없음'}</Status>
            </MemberItem>
          ))}
        </MemberList>
      )}
    </Container>
  )
}

export const Name = styled.div`
  width: 10px;
  color: #000;
  font-family: 'PretendardBold';
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.32px;
`;

export const UniversityName = styled.div`
  color: #595959;
  font-family: 'PretendardBold';
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.2px;
  padding-left: 5px;
`;

export const MajorName = styled(UniversityName)`
  padding-left: 5px;
`;
export const Status = styled(UniversityName)`
  margin-left: auto;
  padding-left: 0px;
  text-align: right;

`;

MemberContainer.propTypes = {
  currentIndex: PropTypes.number.isRequired,
};
