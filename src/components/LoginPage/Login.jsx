import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Logos } from './loginItems/loginItemCss';

import {
  PageContainer,
  Title,
  LoginForm,
  SubmitBtn,
  AccountManagement,
  UserInput,
} from './loginItems/loginItemCss';

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function loginHandler(event) {
    event.preventDefault();

    // 유효성 검사: 아이디 비밀번호 입력 확인
    if (!id || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    try {
      // id, pwd를 담고있는 requestBody와 함께 위 주소에 POST 요청
      const response = await axios.post('http://localhost:8080/api/v1/login', {
        id: id,
        pwd: password,
      });

      // 필요한 정보 저장
      const { httpResponseStatus, message, responseData } = response.data;

      // 성공/실패를 문자열로 해서 이렇게 했습니다..
      if (httpResponseStatus === 'SUCCESS') {
        // 로그인 성공
        // JWT 토큰 localStorage에 저장
        localStorage.setItem('token', responseData);
        // expiredTime localStorage에 저장
        let date = new Date();
        date.setHours(date.getHours() + 1);
        localStorage.setItem('expiredTime', date);
        // 홈페이지로 이동
        navigate('/home');
      } else {
        // 로그인 실패
        console.error('로그인 실패: ', message);
        alert(message);

        // 아이디 비밀번호 입력칸 초기화
        setId('');
        setPassword('');
      }
    } catch (error) {
      console.error('로그인 오류: ', error);
    }
  }

  function inputChangeHandler(input, value) {
    if (input === 'id') {
      setId(value);
    } else {
      setPassword(value);
    }
  }

  return (
    <PageContainer>
      <Logos />
      <Title>마음 맞게, 모두 스터디</Title>
      <LoginForm onSubmit={loginHandler}>
        <UserInput
          type="text"
          name="id"
          value={id}
          required
          placeholder="아이디"
          onChange={(event) => inputChangeHandler('id', event.target.value)}
        />
        <UserInput
          type="password"
          name="password"
          value={password}
          required
          placeholder="비밀번호"
          onChange={(event) =>
            inputChangeHandler('password', event.target.value)
          }
        />
        <SubmitBtn type="submit" onClick={loginHandler}>
          로그인
        </SubmitBtn>
      </LoginForm>
      <AccountManagement>
        <Link
          to={'/signup'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          회원 가입
        </Link>
      </AccountManagement>
    </PageContainer>
  );
}
