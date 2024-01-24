import styled, { keyframes } from 'styled-components';

const modalShow = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  } to {
    opacity: 1;
    margin-top: 0;
  }
`;

const modalBgShow = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & .openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: ${modalBgShow} 0.3s;
  }
`;

export const Button = styled.button`
  font-family: 'PretendardSemiBold';
  outline: none;
  cursor: pointer;
  border: 3px solid #92c414;
  border-radius: 10px;
  width: 110px;
  height: 30px;
  background-color: transparent;
  font-size: 15px;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 5px;
`;

export const Section = styled.section`
  width: 600px;
  height: 400px;
  margin: 0 auto;
  border-radius: 25px;
  border: 3px solid #92c414;
  background-color: #fff;
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: ${modalShow} 0.3s;
  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  position: relative;
  padding: 16px 0px 13px 16px;
  margin-left: 25px;
  margin-right: 25px;
  font-family: 'PretendardSemiBold';
  font-size: 20px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-left: 40px;
  margin-right: 40px;
  padding-top: 2vw;
  padding-bottom: 2vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  border-top: 3px solid #92c414;
  border-bottom: 3px solid #92c414;
`;

export const Footer = styled.footer`
  padding: 12px 16px;
  text-align: center;
`;

export const Tab = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  height: 1.7vw;
  width: 100px;
  margin-bottom: -1vw;
  color: ${(props) => (props.isselected === 'true' ? 'white' : 'black')};
  border-top: 3px solid #92c414;
  border-left: 3px solid #92c414;
  border-right: 3px solid #92c414;
  border-radius: 10px 10px 0px 0px;

  background-color: ${(props) =>
    props.isselected === 'true' ? '#90C20D' : 'transparent'};
  &.name {
    margin-left: 5vw;
  }
`;
