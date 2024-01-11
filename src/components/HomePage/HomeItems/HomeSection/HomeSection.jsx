import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

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

  return (
    <div>
      <Title onClick={() => clickHander()}>HOME</Title>
      <HomeBox>
        <PfpImg src={pfp} />
        <LogoutBtn>로그아웃</LogoutBtn>
        <MyInfo>
          <MyInfoFont1>{name}</MyInfoFont1>
          <MyInfoFont1>{id}</MyInfoFont1>
          <MyInfoFont2>{universityName}</MyInfoFont2>
          <MyInfoFont2>{majorName}</MyInfoFont2>
        </MyInfo>
        <Badges>
          {badgeIcon.map((badge) => (
            <Badge key={badge} src={badge} />
          ))}
          {/* <Badge />
          <Badge className="center" />
          <Badge /> */}
        </Badges>
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
