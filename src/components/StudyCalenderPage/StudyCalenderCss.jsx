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
    cursor: pointer;
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
    font-family: 'PretendardBold';
`;


export const StudyTitle = styled.div`
    color: #000;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.96px;
    width: 40vw;
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

export const FirstLine = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem;
    //border: 1px solid blue;
`;

export const LeftSide = styled.div`
    width: 60%;
    color: #000;
    font-family: 'PretendardBold';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.4px;
`;

export const DataandPlaceBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    padding-top: 15px;
    text-align: center;
    margin-left: 10px;
`;

export const DataBox = styled.div`
    width: 75%;
    color: #000;
    font-family: 'PretendardBold';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.4px;
    text-align: left;
`;

export const LocationBox = styled.div`
    width: 100%;
    color: #000;
    font-family: 'PretendardBold';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.32px;
    margin: auto;
    text-align: right;
`;

export const NoticeBox = styled.div`
    width: 95%;
    height: 80%;
    border-top: 1px solid #858585;
    border-bottom: 1px solid #858585;
    margin-left: 10px;
`;

export const EditBox = styled.div`
`;

export const InputBox = styled.div`
    width: 376px;
    height: 50px;
    background-color: transparent;
    //border: 1px solid blue;
    margin: 0.5rem;
    color: #000;
    font-family: 'PretendardBold';
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.28px;
`;

export const NoticeContainer = styled.div`
    width: 95%;
    height: 48%;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    border: 2px solid rgba(167, 207, 65, 0.30);
    background: #FFF;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const RightBox = styled.div`
    width: 40%;
    height: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
`;

export const MemberBox = styled.div`
    width: 100%;
    height: 50%;
    padding-top: 20px;
`;

export const Title = styled.div`
    color: #000;
    font-family: 'PretendardBold';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.4px;
    padding-bottom: 20px;
`;

export const Edit = styled.div`
    padding-right: 55%;
`;





