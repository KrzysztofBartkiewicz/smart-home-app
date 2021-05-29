import styled from 'styled-components';

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.l};
`;
