import React from 'react';
import { brandColors } from '../constants/brand';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
  inverseIcon: {
    color: brandColors.pureWhite,
  },
  inverseMenuItem: {
    backgroundColor: brandColors.purple,
    color: brandColors.pureWhite,
  },
}));

const SmallerHamburgerMenu = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        aria-controls='menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MenuIcon className={classes.inverseIcon} />
      </IconButton>
      <Menu
        id='menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Our Mission</MenuItem>
        <MenuItem onClick={handleClose}>Packages</MenuItem>
        <MenuItem onClick={handleClose}>Showcase</MenuItem>
        <MenuItem onClick={handleClose}>FAQ</MenuItem>
        <MenuItem onClick={handleClose} className={classes.inverseMenuItem}>
          Get Your Site
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default SmallerHamburgerMenu;
