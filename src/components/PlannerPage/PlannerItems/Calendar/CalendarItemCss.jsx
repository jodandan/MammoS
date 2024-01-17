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
  cursor: ${({ isoutsidemonth }) => (isoutsidemonth ? 'default' : 'pointer')};
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

  border-radius: 10px;
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
  display: ${({ isplanned }) => (isplanned === 'true' ? 'flex' : 'none')};
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
  height: 65%;
  width: 100%;
  align-items: baseline;
`;

export const Chart = styled.div`
  display: flex;
  flex-direction: column;
  height: 14%;
  width: 100%;
  margin-bottom: 4px;
  padding-left: 8%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 2vw;
  width: 2vw;
  background-color: white;
  border: 1px solid #f5fedf;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 1px lightgray;
`;

export const NextMonthBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Today = styled.div`
  position: absolute;
  padding: 0px;
  margin: 0px;
  width: 3.7vw; /* Day의 너비와 동일하게 설정 */
  margin-left: -0.6vw;
  margin-top: -0.5vw;
  height: 5.2vw;
  border: 3px solid #90c20d;
  border-radius: 10px;
  box-shadow: 4px 4px 4px 2px rgba(160, 160, 160, 0.5);
`;

export const TodayFont = styled.p`
  position: absolute;
  font-size: 10px;
  margin-left: 1.4vw;
  margin-top: 0.2vw;
  color: black;
`;
