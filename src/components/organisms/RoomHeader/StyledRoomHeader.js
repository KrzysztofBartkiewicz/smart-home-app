import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';
import PopupMenu from '../../molecules/PopupMenu';

export const StyledRoomHeader = styled.header`
  padding: 1.5rem;
  border-radius: 0 0 3rem 3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
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

export const StyledPopupMenu = styled(PopupMenu)`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  right: 1.5rem;
  top: 45%;
`;
