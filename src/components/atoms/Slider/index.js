import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { mainTheme } from '../../../themes/mainTheme';

const useStyles = makeStyles({
  root: {
    width: 200,
    '& span': {
      color: mainTheme.colors.primary,
    },
  },
  label: {
    fontSize: 10,
  },
});

export default function MaterialSlider({
  value,
  onChangeFn,
  onChangeCommittedFn,
  label,
  isDisabled,
  min,
  max,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <label className={classes.label}>{label}</label>
      <Slider
        min={min}
        max={max}
        disabled={isDisabled}
        value={value}
        onChange={onChangeFn}
        onChangeCommitted={onChangeCommittedFn}
        onClick={(event) => event.stopPropagation()}
        aria-labelledby="continuous-slider"
      />
    </div>
  );
}
