import styled, { css } from 'styled-components';
import Heading from '../../atoms/Heading';
import Icon from '../../atoms/Icon';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';

export const StyledDevice = styled.div`
  max-width: 76rem;
  margin: 0 auto;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledTopWrapper = styled.div`
  padding: 1rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledDeviceWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const StyledExpandBtn = styled(Button)`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledSettingsWrapper = styled.div`
  max-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition: max-height 0.3s, padding-bottom 0.3s;

  ${({ isVisible }) =>
    isVisible &&
    css`
      max-height: 50rem;
      padding-bottom: 1rem;
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
