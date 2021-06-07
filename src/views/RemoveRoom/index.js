import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import Header from '../../components/molecules/Header';
import List from '../../components/organisms/List';
import MenuRoom from '../../components/molecules/MenuRoom';
import {
  StyledRemoveBtn,
  StyledRemoveRoom,
  StyledRoomsHeading,
  StyledRoomsWrapper,
} from './StyledRemoveRoom';

const RemoveRoom = () => {
  const { rooms, handleRoomsRemove } = useContext(AppContext);
  const [selectedRoomsIds, setSelectedRoomsIds] = useState([]);

  const handleSelect = (roomId) => {
    if (selectedRoomsIds.includes(roomId)) {
      setSelectedRoomsIds((prev) => [...prev.filter((id) => id !== roomId)]);
      return;
    }
    setSelectedRoomsIds((prev) => [...prev, roomId]);
  };

  const handleRemoveClick = () => {
    handleRoomsRemove(selectedRoomsIds);
    setSelectedRoomsIds([]);
  };

  return (
    <StyledRemoveRoom>
      <Header>Remove Room</Header>
      <StyledRoomsWrapper>
        <StyledRoomsHeading headingType="h2">
          {rooms.length !== 0 ? 'Select room to remove' : 'No rooms'}
        </StyledRoomsHeading>
        <List
          listType="rooms"
          listArray={rooms}
          component={
            <MenuRoom onClickFn={handleSelect} selectedArr={selectedRoomsIds} />
          }
        />
        {selectedRoomsIds.length !== 0 ? (
          <StyledRemoveBtn onClickFn={handleRemoveClick}>
            Remove selected
          </StyledRemoveBtn>
        ) : null}
      </StyledRoomsWrapper>
    </StyledRemoveRoom>
  );
};

export default RemoveRoom;
