import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Left = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2vw;
  margin-right: 1.5vw;
  height: 25vw;
  width: 13vw;
`;

export const Right = styled.div`
  margin-top: 2vw;
  margin-left: 1.5vw;
  height: 20vw;
  width: 30vw;
`;

export const Pfp = styled.img`
  height: 10vw;
  width: 10vw;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px 3px rgba(160, 160, 160, 0.5);
`;

export const Id = styled.p`
  margin-top: 35px;
  font-family: 'PretendardBold';
  font-size: 30px;
`;

export const Account = styled.p`
  cursor: pointer;
  font-family: 'PretendardBold';
  font-size: 15px;
  margin-top: 20px;

  &:hover {
    border-bottom: 1px solid black;
  }
`;

export const Logout = styled.p`
  cursor: pointer;
  font-family: 'PretendardBold';
  font-size: 15px;
  margin-top: 20px;

  &:hover {
    border-bottom: 1px solid black;
  }
`;

export const Info = styled.div`
  border: 2px solid black;
  border-radius: 20px;
  height: 12vw;
  width: 30vw;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  height: 3vw;
`;

export const Title = styled.p`
  font-family: 'PretendardSemiBold';
  font-size: 15px;
  width: 95%;
  color: #a6a6a6;
`;

export const ModifyBtn = styled.p`
  font-family: 'PretendardSemiBold';
  font-size: 15px;
  text-align: right;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid black;
  }
`;

export const Name = styled.p`
  font-family: 'PretendardBold';
  margin-left: 1.5vw;
  font-size: 30px;
`;

export const University = styled.p`
  font-family: 'PretendardSemiBold';
  margin-top: 1.5vw;
  margin-left: 1.5vw;
  font-size: 20px;
`;

export const College = styled.p`
  font-family: 'PretendardSemiBold';
  margin-top: 0.3vw;
  margin-left: 1.5vw;
  font-size: 20px;
`;

export const Email = styled.p`
  font-family: 'PretendardSemiBold';
  margin-top: 1vw;
  margin-left: 1.5vw;
  font-size: 20px;
`;

export const Setting = styled.div`
  border: 2px solid black;
  border-radius: 20px;
  height: 6vw;
  width: 30vw;
  margin-top: 2vw;
`;

export const Bottom = styled.div`
  padding-top: 0vw;
  display: flex;
  align-items: center;
  height: 2vw;
`;

export const Public = styled.p`
  font-family: 'PretendardSemiBold';
  width: 79%;
  margin-left: 1.5vw;
  font-size: 20px;
`;

export const SwitchFrame = styled.div`
  cursor: pointer;
  display: flex;
  padding-left: 3px;
  padding-right: 3px;
  align-items: center;
  border-radius: 100px;
  height: 1.5vw;
  width: 3vw;
  background-color: ${(props) =>
    props.ispublic === 'true' ? '#90C20D' : '#d9d9d9'};

  & > p {
    text-align: ${(props) => (props.ispublic === 'true' ? 'right' : 'left')};
  }
`;

export const Switch = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 50%;
  height: 1.2vw;
  width: 1.2vw;
  transition: transform 0.3s ease-in-out; // 트랜지션 추가
  transform: translateX(${(props) => (props.isOn ? '0%' : '150%')});
`;

export const OnOff = styled.p`
  position: relative;
  width: 90%;
  font-size: 13px;
  font-family: 'PretendardSemiBold';
  color: white;

  &.on {
    margin-right: 10px;
  }
  &.off {
    margin-left: 5px;
  }
`;

export const Circle = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #b9d967;
  border-radius: 50%;
  right: 6%;
  bottom: 57%;
  height: 2vw;
  width: 2vw;
  box-shadow: 0px 2px 3px 1px rgba(160, 160, 160, 0.5);
`;

export const UserInput = styled.input`
  font-family: 'PretendardSemiBold';
  border: none;
  border-bottom: 1px solid black;
  margin-left: 30px;
  font-size: 20px;
  width: 150px;
  padding-bottom: 4px;
  text-align: center;
`;

export const ModalContent = styled.p`
  font-family: 'PretendardSemiBold';
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const UserSelect = styled.select`
  font-family: 'PretendardSemiBold';
  border: none;
  border-bottom: 1px solid black;
  width: 170px;
  margin-left: 30px;
  text-align: center;
  font-size: 20px;
`;
