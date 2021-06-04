import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  ${({ theme, text }) =>
    text &&
    css`
      width: auto;
      height: auto;
      padding: 1rem 3rem;
      border-radius: 2rem;
      color: ${theme.colors.white};
    `}
  ${({ icon, text }) =>
    icon &&
    !text &&
    css`
      background: transparent;
    `}
`;
