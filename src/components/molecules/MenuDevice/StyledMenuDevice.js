import styled from 'styled-components';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Icon from '../../atoms/Icon';

export const StyledMenuDevice = styled.div`
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledHeading = styled(Heading)`
  flex-grow: 1;
  margin-left: 3rem;
`;

export const StyledButton = styled(Button)`
  color: ${({ icon, theme }) =>
    icon === 'remove' ? `${theme.colors.red}` : `${theme.colors.green}`};
`;
