import styled from 'styled-components';

export const StyledIcon = styled.span`
  color: inherit;
  font-size: ${({ theme, size }) => {
    const fontSize = theme.fontSizes.icons;
    switch (size) {
      case 's':
        return fontSize.s;
      case 'xl':
        return fontSize.xl;
      case 'xxl':
        return fontSize.xxl;
      default:
        return fontSize.l;
    }
  }};
`;
