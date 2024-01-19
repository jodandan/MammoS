import styled from 'styled-components';

export const CustomCheckboxContainer = styled.div`
  display: inline-block;
`;

export const CustomCheckboxLabel = styled.label`
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 16px;
`;

export const CustomCheckboxInput = styled.input`
  opacity: 0;
  position: absolute;
`;

export const CustomCheckboxCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
