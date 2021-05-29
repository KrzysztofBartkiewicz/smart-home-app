import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import MaterialSwitch from '../../atoms/Switch';
import {
  StyledDevicesInfo,
  StyledMembersInfo,
  StyledName,
  StyledRoom,
} from './StyledRoom';

const Room = (props) => {
  const context = useContext(AppContext);
  const { handleRoomToggleOn } = context;

  const { id, name, members, devices, isOn } = props;

  return (
    <StyledRoom
      to={{
        pathname: `room/${name.replace(/\s/g, '')}`,
        state: { ...props },
      }}
    >
      <StyledName>{name}</StyledName>
      <StyledMembersInfo>{members} have access to this room</StyledMembersInfo>
      <StyledDevicesInfo>{devices.length} Devices</StyledDevicesInfo>
      <MaterialSwitch
        isChecked={isOn}
        onChangeFn={(event) => handleRoomToggleOn(event, id)}
      />
    </StyledRoom>
  );
};

export default Room;
