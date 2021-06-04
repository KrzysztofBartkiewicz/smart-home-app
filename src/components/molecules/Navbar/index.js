import React from 'react';
import routes from '../../../helpers/routes';
import Icon from '../../atoms/Icon';
import { StyledNavbar, StyledAddLink, StyledNavLink } from './StyledNavbar';

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavLink exact to={routes.home}>
        <Icon>home</Icon>
      </StyledNavLink>
      <StyledNavLink to={routes.home}>
        <Icon>schedule</Icon>
      </StyledNavLink>
      <StyledAddLink to={routes.addRoom}>
        <Icon>add</Icon>
      </StyledAddLink>
      <StyledNavLink to={routes.home}>
        <Icon>wifi</Icon>
      </StyledNavLink>
      <StyledNavLink to={routes.home}>
        <Icon>settings</Icon>
      </StyledNavLink>
    </StyledNavbar>
  );
};

export default Navbar;
