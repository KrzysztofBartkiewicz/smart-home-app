import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';

export const StyledRoom = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledName = styled(Heading)`
  margin-bottom: 1rem;
`;

export const StyledMembersInfo = styled(Paragraph)`
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export const StyledDevicesInfo = styled(Paragraph)`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;
