import styled from 'styled-components';
import Label from '../../components/atoms/Label';

export const StyledTimeSettings = styled.div``;

export const StyledSettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSetting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledMinutes = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const StyledLabel = styled(Label)`
  margin-bottom: 1rem;
  text-align: center;
`;
