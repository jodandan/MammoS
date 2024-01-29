import styled from 'styled-components';

export const Top = styled.div`
  margin-top: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vw;
`;

export const Tier = styled.img`
  height: 11.5vw;
  width: 10vw;
`;

export const TierInfoBox = styled.div`
  margin-left: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 20vw;
`;

export const TierInfo = styled.p`
  font-size: 18px;
  font-family: 'PretendardSemiBold';

  &.title {
    font-family: 'PretendardBold';
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: 50px;
  }
`;

export const GaugeBox = styled.div`
  margin-top: 15px;
  background: white;
  width: 60%;
  height: 0.5vw;
  border-radius: 20px 20px 20px 20px;
`;

export const Gauge = styled.div`
  background: #b9d967;
  height: 100%;
  width: ${({ percent }) => `${percent}%`};
  border-radius: 20px 20px 20px 20px;
`;

export const BadgeBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  height: 15vw;
  width: 17vw;
`;

export const Badge = styled.img`
  height: 8vw;
  width: 7vw;
  margin-left: 5px;
  margin-right: 5px;
  &.top {
    margin-left: 4vw;
    margin-right: 4vw;
    margin-top: 0px;
    margin-bottom: -2vw;
  }

  &.section {
    margin-left: 2vw;
    margin-right: 2vw;
    margin-bottom: 1vw;
  }

  &.select {
    cursor: pointer;
  }

  &.modal {
    margin-right: 1vw;
    height: 7vw;
    width: 6vw;
  }
`;

export const Bottom = styled.div`
  margin-top: 4vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BadgeLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
  font-family: 'PretendardBold';
  height: 2.5vw;
  width: 8vw;
  border: solid;
  border-radius: 10px 10px 10px 10px;
  border-color: #a7cf41;
  box-shadow: 1px 2px 2px 0px gray;
  background-color: transparent;
  background-color: inherit;
  font-size: 20px;
  margin-top: 4vh;
  margin-bottom: 4vh;
`;

export const BadgeInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BadgeTitle = styled.p`
  cursor: pointer;
  font-family: 'PretendardSemiBold';
  margin-bottom: 2vw;

  &:hover {
    color: #8aae30;
  }
`;

export const ModalContent = styled.p`
  font-family: 'PretendardSemiBold';
  font-size: 20px;
  font-weight: bold;

  &.title {
    font-size: 30px;
    margin-bottom: 10px;
  }

  &.level {
    font-size: 17px;
    margin-bottom: 20px;
  }
`;
