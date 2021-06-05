import React, { useContext, useEffect, useState } from 'react';
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
  const [roomsToRemove, setRoomsToRemove] = useState([]);

  useEffect(() => {
    setRoomsToRemove([
      ...rooms.map(({ name, id }) => ({
        name,
        id,
        isSelected: false,
      })),
    ]);
  }, [rooms]);

  const handleSelect = (id) => {
    const mappedRooms = roomsToRemove.map((room) => {
      if (room.id === id) {
        return {
          ...room,
          isSelected: !room.isSelected,
        };
      }
      return room;
    });
    setRoomsToRemove([...mappedRooms]);
  };

  const handleRemoveClick = () => {
    const roomsIdsArr = roomsToRemove.reduce((idsArr, room) => {
      if (room.isSelected) {
        idsArr.push(room.id);
      }
      return idsArr;
    }, []);

    handleRoomsRemove(roomsIdsArr);
  };

  return (
    <StyledRemoveRoom>
      <Header>Remove Room</Header>
      <StyledRoomsWrapper>
        <StyledRoomsHeading headingType="h2">
          {roomsToRemove.length !== 0 ? 'Select room to remove' : 'No rooms'}
        </StyledRoomsHeading>
        <List
          listType="rooms"
          listArray={roomsToRemove}
          component={<MenuRoom onClickFn={handleSelect} />}
        />
        {roomsToRemove.some((room) => room.isSelected === true) ? (
          <StyledRemoveBtn onClickFn={handleRemoveClick}>
            Remove selected
          </StyledRemoveBtn>
        ) : null}
      </StyledRoomsWrapper>
    </StyledRemoveRoom>
  );
};

export default RemoveRoom;
