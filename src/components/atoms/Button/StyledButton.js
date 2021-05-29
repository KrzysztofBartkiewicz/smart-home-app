import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  ${({ theme, circular }) =>
    circular &&
    css`
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: ${theme.colors.primary};
    `}
`;
