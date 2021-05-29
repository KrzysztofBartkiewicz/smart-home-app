import React from 'react';
import {
  StyledIcon,
  StyledIconWrapper,
  StyledName,
  StyledRoomCondition,
  StyledValue,
  StyledWrapper,
} from './StyledRoomCondition';

const RoomCondition = ({ icon, value, conditionName }) => {
  return (
    <StyledRoomCondition>
      <StyledIconWrapper>
        <StyledIcon>{icon}</StyledIcon>
      </StyledIconWrapper>
      <StyledWrapper>
        <StyledValue>{value}</StyledValue>
        <StyledName>{conditionName}</StyledName>
      </StyledWrapper>
    </StyledRoomCondition>
  );
};

export default RoomCondition;
