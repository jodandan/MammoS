import styled from 'styled-components';
import './reset.css';

export const FrameContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    height: 38.8889vh;
    width: 100%;
    background: linear-gradient(#e5f1c6, #ffffff);
    justify-content: center;
`;

export const SideMenuBar = styled.div`
    position: absolute;
    top: 90%;
    left: 13%;
    width: 12%;
    height: 150%;
    display: flex;
    flex-direction: column;
  align-items: center;
  justify-content: center;
    gap: 4vw;
    z-index: 90;
`;

export const Img = styled.img`
    width: 40px;
    height: 40px;
    margin: auto;
  padding-bottom: 3px;
  padding-top: 3px;
    display: block;
    cursor: pointer;
`;

export const Container = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 15px;
    border: 3px solid #A7CF41;
`;

export const CheckContainer = styled(Container)`
    background: #A7CF41;
`;

export const ContainerBox = styled.div`
    margin: 0 auto;
    height: 150vh;
    width: 60%;
    display: flex;
    flex-direction: column;
    padding-top: 5vh;
  margin-left: 25vw;
    font-family: 'PretendardSemiBold';
`;

export const TextBox = styled.div`
    margin: 0 auto;
  margin-bottom: -4.5vw;
    width: 100%;
    height: 20%;
    font-family: 'PretendardBold';
`;


export const StudyTitle = styled.div`
    color: #000;
    font-size: 48px;
    width: 40vw;
    font-family: 'PretendardBold';
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  margin-bottom: 2vw;
`;

export const SubText = styled.div`
    color: #646464;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
    width: 75%;
    font-family: 'PretendardSemiBold';
`;

export const SecondLine = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    height: 30%;
`;

export const Pagingbox = styled.div`
    position: absolute;
    top: 70%;
    left: 5%;
    width: 90%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`;

export const EditBox = styled.div`
    padding-right: 55%;
`;
