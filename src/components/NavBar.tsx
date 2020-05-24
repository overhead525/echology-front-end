import React from 'react';
import logo from '../echology_logo.png';
import { brandColors } from '../constants/brand';

import CustomButton from './CustomButton';
import SmallerCustomButton from './SmallerCustomButton';
import HamburgerMenu from './HamburgerMenu';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  gridContainer: {
    height: '9.5%',
    top: '1.6%',
  },
  brand: {
    width: '80px',
  },
  smallerBrand: {
    width: '60px',
  },
  link: {
    color: brandColors.pureWhite,
  },
  getSiteButton: {
    backgroundColor: brandColors.purple,
    color: brandColors.pureWhite,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer} alignItems='center'>
      <Grid item xs={6}>
        <Hidden smDown>
          <img src={logo} alt='Logo' className={classes.brand} />
        </Hidden>
        <Hidden mdUp>
          <img src={logo} alt='Logo' className={classes.smallerBrand} />
        </Hidden>
      </Grid>

      <Grid item xs={6}>
        <Hidden mdDown>
          <Grid container justify='space-between' alignItems='center'>
            <Grid item>
              <h4 className={classes.link}>Our Mission</h4>
            </Grid>
            <Grid item>
              <h4 className={classes.link}>Packages</h4>
            </Grid>
            <Grid item>
              <h4 className={classes.link}>Showcase</h4>
            </Grid>
            <Grid item>
              <h4 className={classes.link}>FAQ</h4>
            </Grid>
            <Grid item>
              <CustomButton buttonText='Get Your Site'></CustomButton>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden lgUp>
          <Grid container justify='flex-end' alignItems='center' spacing={2}>
            <Grid item>
              <HamburgerMenu />
            </Grid>
            <Hidden smDown>
              <Grid item>
                <CustomButton buttonText='Get Your Site'></CustomButton>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item>
                <SmallerCustomButton buttonText='Get Your Site'></SmallerCustomButton>
              </Grid>
            </Hidden>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default NavBar;
