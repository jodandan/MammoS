import styled from 'styled-components';

export const HomeBox = styled.div`
  display: flex;
  width: 15vw;
  height: 15vw;
  margin-right: 3vw;
  border: 3px solid #b9d967;
  border-radius: 30px 30px 30px 30px;
  justify-content: center;
  background-color: #ecf1e0;
`;

export const PfpImg = styled.img.attrs({ alt: '프사' })`
  margin-top: 2vw;
  margin-left: 0vw;
  width: 5vw;
  height: 5vw;
`;

export const LogoutBtn = styled.button`
  position: relative;
  background-color: transparent;
  border: none;

  color: gray;
  margin-left: 25%;
  margin-top: 0.5vw;
  margin-bottom: 13.4vw;
  display: flex;
  &:hover {
    border-bottom: 2px solid silver;
  }
`;

export const MyInfo = styled.div`
  position: absolute;
  margin-top: 2vw;
  margin-left: 6.5vw;
  height: 3vw;
  width: 6.5vw;
`;

export const MyInfoFont1 = styled.p`
  font-weight: bold;
  font-size: 19px;
  margin-top: 1px;
  margin-bottom: -3px;
`;

export const MyInfoFont2 = styled.p`
  font-size: 15px;
  margin-bottom: -15px;
`;

export const Badges = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top: 9vw;
  width: 14vw;
  height: 4vw;
`;

export const Badge = styled.img`
  width: 3.5vw;

  &.center {
    margin-left: 0.75vw;
    margin-right: 0.75vw;
  }
`;
