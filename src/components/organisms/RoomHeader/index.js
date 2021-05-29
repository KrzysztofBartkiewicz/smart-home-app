import React from 'react';
import RoomCondition from '../../molecules/RoomCodition';
import {
  StyledMembersInfo,
  StyledRoomConditionsWrapper,
  StyledRoomHeader,
  StyledRoomHeading,
  StyledPopupMenu,
  StyledBackButton,
} from './StyledRoomHeader';

const RoomHeader = ({ name, members, temp, humidity }) => {
  const temperature = (
    <>
      {temp}
      <span>&deg;</span>C
    </>
  );

  return (
    <StyledRoomHeader>
      <StyledBackButton icon="arrow_back" />
      <StyledRoomHeading headingType="h1">{name}</StyledRoomHeading>
      <StyledMembersInfo>
        {members} members have access to this room
      </StyledMembersInfo>
      <StyledRoomConditionsWrapper>
        <RoomCondition
          icon="thermostat"
          value={temperature}
          conditionName="TEMP"
        />
        <RoomCondition
          icon="water_drop"
          value={`${humidity}%`}
          conditionName="HUMIDITY"
        />
      </StyledRoomConditionsWrapper>
      <StyledPopupMenu />
    </StyledRoomHeader>
  );
};

export default RoomHeader;
