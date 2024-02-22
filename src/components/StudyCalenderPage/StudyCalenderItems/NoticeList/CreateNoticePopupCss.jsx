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
    height: 10%;
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

export const ContainerBox = styled.div`
    width: 60%;
    height: 80%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

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
export const MemoInput = styled.input`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 2px solid #A7CF41;
    outline: none;
    &::placeholder { 
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
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

export const Border = styled.div`
    width: 100%;
    border-bottom: 2px solid #A7CF41;
`;

export const InputBox = styled.div`
    width: 200%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 40px;
    padding-bottom: 50px;
    padding-top: 60px;
`;

export const SubTitleBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const TitleInput = styled.input`
    width: 30%;
    height: 100%;
    border-radius: 10px;
    border: 2px solid #A7CF41;
    outline: none;
    &::placeholder { 
        font-family: 'PretendardBold';
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;
export const DataInput = styled.input`
    width: 30%;
    height: 100%;
    border-radius: 10px;
    border: 2px solid #A7CF41;
    outline: none;
    
    &::placeholder { 
        font-family: 'PretendardBold';
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;
export const PlaceInput = styled.input`
    width: 30%;
    height: 100%;
    border-radius: 10px;
    border: 2px solid #A7CF41;
    outline: none;
    &::placeholder { 
        font-family: 'PretendardBold';
        font-size: 12px;
        font-style: normal;
        line-height: normal;
    }
`;




