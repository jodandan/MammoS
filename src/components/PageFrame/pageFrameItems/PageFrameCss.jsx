import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  width: 99vw;
  height: 6.25vh;
  padding-top: 2.8vh;
  padding-bottom: 2.8vh;
`;

export const Title = styled.h1`
  margin-top: 5px;
  padding-right: 6vw;
`;

export const Logos = styled.img`
  height: 48px;
  justify-content: center;
`;

export const NavigationMenus = styled.ul`
  display: flex;
`;

export const NavigationMenu = styled.li`
  padding-right: 5vw;
  list-style: none;
  font-size: 20px;
  font-weight: bold;
`;

export const Background = styled.div`
  display: flex;
  position: relative;
  margin-left: -1vw;
  height: 38.8889vh;
  width: 101vw;
  background: linear-gradient(#e5f1c6, #ffffff);
  justify-content: center;
`;
