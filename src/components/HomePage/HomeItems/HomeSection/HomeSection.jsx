import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import BlankBadge from '../../../assets/BlankBadge.png';

import {
  HomeBox,
  PfpImg,
  LogoutBtn,
  MyInfo,
  MyInfoFont1,
  MyInfoFont2,
  Badges,
  Badge,
} from './HomeSectionItemCss';
import { Title } from '../HomeItemCss';

export default function HomeSection({
  id,
  name,
  universityName,
  majorName,
  pfp,
  badgeIcon,
}) {
  const navigate = useNavigate();

  function clickHander() {
    navigate('/home');
  }

  async function logoutHandler() {
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

  function makeBadges() {
    const result = [];

    let badgeCnt = 0;
    badgeIcon.map((badge) => {
      result.push(<Badge key={badge} src={badge} />);
      badgeCnt++;
    });

    for (let i = badgeCnt; i < 3; i++) {
      result.push(<Badge className="none" />);
    }

    return result;
  }

  return (
    <div>
      <Title onClick={() => clickHander()}>HOME</Title>
      <HomeBox>
        <PfpImg src={pfp} />
        <LogoutBtn onClick={logoutHandler}>로그아웃</LogoutBtn>
        <MyInfo>
          <MyInfoFont1>{name}</MyInfoFont1>
          <MyInfoFont1 className="id">{id}</MyInfoFont1>
          <MyInfoFont2>{universityName}</MyInfoFont2>
          <MyInfoFont2>{majorName}</MyInfoFont2>
        </MyInfo>
        <Badges>{makeBadges()}</Badges>
      </HomeBox>
    </div>
  );
}

HomeSection.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  badgeIcon: PropTypes.array.isRequired,
  pfp: PropTypes.string.isRequired,
  universityName: PropTypes.string.isRequired,
  majorName: PropTypes.string.isRequired,
};
