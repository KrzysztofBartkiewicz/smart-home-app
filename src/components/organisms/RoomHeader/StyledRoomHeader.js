import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';

export const StyledRoomHeader = styled.header`
  padding: 1.5rem;
  border-radius: 0 0 3rem 3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.devices.desktop}) {
    height: 0;
    padding: 0 3rem;
  }
`;

export const StyledHeaderInner = styled.div`
  max-width: 76rem;
  margin: 0 auto;

  @media screen and (min-width: ${({ theme }) => theme.devices.desktop}) {
    text-align: center;
  }
`;

export const StyledBackButton = styled(Button)`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledRoomHeading = styled(Heading)`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledMembersInfo = styled(Paragraph)`
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledRoomConditionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledSettingsBtn = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
`;
