import React from 'react';
import { StyledIcon } from './StyledIcon';

const Icon = ({ children, size }) => {
  return (
    <StyledIcon size={size} className="material-icons">
      {children}
    </StyledIcon>
  );
};

export default Icon;
