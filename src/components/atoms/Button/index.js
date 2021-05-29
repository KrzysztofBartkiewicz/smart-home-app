import React from 'react';
import { StyledButton } from './StyledButton';

const Button = ({ icon, circular, onClickFn }) => {
  return (
    <StyledButton icon={icon} circular={circular} onClick={onClickFn}>
      {icon}
    </StyledButton>
  );
};

export default Button;
