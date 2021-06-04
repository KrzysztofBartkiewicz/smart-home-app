import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import routes from '../../helpers/routes';
import AppContext from '../../context/AppContext';
import Input from '../../components/atoms/Input';
import Label from '../../components/atoms/Label';
import {
  StyledAddRoom,
  StyledInputWrapper,
  StyledButton,
} from './StyledAddRoom';
import Header from '../../components/molecules/Header';

const AddRoom = () => {
  const { handleAddNewRoom } = useContext(AppContext);
  const [inputsValues, setInputsValues] = useState({
    roomName: '',
    membersNo: '',
  });
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleChange = (event) => {
    setInputsValues((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddNewRoom(inputsValues);
    setRedirectToHome(true);
  };

  return (
    <>
      {redirectToHome ? <Redirect to={routes.home} /> : null}
      <Header>Add New Room</Header>
      <StyledAddRoom onSubmit={handleSubmit}>
        <StyledInputWrapper>
          <Label>
            Room name:
            <Input
              id="roomName"
              value={inputsValues.roomName}
              onChangeFn={handleChange}
              isRequired
            />
          </Label>
        </StyledInputWrapper>
        <StyledInputWrapper>
          <Label>
            Number of members:
            <Input
              type="number"
              id="membersNo"
              value={inputsValues.membersNo}
              onChangeFn={handleChange}
              isRequired
            />
          </Label>
        </StyledInputWrapper>
        <StyledButton type="submit">Add</StyledButton>
      </StyledAddRoom>
    </>
  );
};

export default AddRoom;
