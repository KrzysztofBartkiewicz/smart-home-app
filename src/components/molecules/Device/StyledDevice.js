import styled, { css } from 'styled-components';
import Heading from '../../atoms/Heading';
import Icon from '../../atoms/Icon';
import Paragraph from '../../atoms/Paragraph';

export const StyledDevice = styled.div`
  padding: 2rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledDeviceWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSettingsWrapper = styled.div`
  max-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition: max-height 0.7s ease;

  ${({ isVisible }) =>
    isVisible &&
    css`
      max-height: 50rem;
    `}
`;

export const StyledIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.fontSizes.icons.xxl};
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledInnerWrapper = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

export const StyledHeading = styled(Heading)``;

export const StyledParagraph = styled(Paragraph)``;
