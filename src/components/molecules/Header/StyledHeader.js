import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import Paragraph from '../../atoms/Paragraph';

export const StyledHeader = styled.header`
  padding: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  border-radius: 0 0 3rem 3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
`;

export const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  left: 3rem;
  top: 2.7rem;
`;

export const StyledSubHeading = styled(Paragraph)`
  margin-top: 0.7rem;
  color: ${({ theme }) => theme.colors.white};
`;
