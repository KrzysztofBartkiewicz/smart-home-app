import React from 'react';
import { StyledHeading } from './StyledHeading';

const Heading = ({ children, className }) => {
  return <StyledHeading className={className}>{children}</StyledHeading>;
};

export default Heading;
