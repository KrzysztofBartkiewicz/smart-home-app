import React from 'react';
import { StyledLabel } from './StyledLabel';

const Label = ({ children, className }) => {
  return <StyledLabel className={className}>{children}</StyledLabel>;
};

export default Label;
