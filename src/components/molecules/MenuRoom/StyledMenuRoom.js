import styled, { css } from 'styled-components';
import Heading from '../../atoms/Heading';

export const StyledMenuRoom = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 3rem;
  cursor: pointer;
  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      background-color: ${theme.colors.primary};
    `}
`;

export const StyledRoomName = styled(Heading)`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      color: ${theme.colors.white};
    `}
`;
