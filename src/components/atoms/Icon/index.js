import React from 'react';
import { StyledIcon } from './StyledIcon';

const Icon = ({ children, size, className }) => {
  return (
    <StyledIcon size={size} className={`material-icons ${className}`}>
      {children}
    </StyledIcon>
  );
};

export default Icon;
