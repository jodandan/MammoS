import styled from 'styled-components';


const ChangeButton = styled.button`
  border: none;
  background-color: #B9D967;
  cursor: pointer;
  width: 15vw;
  height: 3.2vw;
  border-radius: 10px;
  letter-spacing: -2px;
  font-size: 1.2vw;
  font-weight: bold;
  text-align: center;
  &:hover {
    opacity: 0.6; // 마우스 오버시 버튼 투명도 변경
  }
`;

export default function SelectSection() {
    return (
        <ChangeButton>변경</ChangeButton>
    );
}