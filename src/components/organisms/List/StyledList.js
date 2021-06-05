import styled, { css } from 'styled-components';

export const StyledList = styled.ul`
  ${({ listType }) =>
    listType === 'devices' &&
    css`
      display: block;
      padding: 2.5rem 1.5rem;
    `}

  ${({ listType }) =>
    listType === 'rooms' &&
    css`
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
    `}
`;

export const StyledListItem = styled.li`
  ${({ listType }) =>
    listType === 'devices' &&
    css`
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    `}
`;
