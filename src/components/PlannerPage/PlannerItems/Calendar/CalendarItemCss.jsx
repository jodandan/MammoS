import styled from 'styled-components';

export const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  align-items: center;
  height: 35vw;
  margin-left: 2vw;
  margin-right: 2vw;
  border-radius: 40px;
  background-color: white;
  box-shadow: 0px 0px 10px 4px rgba(160, 160, 160, 0.5);
`;

export const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 0fr);
  grid-column-gap: 0px;
  justify-content: center;
`;

export const Day = styled.div`
  display: flex;
  font-weight: bold;
  width: 3.5vw;
  height: 5vw;
  padding-left: 5px;
  padding-top: 5px;
  z-index: 1;
  background-color: transparent;
  color: inherit;
  opacity: ${({ isoutsidemonth }) => (isoutsidemonth ? 0.3 : 1)};
  position: relative;
  &.frame {
    height: 2vw;
    color: ${({ day }) => (day === 'SUN' ? 'red' : 'inherit')};
  }
`;

export const Circle = styled.div`
  height: 1.5vw;
  width: 1.5vw;
  background-color: #c6ef5e;
  border-radius: 50%;
  position: absolute;
  margin-top: -4px;
  margin-left: 9px;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  z-index: 2;
  transform: translateX(-50%);
  display: ${({ isselected }) => (isselected === 'true' ? 'flex' : 'none')};
`;

export const Month = styled.h2`
  text-align: center;
  margin-bottom: -25px;
`;

export const DayFont = styled.p`
  width: 25%;
  text-align: center;
  position: absolute;
  z-index: 3;
  margin-left: 0px;
  margin-top: 0px;
`;

export const ChartBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50%;
  height: 50%;
  width: 100%;
  align-items: baseline;
`;

export const Chart = styled.div`
  display: flex;
  flex-direction: column;
  height: 18%;
  width: 100%;
  margin-bottom: 2px;
  padding-left: 8%;
  background-color: ${(props) =>
    props.isselected === 'true' ? '#90C20D' : 'transparent'};
`;

export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1vw;
  height: 4vw;
  width: 87%;
  border-bottom: 1px solid black;
  margin-bottom: 1vw;
`;

export const Year = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const Title = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
`;

export const PrevMonthBtn = styled.button`
  cursor: pointer;
  height: 2vw;
  width: 2vw;
  background-color: white;
  border: 1px solid #f5fedf;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 1px lightgray;
`;

export const NextMonthBtn = styled.button`
  cursor: pointer;
  height: 2vw;
  width: 2vw;
  background-color: white;
  border: 1px solid #f5fedf;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 1px lightgray;
`;

export const BackgroundColor = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 40px 40px 0px 0px;
  background: linear-gradient(rgba(167, 207, 65, 0.3), #ffffff);
`;
