import styled from 'styled-components';
import Icon from '../../atoms/Icon';
import Paragraph from '../../atoms/Paragraph';

export const StyledRoomCondition = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledIconWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f99c66;
`;

export const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
`;

export const StyledWrapper = styled.div`
  margin-left: 1rem;
`;

export const StyledValue = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.6rem;
`;

export const StyledName = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;
