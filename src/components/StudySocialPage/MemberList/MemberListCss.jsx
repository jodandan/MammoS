import styled from 'styled-components';

export const Container = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Box = styled.div`
    width: 100%; 
    border-top: 1px solid #BFBFBF;
    border-bottom: 1px solid #BFBFBF;
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    padding-bottom: 5px;
    font-family: 'PretendardBold';
`;

export const NameAndId = styled.div`
    color: #000;
    font-family: 'PretendardBold';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.32px;
    width: 70%;
`;

export const College = styled(NameAndId)`
    width: 70%;
`;

export const Position = styled(NameAndId)`
    width: 25%;
`;
