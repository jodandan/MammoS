import styled from 'styled-components';
import { Title } from '../Home';
import logo from '../../assets/Logo.png';
import img1 from './1.png';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomeBox = styled.div`
  display: flex;
  width: 15vw;
  height: 15vw;
  margin-right: 3vw;
  border: 3px solid #b9d967;
  border-radius: 30px 30px 30px 30px;
  justify-content: center;
  background-color: #ecf1e0;
`;

const PfpImg = styled.img.attrs({ alt: '프사' })`
  margin-top: 2vw;
  margin-left: 0vw;
  width: 5vw;
  height: 5vw;
`;

const LogoutBtn = styled.button`
  position: relative;
  background-color: transparent;
  border: none;

  color: gray;
  margin-left: 25%;
  margin-top: 0.5vw;
  margin-bottom: 13.4vw;
  display: flex;
  &:hover {
    border-bottom: 2px solid silver;
  }
`;

const MyInfo = styled.div`
  position: absolute;
  margin-top: 2vw;
  margin-left: 6.5vw;
  height: 3vw;
  width: 6.5vw;
`;

const MyInfoFont1 = styled.p`
  font-weight: bold;
  font-size: 19px;
  margin-top: 1px;
  margin-bottom: -3px;
`;

const MyInfoFont2 = styled.p`
  font-size: 15px;
  margin-bottom: -15px;
`;

const Badges = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top: 9vw;
  width: 14vw;
  height: 4vw;
`;

const Badge = styled.img`
  width: 3.5vw;

  &.center {
    margin-left: 0.75vw;
    margin-right: 0.75vw;
  }
`;

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
