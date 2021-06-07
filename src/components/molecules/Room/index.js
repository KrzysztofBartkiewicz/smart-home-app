import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import MaterialSwitch from '../../atoms/Switch';
import {
  StyledDevicesInfo,
  StyledMembersInfo,
  StyledName,
  StyledRoom,
} from './StyledRoom';

const Room = ({ id, name, members, devices, isOn }) => {
  const { handleRoomToggleOn } = useContext(AppContext);

  return (
    <StyledRoom
      to={{
        pathname: `/rooms/${name.replace(/\s/g, '')}`,
        state: { id },
      }}
    >
      <StyledName>{name}</StyledName>
      <StyledMembersInfo>
        {members}{' '}
        {members === 0
          ? 'no members'
          : members === 1
          ? 'member has access to this room'
          : 'members have access to this room'}
      </StyledMembersInfo>
      <StyledDevicesInfo>{devices.length} Devices</StyledDevicesInfo>
      <MaterialSwitch
        isChecked={isOn}
        onChangeFn={(event) => handleRoomToggleOn(event, id)}
      />
    </StyledRoom>
  );
};

export default Room;
