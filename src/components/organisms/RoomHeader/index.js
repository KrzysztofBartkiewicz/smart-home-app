import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import RoomCondition from '../../molecules/RoomCodition';
import {
  StyledMembersInfo,
  StyledRoomConditionsWrapper,
  StyledRoomHeader,
  StyledRoomHeading,
  StyledSettingsBtn,
  StyledBackButton,
  StyledHeaderInner,
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
      <StyledHeaderInner>
        <StyledBackButton onClickFn={goBack} icon="arrow_back" />
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
        <Link
          to={{
            pathname: `/${name.replace(/\s/g, '')}/settings`,
            state: { id, name },
          }}
        >
          <StyledSettingsBtn icon="settings" />
        </Link>
      </StyledHeaderInner>
    </StyledRoomHeader>
  );
};

export default RoomHeader;
