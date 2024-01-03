import styled from 'styled-components';
import logo from './HomeItems/Logo.png';

const NavigationBar = styled.div`
  display: flex;
  justify-content: center;
  width: 99vw;
  height: 6.25vh;
  padding-top: 2.8vh;
  padding-bottom: 2.8vh;
`;

const Title = styled.h1`
  margin-top: 5px;
  padding-right: 6vw;
`;

const Logos = styled.img`
  height: 48px;
  justify-content: center;
`;

const NavigationMenus = styled.ul`
  display: flex;
`;

const NavigationMenu = styled.li`
  padding-right: 5vw;
  list-style: none;
  font-size: 20px;
  font-weight: bold;
`;

const Background = styled.div`
  margin-left: -5vw;
  background-color: red;
  height: 38.8889vh;
  width: 110vw;
  background: linear-gradient(#e5f1c6, #ffffff);
`;

export default function Home() {
  return (
    <>
      <NavigationBar>
        <Logos src={logo} alt="맘모스" />
        <Title>MamMos</Title>
        <NavigationMenus>
          <NavigationMenu>홈</NavigationMenu>
          <NavigationMenu>플래너</NavigationMenu>
          <NavigationMenu>스터디</NavigationMenu>
          <NavigationMenu>소셜</NavigationMenu>
          <NavigationMenu>도전과제</NavigationMenu>
          <NavigationMenu>마이페이지</NavigationMenu>
        </NavigationMenus>
      </NavigationBar>
      <Background></Background>
    </>
  );
}
