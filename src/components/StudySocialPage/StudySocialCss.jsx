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

export const Box = styled.div`
    width: 99.5%;
    height: 40%;
    border-radius: 15px;
    border: 2px solid rgba(167, 207, 65, 0.30);
    background: #FFF;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
    width: 98%;
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    //border: 1px solid blue;
`;

export const LeftSide = styled.div`
    width: 75%;
    color: #000;
    font-family: 'PretendardBold';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.4px;
`;

export const DataBox = styled.div`
    width: 100%;
    color: #000;
    font-family: 'PretendardBold';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.4px;
    text-align: right;
`;

export const LocationBox = styled.div`
    width: 30%;
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
    font-family: 'PretendardBold';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.32px;
`;

export const InputBox = styled.div`
    width: 376px;
    height: 50px;
    background-color: transparent;
    //border: 1px solid blue;
    margin: 0.5rem;
`;

export const LeftBox = styled.div`
    width: 55%;
    height: 60%;
    display: flex;
    flex-direction: column;
`;

export const RightBox = styled.div`
    width: 40%;
    height: 60%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 30px;
`;

export const TitleBox = styled.div`
    width: 80%;
    height: 30px;
    display: flex;
    flex-direction: row;
    padding-top: 20px;  
    padding-left: 100px;
`;

export const MemberListBox = styled.div`
    width: 100%;
    height: 80%;
    padding-top: 30px;
    overflow-y: auto; 
    &::-webkit-scrollbar {
    border-left: 9px solid white;
    border-right: 9px solid white;
    background-color: #b9d967;
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    border-left: 5px solid white;
    border-right: 5px solid white;
    background-color: #b9d967;
    border-radius: 7px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const EditBox = styled.div`
    padding-right: 55%;
`;

export const StudyBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 50%;
    padding-top: 30px;
`;

export const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

`;

export const SearchList = styled.div`
    width: 90%;
    height: 30%;
    border-radius: 15px;
    border: 2px solid rgba(167, 207, 65, 0.30);
    background: #FFF;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const JoinBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

export const JoinList = styled.div`
    width: 99%;
    height: 50%;
    border-radius: 15px;
    border: 2px solid rgba(167, 207, 65, 0.30);
    background: #FFF;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

