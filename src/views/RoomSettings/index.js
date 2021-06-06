import React, { useContext, useState } from 'react';
import Header from '../../components/molecules/Header';
import MenuDevice from '../../components/molecules/MenuDevice';
import Button from '../../components/atoms/Button';
import List from '../../components/organisms/List';
import AppContext from '../../context/AppContext';

import {
  StyledHeading,
  StyledRoomSettigs,
  StyledSettingWrapper,
  StyledDevicesHeadingWrapper,
  StyledListWrapper,
  StyledMaterialSwitch,
} from './StyledRoomSettings';

const RoomSettings = ({ location }) => {
  const { devices, rooms, handleRoomToggleOn } = useContext(AppContext);
  const { id, name } = location.state;

  const currentRoom = rooms.find((room) => room.id === id);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <StyledRoomSettigs>
      <Header subHeading={name}>Room Settings</Header>
      <StyledSettingWrapper>
        <StyledDevicesHeadingWrapper>
          <StyledHeading headingType="h2">Add / Remove Device</StyledHeading>
          <Button
            onClickFn={handleExpand}
            icon={isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          />
        </StyledDevicesHeadingWrapper>
        <StyledListWrapper isExpanded={isExpanded}>
          <List
            listType="devices"
            listArray={devices}
            component={<MenuDevice roomId={id} />}
          />
        </StyledListWrapper>
      </StyledSettingWrapper>
      <StyledSettingWrapper>
        <StyledHeading headingType="h2">Turn Room On / Off</StyledHeading>
        <StyledMaterialSwitch
          isChecked={currentRoom.isOn}
          onChangeFn={(event) => handleRoomToggleOn(event, id)}
        />
      </StyledSettingWrapper>
    </StyledRoomSettigs>
  );
};

export default RoomSettings;
