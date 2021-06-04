import styled from 'styled-components';
import Heading from '../../components/atoms/Heading';
import Button from '../../components/atoms/Button';

export const StyledAddRoom = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeading = styled(Heading)`
  padding: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  border-radius: 0 0 3rem 3rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const StyledInputWrapper = styled.div`
  padding: 2rem 3rem;
`;

export const StyledButton = styled(Button)`
  margin-top: 5rem;
  margin-left: 3rem;
`;
