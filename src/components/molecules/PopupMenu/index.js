import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { StyledButton } from './StyledPopupMenu';
import { makeStyles } from '@material-ui/core';
import { mainTheme } from '../../../themes/mainTheme';

const useStyles = makeStyles({
  root: {
    margin: 0,
    fontFamily: 'Montserrat',
    fontSize: 20,
    '&:hover': {
      backgroundColor: mainTheme.colors.primaryLight,
    },
  },
});

export default function PopupMenu({ className }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div className={className}>
      <StyledButton onClickFn={handleClick} icon="settings" />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.root} onClick={handleClose}>
          Add Device
        </MenuItem>
        <MenuItem className={classes.root} onClick={handleClose}>
          Remove Device
        </MenuItem>
      </Menu>
    </div>
  );
}
