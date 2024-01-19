import PageFrame from '../PageFrame/PageFrame';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from './MyInfoItems/Modal/Modal';

import {
  PageContainer,
  Left,
  Right,
  Pfp,
  Id,
  Account,
  Logout,
  Info,
  Top,
  Title,
  ModifyBtn,
  Name,
  University,
  College,
  Email,
  Setting,
  Bottom,
  Public,
  SwitchFrame,
  Switch,
  OnOff,
  Circle,
  UserInput,
  ModalContent,
  UserSelect,
} from './MyInfoItems/MyInfoCss';

export default function MyInfo() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [major, setMajor] = useState('');
  const [email, setEmail] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [pfp, setPfp] = useState('');
  const navigate = useNavigate();
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [isLeft, setIsLeft] = useState(true);
  const [univIndex, setUnivIndex] = useState(0);

  function openInfoModal() {
    setInfoModalOpen(true);
  }
  function closeInfoModal() {
    setInfoModalOpen(false);
  }

  function openAccountModal() {
    setAccountModalOpen(true);
  }
  function closeAccountModal() {
    setAccountModalOpen(false);
  }

  async function fetchPage() {
    try {
      // 토큰 가져오기
      const token = localStorage.getItem('token');
      // 토큰 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // 정보 받아오기
      const { responseData } = (
        await axios.get('http://3.38.7.193:8080/api/v1/info')
      ).data;
      // 정보 저장
      setId(responseData.id);
      setName(responseData.name);
      setUniversity(responseData.universityName);
      setMajor(responseData.majorName);
      setEmail(responseData.email);
      setIsPublic(responseData.public);
      setPfp(responseData.pfp);
      setUnivIndex(responseData.universityIndex);
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  }

  async function LogoutHandler() {
    try {
      // 로그아웃 서버에 요청
      await axios.get('http://3.38.7.193:8080/api/v1/logout');
      // 로컬 스토리지에 저장된 토큰 삭제
      localStorage.removeItem('token');
      // 로그인 화면으로 navigate
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPage();
    getColleges();
  }, [univIndex]);

  async function AccountChangeHandler(input) {
    try {
      // 토큰 불러오기
      const token = localStorage.getItem('token');
      // 토큰 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      let response;

      if (input === 'id') {
        // 계획 저장
        response = await axios.patch('http://3.38.7.193:8080/api/v1/info/id', {
          id: inputId,
          pwd: inputPwd,
        });

        if (response.data.httpResponseStatus === 'SUCCESS') {
          setId(inputId);
          // 새로 발급 받은 JWT 토큰 localStorage에 저장
          localStorage.setItem('token', response.data.responseData);
          // 지금 시간 + 1시간을 expiredTime localStorage에 저장
          let date = new Date();
          date.setHours(date.getHours() + 1);
          localStorage.setItem('expiredTime', date);
        }
      } else {
        response = await axios.patch('http://3.38.7.193:8080/api/v1/info/pwd', {
          prevPwd: prevPwd,
          newPwd: newPwd,
          checkPwd: checkPwd,
        });
      }

      if (response.data.httpResponseStatus !== 'SUCCESS') {
        alert(response.data.message);
      } else {
        alert('변경 성공');
      }
      // 팝업 닫기
      closeAccountModal();
    } catch (error) {
      console.log(error);
    }
  }

  async function ButtonClickHandler() {
    try {
      // 토큰 가져오기
      const token = localStorage.getItem('token');
      // 토큰 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // 정보 받아오기
      const { responseData } = (
        await axios.patch('http://3.38.7.193:8080/api/v1/info/planner')
      ).data;

      setIsPublic(responseData);
    } catch (error) {
      console.log(error);
    }
  }

  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');

  async function InfoChangeHandler() {
    // 학부, 전공 변경
    try {
      // 토큰 가져오기
      const token = localStorage.getItem('token');
      // 토큰 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // 정보 받아오기
      const response = await axios.patch(
        'http://3.38.7.193:8080/api/v1/info/major/' +
          getKeyByValue(majorMap, selectedMajor)
      );
      console.log(response);
      if (response.data.httpResponseStatus !== 'SUCCESS') {
        alert(response.data.message);
      }

      closeInfoModal();
      fetchPage();
    } catch (error) {
      console.log(error);
    }
  }

  function ChangeIdInputHandler(input, value) {
    if (input === 'id') {
      setInputId(value);
    } else {
      setInputPwd(value);
    }
  }

  const [prevPwd, setPrevPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [checkPwd, setCheckPwd] = useState('');

  function ChangePwdInputHandler(input, value) {
    if (input === 'prev') {
      setPrevPwd(value);
    } else if (input === 'new') {
      setNewPwd(value);
    } else {
      setCheckPwd(value);
    }
  }

  async function getColleges() {
    try {
      const response = await axios.get(
        'http://3.38.7.193:8080/api/v1/signup/college/' + univIndex
      );
      const { responseData } = response.data;
      setCollegeMap(responseData);
    } catch (error) {
      console.log(error);
    }
  }
  // 빈 배열을 전달하여 한 번만 실행되도록 설정

  const [collegeMap, setCollegeMap] = useState([]);
  const [majorMap, setMajorMap] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState('');
  const [selectedMajor, setSelectedMajor] = useState('');

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  async function selectChangeHandler(input, event) {
    try {
      if (input === 'college') {
        setSelectedCollege(event.target.value);
        const response = await axios.get(
          'http://3.38.7.193:8080/api/v1/signup/major/' +
            getKeyByValue(collegeMap, event.target.value)
        );
        const { responseData } = response.data;
        setMajorMap(responseData);
        setSelectedMajor('');
      } else {
        setSelectedMajor(event.target.value);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PageFrame>
      <PageContainer>
        <Left>
          <Pfp src={pfp} />
          <Circle>
            <Icon
              style={{
                height: '22px',
                width: '22px',
                cursor: 'pointer',
              }}
              icon="mdi:pencil"
            />
          </Circle>
          <Id>{id}</Id>
          <Account onClick={openAccountModal}>아이디/비밀번호 변경</Account>
          <Modal
            open={accountModalOpen}
            close={closeAccountModal}
            header="아이디/비밀번호 변경"
            AccountChangeHandler={AccountChangeHandler}
            isLeft={isLeft}
            setIsLeft={setIsLeft}
            isInfoModal={false}
          >
            {isLeft && (
              <>
                <ModalContent>
                  현재 아이디
                  <UserInput defaultValue={id} readOnly />
                </ModalContent>
                <ModalContent>
                  새 아이디
                  <UserInput
                    onChange={(event) =>
                      ChangeIdInputHandler('id', event.target.value)
                    }
                  />
                </ModalContent>
                <ModalContent>
                  비밀번호
                  <UserInput
                    type="password"
                    onChange={(event) =>
                      ChangeIdInputHandler('pwd', event.target.value)
                    }
                  />
                </ModalContent>
              </>
            )}
            {!isLeft && (
              <>
                <ModalContent>
                  현재 비밀번호
                  <UserInput
                    onChange={(event) =>
                      ChangePwdInputHandler('prev', event.target.value)
                    }
                  />
                </ModalContent>
                <ModalContent>
                  새 비밀번호
                  <UserInput
                    type="password"
                    onChange={(event) =>
                      ChangePwdInputHandler('new', event.target.value)
                    }
                  />
                </ModalContent>
                <ModalContent>
                  비밀번호 확인
                  <UserInput
                    type="password"
                    onChange={(event) =>
                      ChangePwdInputHandler('check', event.target.value)
                    }
                  />
                </ModalContent>
              </>
            )}
          </Modal>
          <Logout onClick={LogoutHandler}>로그아웃</Logout>
        </Left>
        <Right>
          <Info>
            <Top>
              <Title>기본정보</Title>
              <ModifyBtn onClick={openInfoModal}>수정</ModifyBtn>
              <Modal
                open={infoModalOpen}
                close={closeInfoModal}
                header="내 정보 변경"
                isInfoModal={true}
                InfoChangeHandler={InfoChangeHandler}
              >
                <ModalContent>
                  현재 전공
                  <UserInput defaultValue={major} readOnly />
                </ModalContent>
                <ModalContent>
                  단과 대학
                  <UserSelect
                    isHidden={selectedCollege === ''}
                    onChange={(event) => selectChangeHandler('college', event)}
                  >
                    <option value="" hidden>
                      단과 대학을 선택해주세요.
                    </option>
                    {collegeMap &&
                      Object.values(collegeMap).map((name) => (
                        <option key={name}>{name}</option>
                      ))}
                  </UserSelect>
                </ModalContent>
                <ModalContent>
                  새 전공
                  <UserSelect
                    isHidden={selectedMajor === ''}
                    onChange={(event) => selectChangeHandler('major', event)}
                  >
                    <option value="" hidden>
                      전공을 선택해주세요.
                    </option>
                    {majorMap &&
                      Object.values(majorMap).map((name) => (
                        <option key={name}>{name}</option>
                      ))}
                  </UserSelect>
                </ModalContent>
              </Modal>
            </Top>
            <Name>{name}</Name>
            <University>{university}</University>
            <College>{major}</College>
            <Email>{email}</Email>
          </Info>
          <Setting>
            <Top>
              <Title>공개설정</Title>
            </Top>
            <Bottom>
              <Public>내 플래너 공개설정</Public>
              <SwitchFrame
                onClick={ButtonClickHandler}
                ispublic={isPublic.toString()}
              >
                {isPublic && <OnOff className="on">ON</OnOff>}
                {!isPublic && <OnOff className="off">OFF</OnOff>}
                <Switch isOn={isPublic} />
              </SwitchFrame>
            </Bottom>
          </Setting>
        </Right>
      </PageContainer>
    </PageFrame>
  );
}
