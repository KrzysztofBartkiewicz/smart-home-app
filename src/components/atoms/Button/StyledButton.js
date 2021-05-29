import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
`;
