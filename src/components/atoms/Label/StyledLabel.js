import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes.l};
  & > *:first-child {
    margin-top: 0.7rem;
  }
`;
