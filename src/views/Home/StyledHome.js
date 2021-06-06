import styled from 'styled-components';
import Heading from '../../components/atoms/Heading';
import Paragraph from '../../components/atoms/Paragraph';

export const StyledHome = styled.div`
  min-height: 100vh;
  padding: 1rem 1rem 10rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const StyledHomeWrapper = styled.div`
  max-width: ${({ theme }) => theme.devices.tablet};
  margin: 0 auto;
`;

export const StyledUser = styled.div`
  padding: 1rem 0 4rem 3rem;
`;

export const StyledUserAvatar = styled.img`
  margin-bottom: 1rem;
  max-width: 8rem;
  border-radius: 50%;
`;

export const StyledUserName = styled(Heading)`
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.big};
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledUserInvitation = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.white};
`;
