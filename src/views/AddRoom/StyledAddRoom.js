import styled from 'styled-components';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';

export const StyledAddRoom = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInputWrapper = styled.div`
  padding: 2rem 3rem;
`;

export const StyledButton = styled(Button)`
  margin-top: 5rem;
  width: 15rem;
`;

export const StyledInput = styled(Input)`
  border: 3px solid ${({ theme }) => theme.colors.primaryLight};
  &:focus {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
