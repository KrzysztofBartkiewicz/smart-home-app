import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 7rem;
  position: fixed;
  bottom: 0;
  border-radius: 2rem 2rem 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: ${({ theme }) => theme.devices.tablet}) {
    max-width: 80rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.devices.desktop}) {
    position: static;
    transform: translateX(0);

    margin: 0 auto;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledRoundLink = styled(NavLink)`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
