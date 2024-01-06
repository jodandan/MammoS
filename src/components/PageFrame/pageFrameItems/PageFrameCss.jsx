import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 61vw;
  height: 6.25vh;
  padding-top: 2.8vh;
  padding-bottom: 2.8vh;
  margin: 0 auto;
`;

export const Title = styled.h1`
  padding-right: 2vw;
  line-height: 50%;
`;

export const Logos = styled.img`
  height: 3vw;
  justify-content: center;
`;

export const NavigationMenus = styled.ul`
  display: flex;
  white-space: nowrap;
  line-height: 100%;
`;

export const NavigationMenu = styled.li`
  padding-left: 5vw;
  list-style: none;
  font-size: 17px;
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
