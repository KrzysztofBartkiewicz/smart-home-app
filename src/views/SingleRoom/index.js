import React, { useContext } from 'react';
import List from '../../components/organisms/List';
import RoomHeader from '../../components/organisms/RoomHeader';
import Device from '../../components/molecules/Device';
import { StyledSingleRoom } from './StyledSingleRoom';
import AppContext from '../../context/AppContext';

const SingleRoom = ({ location }) => {
  const { id } = location.state;
  const { rooms } = useContext(AppContext);

  const { name, members, temp, humidity, devices, isOn } = rooms.find(
    (room) => room.id === id
  );

  return (
    <StyledSingleRoom>
      <RoomHeader
        id={id}
        name={name}
        members={members}
        temp={temp}
        humidity={humidity}
      />
      <List
        listType="devices"
        listArray={devices}
        component={<Device roomId={id} isRoomOn={isOn} />}
      />
    </StyledSingleRoom>
  );
};

export default SingleRoom;
