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
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledAddLink = styled(NavLink)`
  border-radius: 50%;
  padding: 0.8rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
`;
