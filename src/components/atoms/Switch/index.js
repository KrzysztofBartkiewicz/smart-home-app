import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { mainTheme } from '../../../themes/mainTheme';

const PurpleSwitch = withStyles({
  switchBase: {
    color: mainTheme.colors.primary,
    '&$checked': {
      color: mainTheme.colors.primary,
    },
    '&$checked + $track': {
      backgroundColor: mainTheme.colors.primaryLight,
    },
  },
  checked: {},
  track: {},
})(Switch);

const MaterialSwitch = ({ isChecked, onChangeFn, isDisabled }) => {
  return (
    <PurpleSwitch
      disabled={isDisabled}
      checked={isChecked}
      onChange={onChangeFn}
      name="checkedA"
    />
  );
};

export default MaterialSwitch;
