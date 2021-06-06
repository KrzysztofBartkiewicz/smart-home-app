import React, { useContext } from 'react';
import Header from '../../components/molecules/Header';
import Slider from '../../components/atoms/Slider';
import AppContext from '../../context/AppContext';
import {
  StyledSetting,
  StyledTimeSettings,
  StyledLabel,
  StyledSettingsWrapper,
  StyledMinutes,
} from './StyledTimeSettings';

const TimeSetting = () => {
  const { goToSleepTime, handleTimerTimeChange, handleStartStopTimer } =
    useContext(AppContext);

  return (
    <StyledTimeSettings>
      <Header>Time Settings</Header>
      <StyledSettingsWrapper>
        <StyledSetting>
          <StyledLabel>Turn rooms off after:</StyledLabel>
          <StyledMinutes>
            {goToSleepTime === 0 ? 'OFF' : goToSleepTime}
          </StyledMinutes>
          <Slider
            min={0}
            max={120}
            value={goToSleepTime}
            onChangeCommittedFn={handleStartStopTimer}
            onChangeFn={handleTimerTimeChange}
            label="Minutes"
          />
        </StyledSetting>
      </StyledSettingsWrapper>
    </StyledTimeSettings>
  );
};

export default TimeSetting;
