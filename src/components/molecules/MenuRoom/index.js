import React from 'react';
import { StyledMenuRoom, StyledRoomName } from './StyledMenuRoom';

const MenuRoom = ({ name, id, selectedArr, onClickFn }) => {
  const isSelected = selectedArr.includes(id);
  return (
    <StyledMenuRoom isSelected={isSelected} onClick={() => onClickFn(id)}>
      <StyledRoomName isSelected={isSelected} headingType="h2">
        {name}
      </StyledRoomName>
    </StyledMenuRoom>
  );
};

export default MenuRoom;
