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

export const UserProject = styled.div`
  border-radius: 5px;
  margin-bottom: 0.4vw;
  height: ${({ ischecked }) => (ischecked === 'true' ? '1.6vw' : '2.5vw')};
  background-color: ${({ ischecked, isvisible }) =>
    ischecked === 'true'
      ? '#454545'
      : isvisible === 'true'
        ? '#90C20D'
        : '#C6EF5E'};
  box-shadow: 0px 3px 3px 0px rgb(0, 0, 0, 0.25);
  display: flex;
  align-items: center;

`;

export const ProjectContent = styled.p`
  font-family: 'PretendardSemiBold';
  margin-left: 0.5vw;

  &.content {
    width: 90%;
    overflow: auto;

    white-space: nowrap;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &.timespent {
    font-size: 13px;
    text-align: right;
  }

  &.time {
    font-weight: bold;
    text-align: right;
    font-size: 18px;
  }

  &.add {
    color: gray;
    margin-left: 20px;
    margin-right: 45%;
  }
`;

export const AddBtn = styled.div`
  cursor: pointer;
  font-family: 'PretendardSemiBold';
  display: flex;
  width: 80px;
  height: 20px;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  background-color: #b3e13e;
  border-radius: 30px;
  box-shadow: 1px 2px 3px 0px rgb(0, 0, 0, 0.25);
`;



