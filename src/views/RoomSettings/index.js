import React, { useContext } from 'react';
import Header from '../../components/molecules/Header';
import MenuDevice from '../../components/molecules/MenuDevice';
import List from '../../components/organisms/List';
import AppContext from '../../context/AppContext';

import {
  StyledHeading,
  StyledRoomSettigs,
  StyledSettingWrapper,
} from './StyledRoomSettings';

const RoomSettings = ({ location }) => {
  const { devices } = useContext(AppContext);
  const { id, name } = location.state;

  return (
    <StyledRoomSettigs>
      <Header subHeading={name}>Room Settings</Header>
      <StyledSettingWrapper>
        <StyledHeading headingType="h2">Add / Remove Device</StyledHeading>
        <List
          listType="devices"
          listArray={devices}
          component={<MenuDevice roomId={id} />}
        />
      </StyledSettingWrapper>
    </StyledRoomSettigs>
  );
};

export default RoomSettings;
