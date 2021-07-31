import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import RoomCondition from '../../molecules/RoomCondition';
import {
  StyledMembersInfo,
  StyledRoomConditionsWrapper,
  StyledRoomHeader,
  StyledRoomHeading,
  StyledSettingsBtn,
  StyledBackButton,
  StyledHeaderInner,
  StyledButtonsWrapper,
} from './StyledRoomHeader';

const RoomHeader = ({ id, name, members, temp, humidity }) => {
  const { goBack } = useHistory();
  const temperature = (
    <>
      {temp}
      <span>&deg;</span>C
    </>
  );

  return (
    <StyledRoomHeader>
      <StyledButtonsWrapper>
        <StyledBackButton onClickFn={goBack} icon="arrow_back" />
        <Link
          to={{
            pathname: `/room/${name.replace(/\s/g, '')}/settings`,
            state: { id, name },
          }}
        >
          <StyledSettingsBtn icon="settings" />
        </Link>
      </StyledButtonsWrapper>
      <StyledHeaderInner>
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
      </StyledHeaderInner>
    </StyledRoomHeader>
  );
};

export default RoomHeader;
