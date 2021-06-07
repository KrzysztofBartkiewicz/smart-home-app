import React, { useState, useContext, useEffect } from 'react';
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
  StyledRightWrapper,
  StyledExpandBtn,
  StyledTopWrapper,
} from './StyledDevice';

const Device = ({
  name: deviceName,
  icon,
  isOn,
  parameters,
  roomId,
  isRoomOn,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { handleParamsChange, handleDeviceOnOff } = useContext(AppContext);

  const handleExpand = () => {
    if (isOn) {
      setIsExpanded((prev) => !prev);
    }
  };

  const isDeviceOn = deviceName !== 'Fridge' ? (isRoomOn ? isOn : false) : true;

  useEffect(() => {
    if (!isOn) {
      setIsExpanded(false);
    }
  }, [isOn]);

  return (
    <StyledDevice>
      <StyledTopWrapper>
        <StyledDeviceWrapper>
          <StyledIcon>{icon}</StyledIcon>
          <StyledInnerWrapper>
            <StyledHeading headingType="h2">{deviceName}</StyledHeading>
            <ul>
              {parameters.map(({ name, value, unit }, index) => (
                <li key={index}>
                  <StyledParagraph>
                    {value}
                    {unit} {name}
                  </StyledParagraph>
                </li>
              ))}
            </ul>
          </StyledInnerWrapper>
        </StyledDeviceWrapper>
        <StyledRightWrapper>
          <MaterialSwitch
            isDisabled={!isRoomOn || deviceName === 'Fridge'}
            isChecked={isDeviceOn}
            onChangeFn={(event) => handleDeviceOnOff(event, deviceName, roomId)}
          />
          <StyledExpandBtn
            onClickFn={handleExpand}
            icon={isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          />
        </StyledRightWrapper>
      </StyledTopWrapper>

      <StyledSettingsWrapper isVisible={isExpanded}>
        <ul>
          {parameters.map(({ name, value, min, max }, index) => (
            <li key={index}>
              <MaterialSlider
                min={min}
                max={max}
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
