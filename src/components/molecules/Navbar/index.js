import React from 'react';
import routes from '../../../helpers/routes';
import Icon from '../../atoms/Icon';
import { StyledNavbar, StyledNavLink, StyledRoundLink } from './StyledNavbar';

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavLink exact to={routes.home}>
        <Icon>home</Icon>
      </StyledNavLink>
      <StyledRoundLink to={routes.addRoom}>
        <Icon>add</Icon>
      </StyledRoundLink>
      <StyledRoundLink to={routes.removeRoom}>
        <Icon>remove</Icon>
      </StyledRoundLink>
      <StyledNavLink to={routes.timeSettings}>
        <Icon>schedule</Icon>
      </StyledNavLink>
    </StyledNavbar>
  );
};

export default Navbar;
