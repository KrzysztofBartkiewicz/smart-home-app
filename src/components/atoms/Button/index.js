import React from 'react';
import Icon from '../Icon';
import { StyledButton } from './StyledButton';

const Button = ({ icon, onClickFn, className, children, type }) => {
  return (
    <StyledButton
      type={type}
      icon={icon}
      className={className}
      onClick={onClickFn}
      text={children}
    >
      <Icon>{icon}</Icon>
      {children}
    </StyledButton>
  );
};

export default Button;
