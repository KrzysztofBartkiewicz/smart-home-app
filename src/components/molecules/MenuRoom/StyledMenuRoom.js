import styled, { css } from 'styled-components';
import Heading from '../../atoms/Heading';

export const StyledMenuRoom = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  cursor: pointer;
  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      background-color: ${theme.colors.primary};
      border: 3px solid ${theme.colors.red};
    `}
`;

export const StyledRoomName = styled(Heading)`
  color: ${({ theme }) => theme.colors.white};
`;
