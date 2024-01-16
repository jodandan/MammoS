import React, { useEffect, useState } from 'react';
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
} from './StudyContainerCss';

export default function StudyContainer() {
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
    <TotalBox>
      <BoxTitle>최근스터디</BoxTitle>
      <Container>
        {studyData && studyData.home && (
          <FirstLine>
            <LeftSide>{studyData.home.projectTabResponseDto.projectTitle}</LeftSide>
            <DataBox>{studyData.home.projectTabResponseDto.startDate} ~ {studyData.home.projectTabResponseDto.endDate}</DataBox>
            <LocationBox>{studyData.home.projectTabResponseDto.place}</LocationBox>
          </FirstLine>
        )}
        <SecondLine>
          <NoticeBox>
            <div style={{ display: 'flex', flexDirection: 'columns', padding: '0.5rem 0.5rem 0.1rem 0.5rem' }}>
              <Title>Study Summary</Title>
              <EditBox>
                <img src={Edit} alt='수정' style={{ width: '12px', height: '12px;' }} />
              </EditBox>
            </div>
            {studyData && studyData.home && (
              <InputBox>
                {studyData.home.projectTabResponseDto.studySummary}
              </InputBox>
            )}
          </NoticeBox>
          <PeopleListBox>
            <ListTitle>참여 인원</ListTitle>
            {studyData && studyData.home && (
              <PeopleList>
                {studyData.home.projectTabResponseDto.projectInMembers.map((member) => (
                  <CheckBoxLabel key={member.id}>
                    <input type="checkbox" />
                    <TextBox>{member.name} /</TextBox>
                    <TextBox2>&nbsp;{member.id}</TextBox2>
                  </CheckBoxLabel>
                ))}
              </PeopleList>
            )}
          </PeopleListBox>
        </SecondLine>
      </Container>
    </TotalBox>
  )
}

export const TextBox = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  letter-spacing: -0.32px;
`;

export const TextBox2 = styled(TextBox)`
  padding-bottom: 3px;
`;

