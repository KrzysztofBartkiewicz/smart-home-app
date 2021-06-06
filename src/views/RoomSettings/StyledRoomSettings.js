import styled, { css } from 'styled-components';
import Heading from '../../components/atoms/Heading';
import MaterialSwitch from '../../components/atoms/Switch';

export const StyledRoomSettigs = styled.div``;

export const StyledHeading = styled(Heading)``;

export const StyledDevicesHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSettingWrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 2rem;
`;

export const StyledListWrapper = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s;

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      max-height: 500rem;
    `}
`;

export const StyledMaterialSwitch = styled(MaterialSwitch)`
  margin-top: 2rem;
`;
