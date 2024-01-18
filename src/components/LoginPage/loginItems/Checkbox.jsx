import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Checkbox({ text }) {
  return (
    <StyledLabel htmlFor={text}>
      <StyledInput type="checkbox" id={text} name={text} />
      <StyledP>{text}</StyledP>
    </StyledLabel>
  );
}

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Checkbox;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyledInput = styled.input`
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledP = styled.p`
  margin-left: 0.5rem;
`;
