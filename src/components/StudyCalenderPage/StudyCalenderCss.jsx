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
`;

export const Img = styled.img`
    width: 41px;
    height: 40px;
    margin: auto;
    display: block;
    padding-top: 5px;
`;

export const Container = styled.div`
    width: 58px;
    height: 57px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 3px solid #A7CF41;
    text-align: center;
    background-color: transparent;
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
`;

export const TextBox = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 20%;
`;


export const StudyTitle = styled.div`
    color: #000;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.96px;
    width: 50%;
    padding-bottom: 2vh;

`;

export const SubText = styled.div`
    color: #646464;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
    width: 75%;
`;

export const SecondLine = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    height: 30%;
`;

export const FirstLine = styled.div`
    width: 98%;
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    //border: 1px solid blue;
`;

export const LeftSide = styled.div`
    width: 100%;
    color: #000;
    font-family: Pretendard Variable;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.4px;
`;

export const DataBox = styled.div`
    width: 100%;
    color: #000;
    font-family: Pretendard Variable;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.4px;
    text-align: right;
`;

export const LocationBox = styled.div`
    width: 30%;
    color: #000;
    font-family: Pretendard Variable;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.32px;
    margin: auto;
    text-align: right;
`;

export const NoticeBox = styled.div`
    width: 100%;
    height: 80%;
    background-color: transparent;
    stroke-width: 4px;
    border-radius: 20px;
    border: 4px solid #A7CF41;
`;

export const Title = styled.div`
    width: 100%;
    color: #000;
    font-family: Pretendard Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.32px;
`;

export const EditBox = styled.div`
    width: 5%;
`;

export const InputBox = styled.div`
    width: 376px;
    height: 50px;
    background-color: transparent;
    //border: 1px solid blue;
    margin: 0.5rem;
`;

export const LeftBox = styled.div`
    width: 70%;
    height: 60%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`;


