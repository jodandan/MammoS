import styled from 'styled-components';

export const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ecf1e0;
  width: 29vw;
  height: 29.5vw;
  border: 3px solid #b9d967;
  border-radius: 30px 30px 30px 30px;
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
  height: 4.3vw;
  padding-left: 5px;
  padding-top: 5px;
  z-index: 1;
  background-color: transparent;
  color: inherit;
  opacity: ${({ isOutsideMonth }) => (isOutsideMonth ? 0.3 : 1)};
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
  display: ${({ isSelected }) => (isSelected ? 'flex' : 'none')};
`;

export const Month = styled.h2`
  text-align: right;
  padding-right: 2vw;
  margin-bottom: 1vw;
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
    props.isSelected ? '#90C20D' : 'transparent'};
`;
