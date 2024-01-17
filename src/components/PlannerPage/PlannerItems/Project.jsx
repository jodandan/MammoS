import styled from 'styled-components';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Calendar, { ChartHandler, InitializeChart } from './Calendar/Calendar';

const ProjectContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 39%;
  border: 1px solid rgba(160, 160, 160, 0.5);
  box-shadow: 0px 0px 10px 4px rgba(160, 160, 160, 0.5);
  border-radius: 20px;
`;

const ProjectBox = styled.div`
  margin: 1vw;
  margin-bottom: 0px;

  height: 83%;
  overflow: auto;
  &::-webkit-scrollbar {
    border-left: 9px solid white;
    border-right: 9px solid white;
    background-color: #b9d967;
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    border-left: 5px solid white;
    border-right: 5px solid white;
    background-color: #b9d967;
    border-radius: 7px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const ProjectBtn = styled.input`
  border: 2px solid;
  background-color: transparent;
  border-radius: 3px;
  margin-left: 10px;
  width: 10px;
  height: 10px;
`;

const UserProject = styled.div`
  border-radius: 5px;
  margin-bottom: 0.4vw;
  height: ${({ ischecked }) => (ischecked === 'true' ? '1.6vw' : '2.5vw')};
  background-color: ${({ ischecked, isvisible }) =>
    ischecked === 'true'
      ? '#454545'
      : isvisible === 'true'
        ? '#90C20D'
        : '#C6EF5E'};
  box-shadow: 0px 3px 3px 0px rgb(0, 0, 0, 0.25);
  display: flex;
  align-items: center;

  &.add {
    background-color: #f7fee6;
  }

  & > p {
    color: ${({ ischecked }) => (ischecked === 'true' ? 'white' : 'black')};
  }

  & > div > p {
    color: ${({ ischecked }) => (ischecked === 'true' ? 'white' : 'black')};
  }

  & > input {
    border-color: ${({ ischecked }) =>
      ischecked === 'true' ? 'white' : 'black'};
  }
`;

const ProjectContentBox = styled.div`
  width: 56.5%;
`;

const ProjectContent = styled.p`
  margin-left: 0.5vw;
  margin-top: 15px;

  &.content {
    width: 90%;
    overflow: auto;

    white-space: nowrap;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &.timespent {
    font-size: 13px;
    text-align: right;
  }

  &.time {
    font-weight: bold;
    text-align: right;
    font-size: 18px;
  }

  &.add {
    color: gray;
    margin-left: 20px;
    margin-right: 45%;
  }
`;

const Duration = styled.p`
  font-size: 10px;

  &.start {
    font-size: 15px;
    margin-right: 5px;
  }

  &.end {
    margin-left: 5px;
    font-size: 15px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 60px;
  margin-right: 3%;
`;

const AddBtn = styled.div`
  display: flex;
  width: 80px;
  height: 20px;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  background-color: #b3e13e;
  border-radius: 30px;
  box-shadow: 1px 2px 3px 0px rgb(0, 0, 0, 0.25);
`;

const formatDate = (dateString) => {
  const [year, month, day] = dateString.split('-');
  return `${month}/${day}`;
};

export default function Project(project) {
  async function buttonClickHandler(input, idx) {
    if (input === 'calendar') {
      try {
        // 토큰 가져오기
        const token = localStorage.getItem('token');
        // 토큰 설정
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // 캘린더 On/Off
        const response = await axios.patch(
          'http://3.38.7.193:8080/api/v1/planner/projects/display/' + idx
        );

        project.fetchPage();
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    InitializeChart(project.calendarProjects);
    ChartHandler(project.project.project);
  });

  function makeProjects() {
    const projects = project.project.project;
    const result = [];

    // 정렬
    if (projects) {
      const completeProjects = Object.values(projects).filter(
        (project) => project.projectIsComplete === true
      );
      // 1. 완수한 프로젝트
      completeProjects.map((project) => {
        const startDate = formatDate(project.projectStartTime);
        const endDate = formatDate(project.projectEndTime);

        result.push(
          <UserProject key={project.projectIndex} ischecked="true">
            <ProjectBtn type="" />
            <ProjectContentBox>
              <ProjectContent className="content">
                {project.projectName}
              </ProjectContent>
            </ProjectContentBox>
            <Duration className="start">{startDate}</Duration>
            <Duration>~</Duration>
            <Duration className="end">{endDate}</Duration>
            <ButtonBox>
              <Icon
                style={{ height: '20px', width: '20px' }}
                icon="lucide:calendar"
              />
              <Icon
                style={{ height: '20px', width: '20px' }}
                icon="mdi:trashcan-outline"
              />
            </ButtonBox>
          </UserProject>
        );
      });

      // 2. 미완수 프로젝트
      const restProjects = Object.values(projects).filter(
        (project) => project.projectIsComplete !== true
      );

      restProjects.map((project) => {
        const startDate = formatDate(project.projectStartTime);
        const endDate = formatDate(project.projectEndTime);

        result.push(
          <UserProject
            key={project.projectIndex}
            isvisible={project.projectIsVisible.toString()}
          >
            <ProjectBtn type="" />
            <ProjectContentBox>
              <ProjectContent className="content">
                {project.projectName}
              </ProjectContent>
            </ProjectContentBox>
            <Duration className="start">{startDate}</Duration>
            <Duration>~</Duration>
            <Duration className="end">{endDate}</Duration>
            <ButtonBox>
              <Icon
                style={{
                  height: '20px',
                  width: '20px',
                }}
                icon="mdi:trashcan-outline"
              />
              {!project.projectIsVisible && (
                <Icon
                  style={{
                    height: '20px',
                    width: '20px',
                    marginLeft: '0.9vw',
                    cursor: 'pointer',
                  }}
                  icon="tabler:calendar-up"
                  onClick={() =>
                    buttonClickHandler('calendar', project.projectIndex)
                  }
                />
              )}
              {project.projectIsVisible && (
                <Icon
                  style={{
                    height: '20px',
                    width: '20px',
                    marginLeft: '0.9vw',
                    cursor: 'pointer',
                  }}
                  icon="tabler:calendar-off"
                  onClick={() =>
                    buttonClickHandler('calendar', project.projectIndex)
                  }
                />
              )}
            </ButtonBox>
          </UserProject>
        );
      });
    }

    result.push(
      <UserProject key="add" className="add">
        <ProjectContent className="add">할일을 작성해주세요</ProjectContent>
        <AddBtn>일정추가</AddBtn>
      </UserProject>
    );

    return result;
  }

  return (
    <ProjectContainer>
      <ProjectBox>{makeProjects()}</ProjectBox>
    </ProjectContainer>
  );
}
