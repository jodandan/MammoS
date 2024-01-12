import React from 'react'
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
  return (
    <TotalBox>
      <BoxTitle>최근스터디</BoxTitle>
      <Container>
        <FirstLine>
          <LeftSide>6차 개발회의</LeftSide>
          <DataBox>2024.01.17 ~ 2024.01.17</DataBox>
          <LocationBox>가천대학교 유레카 HOW</LocationBox>
        </FirstLine>
        <SecondLine>
          <NoticeBox>
            <div style={{ display: 'flex', flexDirection: 'columns', padding: '0.5rem 0.5rem 0.1rem 0.5rem' }}>
              <Title>Study Summary</Title>
              <EditBox>수정</EditBox>
            </div>
            <InputBox />
          </NoticeBox>
          <PeopleListBox>
            <ListTitle>참여 인원</ListTitle>
            <PeopleList>
              <CheckBoxLabel>
                <input type="checkbox" />
                <span>Name1 / Nickname1</span>
              </CheckBoxLabel>
              <CheckBoxLabel>
                <input type="checkbox" />
                <span>Name2 / Nickname2</span>
              </CheckBoxLabel>
            </PeopleList>
          </PeopleListBox>
        </SecondLine>
      </Container>
    </TotalBox>
  )
}
