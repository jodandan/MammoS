import styled from 'styled-components';

export const FrameContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    height: 38.8889vh;
    width: 100%;
    background: linear-gradient(#e5f1c6, #ffffff);
    justify-content: center;
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



export const Text = styled.div`
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.96px;
    font-family: 'PretendardBold';
`;

export const MiddleText = styled(Text)`
    width: 10%;
    margin: 0 0 0 auto;

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

export const EditBox = styled.div`
    padding-right: 55%;
`;


export const PromotionBox = styled.div`
    width: 100%;
    height: 70%;
`;

export const FirstLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 5%;
    padding-bottom: 20px;
`;

export const SecondLine = styled.div`
    width: 100%;
    height: 10%;
    text-align: center;
    padding-bottom: 20px;
`;


export const Searchbox = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #CCC;
    color: #555;
    box-sizing: border-box;
    font-size: 18px;
    height: 50px;
    width: 80%;
    margin: 0 auto;

    &:focus {
        outline: none;  
    }
    &::-webkit-input-placeholder {
        color: #AAA;
        font-size: 14px;
    }  
`;

export const ThirdLine = styled.div`
    width: 99%;
    height: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding-left: 5px;
    overflow: hidden;
`;


export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
`;

export const PaginationButton = styled.button`
    margin: 0 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const PageNumber = styled.span`
    margin: 0 10px;
    font-size: 16px;
`;

export const PageButton = styled.button`
    margin: 0 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const ItemContainer = styled.div`
  width: 90%;
  height: 80%;
  background-color: #A7CF41;
  margin: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

export const First = styled.div`
  width: 100%;
  height: 10%;
  margin: 10px;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
  width: 75%;
  font-family: 'PretendardBold';
`;

export const Second = styled.div`
  width: 100%;
  height: 50%;
  margin: 10px;
`;

export const Third = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  font-family: 'PretendardBold';
  font-size: 16px;
`;

export const ButtonBox = styled.div`
  width: 20%;
  height: 10%;
  margin: 0 auto;
  padding-top: 30px;
`;

export const CreateStudyButton = styled.div`
    height: 50%;
    border: 5px solid #A7CF41;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
    font-family: 'PretendardBold';
    border-radius: 15px;
    cursor: pointer;
`;



