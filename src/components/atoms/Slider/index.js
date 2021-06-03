import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
  label: {
    fontSize: 10,
  },
});

export default function MaterialSlider({
  value,
  onChangeFn,
  label,
  isDisabled,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <label className={classes.label}>{label}</label>
      <Slider
        disabled={isDisabled}
        value={value}
        onChange={onChangeFn}
        onClick={(event) => event.stopPropagation()}
        aria-labelledby="continuous-slider"
      />
    </div>
  );
}
