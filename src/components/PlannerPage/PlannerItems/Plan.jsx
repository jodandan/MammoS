import styled from 'styled-components';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Modal from './Modal/Modal';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PlanContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 55%;
  border: 1px solid rgba(160, 160, 160, 0.5);
  box-shadow: 0px 0px 10px 4px rgba(160, 160, 160, 0.5);
  margin-bottom: 2vw;
  border-radius: 20px;
`;

const PlanBox = styled.div`
  margin: 1vw;
  margin-bottom: 0px;
  height: 83%;
  overflow: auto;

  &::-webkit-scrollbar {
    border-left: 9px solid;
    border-right: 9px solid;
    border-image: linear-gradient(#e8f3ce, #ffffff);
    border-image-slice: 1;
    background-color: #b9d967;
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    border-left: 5px solid;
    border-right: 5px solid;
    border-image: linear-gradient(#e8f3ce, #ffffff);
    border-image-slice: 1;
    background-color: #b9d967;
    border-radius: 7px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const StudyTime = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
`;

const StudyTimeFont = styled.p`
  margin-top: 5px;
  font-size: 15px;
  font-weight: bold;
  padding-right: 8px;

  &.time {
    font-size: 20px;
    padding-right: 20px;
  }
`;

const UserPlan = styled.div`
  border-radius: 5px;
  margin-bottom: 0.4vw;
  height: ${({ ischecked }) => (ischecked === 'true' ? '1.6vw' : '2.5vw')};
  background-color: ${({ ischecked, isrunning }) =>
    ischecked === 'true'
      ? '#454545'
      : isrunning === 'true'
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
    width: ${({ ischecked }) => (ischecked === 'true' ? '100%' : '88%')};
  }

  & > input {
    border-color: ${({ ischecked }) =>
      ischecked === 'true' ? 'white' : 'black'};
  }
`;

const PlanBtn = styled.input`
  border: 2px solid;
  background-color: transparent;
  border-radius: 3px;
  margin-left: 10px;
  width: 10px;
  height: 10px;
`;

const PlanContentBox = styled.div`
  width: 50%;
`;

const PlanContent = styled.p`
  margin-left: 0.5vw;
  margin-top: 15px;

  &.content {
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

  &.notStarted {
    font-weight: bold;
    color: gray;
    padding-left: 28px;
  }

  &.add {
    color: gray;
    margin-left: 20px;
    margin-right: 45%;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 45px;
  margin-right: 3%;
`;

const AddBtn = styled.div`
  cursor: pointer;
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

const UserInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  margin-left: 30px;
  font-size: 15px;
  width: 150px;
  padding-bottom: 5px;
  text-align: center;
`;

const ModalContent = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const StyledDatePicker = styled(ReactDatePicker)`
  width: 150px;
  margin-left: 55px;
  font-size: 15px;
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  padding-bottom: 5px;
`;

export default function Plan(plan) {
  const plans = plan.plan;
  const totalTimeHour = String(Math.floor(plan.totalStudyTime / 60)).padStart(
    2,
    '0'
  );
  const totalTimeMin = String(Math.floor(plan.totalStudyTime % 60)).padStart(
    2,
    '0'
  );
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
  }

  const [date, setDate] = useState(new Date());
  const [planName, setPlanName] = useState('');

  function InputChangeHandler(value) {
    setPlanName(value);
  }

  async function SubmitHandler() {
    try {
      if (planName !== '') {
        const token = localStorage.getItem('token');
        // 토큰 설정
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // 계획 저장
        const response = await axios.post(
          'http://3.38.7.193:8080/api/v1/planner/plans',
          {
            planName: planName,
            date: date,
          }
        );
        console.log(response);
        plan.fetchPage();
      }
      closeModal();
      // 정보 저장
    } catch (error) {
      console.log(error);
    }
  }

  async function ButtonClickHandler(idx) {
    try {
      // 토큰 가져오기
      const token = localStorage.getItem('token');
      // 토큰 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // 타이머 On/Off
      const response = await axios.patch(
        'http://3.38.7.193:8080/api/v1/planner/plans/time/' + idx
      );
      // 오류시 알림창
      if (response.data.httpResponseStatus !== 'SUCCESS') {
        alert(response.data.message);
      }
      // 페이지 리로드
      plan.fetchPage();
    } catch (error) {
      alert(error);
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
        'http://3.38.7.193:8080/api/v1/planner/plans/' + idx
      );
      // 오류시 알림창
      if (response.data.httpResponseStatus !== 'SUCCESS') {
        alert(response.data.message);
      }
      // 페이지 리로드
      plan.fetchPage();
    } catch (error) {
      alert(error);
    }
  }

  function makePlans() {
    const result = [];

    if (plans) {
      // 1. 완수한 계획
      const completePlans = Object.values(plans).filter(
        (plan) => plan.planIsComplete === true
      );

      completePlans.map((plan) => {
        const studyHour = String(Math.floor(plan.planStudyTime / 60)).padStart(
          2,
          '0'
        );
        const studyMin = String(Math.floor(plan.planStudyTime % 60)).padStart(
          2,
          '0'
        );

        result.push(
          <UserPlan key={plan.planIndex} ischecked="true">
            <PlanBtn type="" />
            <PlanContentBox>
              <PlanContent className="content">{plan.planName}</PlanContent>
            </PlanContentBox>
            <ButtonBox>
              <Icon
                style={{ height: '20px', width: '20px', cursor: 'pointer' }}
                icon="mdi:trashcan-outline"
                onClick={() => DeleteHandler(plan.planIndex)}
              />
            </ButtonBox>
            <PlanContent className="timespent">time spent </PlanContent>
            <PlanContent className="time">
              {studyHour}:{studyMin}
            </PlanContent>
          </UserPlan>
        );
      });

      // 2. 진행 중인 계획
      const runningPlan = Object.values(plans).filter(
        (plan) => plan.studytimeStartTime !== null
      );

      runningPlan.map((plan) => {
        const current = Math.floor(
          (new Date().getTime() - new Date(plan.studytimeStartTime).getTime()) /
            60000
        );

        const studyHour = String(
          Math.floor((plan.planStudyTime + current) / 60)
        ).padStart(2, '0');
        const studyMin = String(
          Math.floor((plan.planStudyTime + current) % 60)
        ).padStart(2, '0');

        result.push(
          <UserPlan key={plan.planIndex} isrunning="true">
            <PlanBtn type="" />
            <PlanContentBox>
              <PlanContent className="content">{plan.planName}</PlanContent>
            </PlanContentBox>
            <ButtonBox>
              <Icon
                style={{ height: '20px', width: '20px', cursor: 'pointer' }}
                icon="mdi:trashcan-outline"
                onClick={() => DeleteHandler(plan.planIndex)}
              />
              <Icon
                style={{ height: '20px', width: '20px', cursor: 'pointer' }}
                icon="material-symbols:pause"
                onClick={() => ButtonClickHandler(plan.planIndex)}
              />
            </ButtonBox>
            <PlanContent className="timespent">in progress </PlanContent>
            <PlanContent className="time">
              {studyHour}:{studyMin}
            </PlanContent>
          </UserPlan>
        );
      });

      // 3. 예정된 계획
      const restPlans = Object.values(plans).filter(
        (plan) =>
          plan.studytimeStartTime === null && plan.planIsComplete === false
      );

      restPlans.map((plan) => {
        const studyHour = String(Math.floor(plan.planStudyTime / 60)).padStart(
          2,
          '0'
        );
        const studyMin = String(Math.floor(plan.planStudyTime % 60)).padStart(
          2,
          '0'
        );

        result.push(
          <UserPlan key={plan.planIndex}>
            <PlanBtn type="" />
            <PlanContentBox>
              <PlanContent className="content">{plan.planName}</PlanContent>
            </PlanContentBox>
            <ButtonBox>
              <Icon
                style={{ height: '20px', width: '20px', cursor: 'pointer' }}
                icon="mdi:trashcan-outline"
                onClick={() => DeleteHandler(plan.planIndex)}
              />
              <Icon
                style={{ height: '20px', width: '20px', cursor: 'pointer' }}
                icon="mdi:play"
                onClick={() => ButtonClickHandler(plan.planIndex)}
              />
            </ButtonBox>
            {plan.planStudyTime !== 0 && (
              <PlanContent className="timespent">time spent </PlanContent>
            )}
            {plan.planStudyTime !== 0 && (
              <PlanContent className="time">
                {studyHour}:{studyMin}
              </PlanContent>
            )}
            {plan.planStudyTime === 0 && (
              <PlanContent className="notStarted">Not Started</PlanContent>
            )}
          </UserPlan>
        );
      });

      // 4. 계획 만들기
    }
    result.push(
      <div>
        <UserPlan key="add" className="add">
          <PlanContent className="add">할일을 작성해주세요</PlanContent>
          <AddBtn onClick={openModal}>일정추가</AddBtn>
        </UserPlan>
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
              selected={date}
              onChange={(newDate) => setDate(newDate)}
              dateFormat="yyyy-mm-dd"
            />
          </ModalContent>
        </Modal>
      </div>
    );

    return result;
  }

  useEffect(() => {
    console.log(date);
    console.log(planName);
  });

  return (
    <PlanContainer>
      <PlanBox>{makePlans()}</PlanBox>
      <StudyTime>
        <StudyTimeFont>Total Time Spent</StudyTimeFont>
        <StudyTimeFont className="time">
          {totalTimeHour}:{totalTimeMin}
        </StudyTimeFont>
      </StudyTime>
    </PlanContainer>
  );
}
