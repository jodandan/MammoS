import styled from 'styled-components';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ChartHandler, InitializeChart } from '../Calendar/Calendar';
import Modal from '../Modal/Modal';
import { ko } from 'date-fns/esm/locale';

import {
  ProjectContainer,
  ProjectBox,
  ProjectBtn,
  UserProject,
  ProjectContentBox,
  ProjectContent,
  Duration,
  ButtonBox,
  AddBtn,
  UserInput,
  ModalContent,
  StyledDatePicker,
} from './ProjectCss';

const formatDate = (dateString) => {
  const [year, month, day] = dateString.split('-');
  return `${month}/${day}`;
};

export default function Project(project) {
  const [modalOpen, setModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [projectName, setProjectName] = useState('');

  function InputChangeHandler(value) {
    setProjectName(value);
  }

  function openModal() {
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
  }

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

  async function DeleteHandler(idx) {
    try {
      // 토큰 가져오기
      const token = localStorage.getItem('token');
      // 토큰 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // 계획 삭제
      const response = await axios.delete(
        'http://3.38.7.193:8080/api/v1/planner/projects/' + idx
      );
      // 오류시 알림창
      if (response.data.httpResponseStatus !== 'SUCCESS') {
        alert(response.data.message);
      } else {
        // 페이지 리로드
        project.fetchPage();
      }
    } catch (error) {
      alert(error);
    }
  }

  async function SubmitHandler() {
    try {
      if (projectName !== '') {
        const token = localStorage.getItem('token');
        // 토큰 설정
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // 계획 저장
        const response = await axios.post(
          'http://3.38.7.193:8080/api/v1/planner/projects',
          {
            startTime: startDate,
            endTime: endDate,
            name: projectName,
            isStudy: false,
            studyIdx: null,
            memo: null,
            place: null,
          }
        );
        console.log(response);
        project.fetchPage();
      }
      closeModal();
      // 정보 저장
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    InitializeChart(project.calendarProjects, project.year, project.monthValue);
    ChartHandler(project.calendarProjects, project.year, project.monthValue);
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
                style={{ height: '20px', width: '20px', cursor: 'pointer' }}
                icon="mdi:trashcan-outline"
                onClick={() => DeleteHandler(project.projectIndex)}
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
                  cursor: 'pointer',
                }}
                icon="mdi:trashcan-outline"
                onClick={() => DeleteHandler(project.projectIndex)}
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

    function setChangeDate(dates) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    }

    result.push(
      <>
        <UserProject key="add" className="add">
          <ProjectContent className="add">할일을 작성해주세요</ProjectContent>
          <AddBtn onClick={openModal}>일정추가</AddBtn>
        </UserProject>
        <Modal
          open={modalOpen}
          close={closeModal}
          header="일정 생성"
          SubmitHandler={SubmitHandler}
        >
          <ModalContent>
            계획명
            <UserInput
              onChange={(event) => InputChangeHandler(event.target.value)}
            />
          </ModalContent>
          <ModalContent>
            일정
            <StyledDatePicker
              selectsRange={true}
              locale={ko}
              selected={startDate}
              startDate={startDate}
              endDate={endDate}
              onChange={(newDates) => setChangeDate(newDates)}
              dateFormat="yyyy-MM-dd"
            />
          </ModalContent>
        </Modal>
      </>
    );

    return result;
  }

  return (
    <ProjectContainer>
      <ProjectBox>{makeProjects()}</ProjectBox>
    </ProjectContainer>
  );
}
