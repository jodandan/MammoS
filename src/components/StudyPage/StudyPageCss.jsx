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
    top: 50%;
    left: 13%;
    width: 5%;
    height: 150%;
    display: flex;
    flex-direction: column;
    //border: 1px solid red;
    gap: 50px;
    z-index: 99;
`;

export const Img = styled.img`
    width: 41px;
    height: 40px;
    margin: auto;
    display: block;
    padding-top: 5px;
    cursor: pointer;
`;

export const Container = styled.div`
    width: 58px;
    height: 57px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 3px solid #A7CF41;
    text-align: center;
`;

export const CheckContainer = styled(Container)`
    background: #A7CF41;
`;

export const ContainerBox = styled.div`
    border: 1px solid black; //이거 지울 시 가로 스크롤 사라짐
    margin: 0 auto;
    height: 150vh;
    width: 60%;
    display: flex;
    flex-direction: column;
    padding-top: 5vh;
    font-family: 'PretendardBold';
`;

export const TextBox = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 20%;
    font-family: 'PretendardBold';
`;


export const StudyTitle = styled.div`
    color: #000;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.96px;
    width: 30%;
    padding-bottom: 2vh;
    font-family: 'PretendardBold';
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const SubText = styled.div`
    color: #646464;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
    width: 75%;
    font-family: 'PretendardBold';
`;

export const SecondLine = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    height: 30%;
`;

export const Pagingbox = styled.div`
    position: absolute;
    top: 50%;
    left: 3%;
    width: 90%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`;

export const EditBox = styled.div`
    width: 5%;
    height: 1%;
    position: absolute;
    top: 5%;
    left: 38%;
`;
