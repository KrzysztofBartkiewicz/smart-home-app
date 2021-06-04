import React, { useState, useContext } from 'react';
import AppContext from '../../context/AppContext';
import Input from '../../components/atoms/Input';
import Label from '../../components/atoms/Label';
import {
  StyledAddRoom,
  StyledHeading,
  StyledInputWrapper,
  StyledButton,
} from './StyledAddRoom';

const AddRoom = () => {
  const { handleAddNewRoom } = useContext(AppContext);
  const [inputsValues, setInputsValues] = useState({
    roomName: '',
    membersNo: '',
  });

  const handleChange = (event) => {
    setInputsValues((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddNewRoom(inputsValues);
  };

  return (
    <>
      <StyledHeading headingType="h1">Add new room</StyledHeading>
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
