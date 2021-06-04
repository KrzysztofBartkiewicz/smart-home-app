import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  StyledHeader,
  StyledButton,
  StyledHeading,
  StyledSubHeading,
} from './StyledHeader';

const Header = ({ children, subHeading }) => {
  const { goBack } = useHistory();

  return (
    <StyledHeader>
      <StyledButton onClickFn={goBack} icon="arrow_back" />
      <StyledHeading headingType="h1">{children}</StyledHeading>
      <StyledSubHeading>{subHeading}</StyledSubHeading>
    </StyledHeader>
  );
};

export default Header;
