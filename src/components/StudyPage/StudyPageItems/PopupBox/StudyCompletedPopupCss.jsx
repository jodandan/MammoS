import styled from 'styled-components';

export const Box = styled.div`
    width: 100%;
    height: 100%;
`;

export const FirstLine = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
`;

export const SecondLine = styled.div`
    width: 100%;
    height: 40%;
    margin: 0 auto;
    text-align: center;
    color: #000;
    font-family: 'PretendardBold';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: -0.48px;
    vertical-align: center;
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
