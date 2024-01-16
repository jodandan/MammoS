import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Title, MemberList, MemberItem } from './MemberContainerCss.jsx';
import styled from 'styled-components';
export default function MemberContainer() {
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
        console.log(studyData.home.members);
      } catch (error) {
        console.error('Error fetching study information:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <Container>
      <Title>Members</Title>
      {studyData && studyData.home && (
        <MemberList>
          {studyData.home.members.map((member) => (
            <MemberItem key={member.id}>
              <Name>{member.name}</Name>/<div>{member.id}</div>
              <UniversityName>{member.universityName}</UniversityName>
              <MajorName>{member.majorName}</MajorName>
              <Status>{member.status}</Status>
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
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.32px;
`;

export const UniversityName = styled.div`
  color: #595959;
  font-family: Pretendard Variable;
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

