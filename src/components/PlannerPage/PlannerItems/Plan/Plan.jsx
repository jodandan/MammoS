import { Icon } from '@iconify/react';
import axios, { isCancel } from 'axios';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import { ko } from 'date-fns/esm/locale';
import CustomCheckBox from '../CustomCheckBox/CustomCheckBox';

import {
  PlanContainer,
  PlanBox,
  StudyTime,
  StudyTimeFont,
  UserPlan,
  PlanBtn,
  PlanContentBox,
  PlanContent,
  ButtonBox,
  AddBtn,
  UserInput,
  ModalContent,
  StyledDatePicker,
} from './PlanCss';

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

  async function CheckBoxChangeHandler(idx) {
    try {
      const token = localStorage.getItem('token');
      // 토큰 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // 계획 저장
      const response = await axios.patch(
        'http://3.38.7.193:8080/api/v1/planner/plans/complete/' + idx
      );

      if (response.data.httpResponseStatus !== 'SUCCESS') {
        alert(response.data.message);
      }

      plan.fetchPage();
    } catch (error) {
      console.log(error);
    }
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

        if (response.data.httpResponseStatus !== 'SUCCESS')
          alert(response.data.message);

        setPlanName('');
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

  useEffect(() => {
    makePlans();
  });

  function makePlans() {
    const result = [];

    if (plans) {
      // 1. 완수한 계획
      const completePlans = Object.values(plans).filter(
        (plan) => plan.planIsComplete === true
      );

      completePlans.map((plan) => {
        let studyHour = String(Math.floor(plan.planStudyTime / 60)).padStart(
          2,
          '0'
        );
        let studyMin = String(Math.floor(plan.planStudyTime % 60)).padStart(
          2,
          '0'
        );

        result.push(
          <UserPlan key={plan.planIndex} ischecked="true">
            <CustomCheckBox
              checked={plan.planIsComplete}
              onChange={() => CheckBoxChangeHandler(plan.planIndex)}
            />
            <PlanContentBox>
              <PlanContent className="content">{plan.planName}</PlanContent>
            </PlanContentBox>
            <ButtonBox>
              <Icon
                style={{
                  height: '20px',
                  width: '20px',
                  cursor: 'pointer',
                  color: '#fff',
                }}
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

        let studyHour = String(
          Math.floor((plan.planStudyTime + current) / 60)
        ).padStart(2, '0');
        let studyMin = String(
          Math.floor((plan.planStudyTime + current) % 60)
        ).padStart(2, '0');

        if (studyHour < 0) studyHour = String(0).padStart(2, '0');
        if (studyMin < 0) studyMin = String(0).padStart(2, '0');

        result.push(
          <UserPlan key={plan.planIndex} isrunning="true">
            <CustomCheckBox
              checked={plan.planIsComplete}
              onChange={() => CheckBoxChangeHandler(plan.planIndex)}
            />
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
            <CustomCheckBox
              checked={plan.planIsComplete}
              onChange={() => CheckBoxChangeHandler(plan.planIndex)}
            />

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
              locale={ko}
              onChange={(newDate) => setDate(newDate)}
              dateFormat="yyyy-MM-dd"
            />
          </ModalContent>
        </Modal>
      </div>
    );

    return result;
  }

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
