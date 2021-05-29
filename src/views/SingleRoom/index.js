import React from 'react';
import RoomHeader from '../../components/organisms/RoomHeader';
import { StyledSingleRoom } from './StyledSingleRoom';

const SingleRoom = ({ location }) => {
  const { name, members, temp, humidity } = location.state;

  return (
    <StyledSingleRoom>
      <RoomHeader
        name={name}
        members={members}
        temp={temp}
        humidity={humidity}
      />
    </StyledSingleRoom>
  );
};

export default SingleRoom;
