import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const CustomCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 6px;
`;

const CustomCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  font-size: 16px;
  user-select: none;
`;

const CustomCheckboxInput = styled.input`
  position: relative;
  opacity: 0;
  cursor: pointer;
`;

const CustomCheckboxCheckmarkInside = styled.span`
  position: absolute;
  height: 14px;
  width: 14px;
  border: 1px solid transparent; /* 체크 부분의 테두리 스타일 */
  border-radius: 4px;
  background-color: ${(props) =>
    props.checked ? '#90C20D' : 'transparent'}; /* 체크 부분의 배경 색상 */
  display: ${(props) =>
    props.checked ? 'block' : 'none'}; /* 체크될 때만 표시 */
`;

const CustomCheckBox = ({ checked, onChange }) => {
  return (
    <CustomCheckboxContainer checked={checked}>
      <CustomCheckboxLabel>
        <CustomCheckboxInput
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <CustomCheckboxCheckmarkInside checked={checked} />
      </CustomCheckboxLabel>
    </CustomCheckboxContainer>
  );
};

CustomCheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomCheckBox;
