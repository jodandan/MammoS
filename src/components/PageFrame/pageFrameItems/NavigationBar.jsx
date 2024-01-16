import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import {
  NavBar,
  Logos,
  Title,
  NavigationMenus,
  NavigationMenu,
} from './PageFrameCss';

export default function NavigationBar() {
  const navigate = useNavigate();

  return (
    <NavBar>
      <Logos src={logo} alt="맘모스" />
      <Title>MamMos</Title>
      <NavigationMenus>
        <NavigationMenu onClick={() => navigate('/home')}>홈</NavigationMenu>
        <NavigationMenu onClick={() => navigate('/planner')}>
          플래너
        </NavigationMenu>
        <NavigationMenu onClick={() => navigate('/StudyHome')}>
          스터디
        </NavigationMenu>
        <NavigationMenu onClick={() => navigate('/social')}>
          소셜
        </NavigationMenu>
        <NavigationMenu onClick={() => navigate('/challenge')}>
          도전과제
        </NavigationMenu>
        <NavigationMenu onClick={() => navigate('/info')}>
          마이페이지
        </NavigationMenu>
      </NavigationMenus>
    </NavBar>
  );
}
