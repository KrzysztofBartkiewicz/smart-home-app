import React, { useState, useContext } from 'react';
import AppContext from '../../../context/AppContext';
import MaterialSwitch from '../../atoms/Switch';
import MaterialSlider from '../../atoms/Slider';
import {
  StyledDevice,
  StyledDeviceWrapper,
  StyledHeading,
  StyledIcon,
  StyledInnerWrapper,
  StyledParagraph,
  StyledSettingsWrapper,
} from './StyledDevice';

const Device = ({
  name: deviceName,
  icon,
  isOn,
  parameters,
  roomId,
  isRoomOn,
}) => {
  const [areSettingsVisible, setAreSettingsVisible] = useState(false);
  const { handleParamsChange, handleDeviceOnOff } = useContext(AppContext);

  const handleDeviceClick = () => {
    setAreSettingsVisible((prev) => !prev);
  };

  const isDeviceOn = isRoomOn ? isOn : false;

  return (
    <StyledDevice onClick={handleDeviceClick}>
      <StyledDeviceWrapper>
        <StyledIcon>{icon}</StyledIcon>
        <StyledInnerWrapper>
          <StyledHeading headingType="h2">{deviceName}</StyledHeading>
          <ul>
            {parameters.map(({ name, value }, index) => (
              <li key={index}>
                <StyledParagraph>
                  {value} {name}
                </StyledParagraph>
              </li>
            ))}
          </ul>
        </StyledInnerWrapper>
        <MaterialSwitch
          isDisabled={!isRoomOn}
          isChecked={isDeviceOn}
          onChangeFn={(event) => handleDeviceOnOff(event, deviceName, roomId)}
        />
      </StyledDeviceWrapper>
      <StyledSettingsWrapper isVisible={areSettingsVisible}>
        <ul>
          {parameters.map(({ name, value }, index) => (
            <li key={index}>
              <MaterialSlider
                isDisabled={!isDeviceOn}
                value={value}
                label={name}
                onChangeFn={(event, newValue) =>
                  handleParamsChange(event, newValue, deviceName, name, roomId)
                }
              />
            </li>
          ))}
        </ul>
      </StyledSettingsWrapper>
    </StyledDevice>
  );
};

export default Device;
