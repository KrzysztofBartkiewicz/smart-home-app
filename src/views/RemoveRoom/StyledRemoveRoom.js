import styled from 'styled-components';
import Button from '../../components/atoms/Button';
import Heading from '../../components/atoms/Heading';

export const StyledRemoveRoom = styled.div``;

export const StyledRoomsWrapper = styled.div`
  max-width: 76rem;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledRoomsHeading = styled(Heading)`
  margin-bottom: 3rem;
`;

export const StyledRemoveBtn = styled(Button)`
  margin-top: 4rem;
`;
