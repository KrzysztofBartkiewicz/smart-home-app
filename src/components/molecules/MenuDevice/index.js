import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import {
  StyledMenuDevice,
  StyledIcon,
  StyledHeading,
  StyledButton,
} from './StyledMenuDevice';

const MenuDevice = ({ icon, name, roomId }) => {
  const { rooms, handleRoomDeviceAddRemove } = useContext(AppContext);

  const isDeviceInRoom = rooms
    .find((room) => room.id === roomId)
    .devices.some((device) => device.name === name);

  return (
    <StyledMenuDevice>
      <StyledIcon>{icon}</StyledIcon>
      <StyledHeading>{name}</StyledHeading>
      <StyledButton
        onClickFn={
          isDeviceInRoom
            ? () => handleRoomDeviceAddRemove(name, roomId, 'remove')
            : () => handleRoomDeviceAddRemove(name, roomId, 'add')
        }
        icon={isDeviceInRoom ? 'remove' : 'add'}
      />
    </StyledMenuDevice>
  );
};

export default MenuDevice;
