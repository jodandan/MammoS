import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 61vw;
  height: 5.5vh;
  padding-top: 2.8vh;
  padding-bottom: 2.8vh;
  margin: 0 auto;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-family: 'PretendardBold';
  font-size: 30px;
  padding-right: 2vw;
`;

export const Logos = styled.img`
  height: 3vw;
  justify-content: center;
`;

export const NavigationMenus = styled.ul`
  display: flex;
  align-items: center;
  white-space: nowrap;
  line-height: 100%;
`;

export const NavigationMenu = styled.li`
  cursor: pointer;
  font-family: 'PretendardBold';
  padding-left: 5.4vw;
  list-style: none;
  font-size: 20px;
  font-weight: bold;
`;

export const Background = styled.div`
  position: relative;
  margin-left: -1vw;
  height: 38.8889vh;
  width: 101vw;
  background: linear-gradient(#e5f1c6, #ffffff);
  justify-content: center;
`;
