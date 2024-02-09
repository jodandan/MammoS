import styled from 'styled-components';

export const Box = styled.div`
    width: 100%;
    height: 100%;
`;

export const FirstLine = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;  
`;

export const Title = styled.div`
    color: #000;
    font-family: 'PretendardBold';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
`;

export const SubTitle = styled.div`
    color: #71D721;
    text-align: center;
    font-family: 'PretendardBold';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.4px;
`;

export const ContainerBox = styled.div`
    width: 60%;
    height: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 20px;
`;


export const NameContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    display: flex;
    margin: 0 auto;
    gap: 80px;
`;

export const MemoContainer = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: row;
    display: flex;
    margin: 0 auto;
    gap: 80px;
`;

export const LastContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    display: flex;
    margin: 0 auto;
    gap: 80px;
    padding-top: 20px;
`;

export const NameInput = styled.input`
    width: 50%;
    height: 30%;
    border-width: 0 0 1px;
    outline: none;
    border-color: #000;
`;

export const MemoInput = styled.input`
    width: 70%;
    height: 100%;
    border-radius: 10px;
    border: 1px solid #000;
`;

export const ButtonBox = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
`;

export const ChangeButton = styled.button`
    width: 100px;
    height: 38px;
    color: white;
    font-size: 18px;
    flex-shrink: 0;
    background-color: #ED7070;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;

`;

export const CancelButton = styled.button`
    width: 100px;
    height: 38px;
    color: white;
    font-size: 18px;
    flex-shrink: 0;
    background-color: #82c8a0;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
`;















