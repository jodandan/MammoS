import styled from 'styled-components';
import NavigationBar from './pageFrameItems/NavigationBar';
import { Background } from './pageFrameItems/PageFrameCss';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  display: flex;
  position: absolute;
`;

export default function PageFrame(props) {
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchToken() {
      if (
        new Date(localStorage.getItem('expiredTime')).getTime() <
        new Date().getTime()
      ) {
        // 로그아웃 서버에 요청
        await axios.get('http://localhost:8080/api/v1/logout');
        // 로컬 스토리지에 저장된 토큰 삭제
        localStorage.removeItem('token');
        // 경고창
        alert('토큰 만료: 다시 로그인해주세요.');
        // 로그인 화면으로 navigate
        navigate('/');
      }
    }

    fetchToken();
  }, []);

  return (
    <>
      <NavigationBar />
      <PageContainer>
        <Background>{props.children}</Background>
      </PageContainer>
    </>
  );
}

PageFrame.propTypes = {
  children: PropTypes.node.isRequired,
};
