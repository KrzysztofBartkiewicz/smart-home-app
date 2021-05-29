import React from 'react';
import Icon from '../Icon';
import { StyledButton } from './StyledButton';

const Button = ({ icon, onClickFn, className }) => {
  return (
    <StyledButton icon={icon} className={className} onClick={onClickFn}>
      <Icon>{icon}</Icon>
    </StyledButton>
  );
};

export default Button;
