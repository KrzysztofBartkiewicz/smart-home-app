import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 1rem 2rem;
  max-width: 30rem;
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  outline: none;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;
