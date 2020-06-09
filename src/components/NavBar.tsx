import React from 'react';
import logo from '../echology_logo.png';
import { brandColors } from '../constants/brand';
import { Link } from 'react-router-dom';

import CustomButton from './CustomButton';
import SmallerCustomButton from './SmallerCustomButton';
import HamburgerMenu from './HamburgerMenu';
import SmallerHamburgerMenu from './SmallerHamburgerMenu';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  gridContainer: {
    height: '9.5%',
    top: '1.6%',
    paddingTop: '1.0rem',
  },
  brand: {
    width: '80px',
  },
  smallerBrand: {
    width: '60px',
  },
  link: {
    color: brandColors.pureWhite,
    textDecoration: 'none',
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
      <Grid item xs={8}>
        <Hidden smDown>
          <img src={logo} alt='Logo' className={classes.brand} />
        </Hidden>
        <Hidden mdUp>
          <img src={logo} alt='Logo' className={classes.smallerBrand} />
        </Hidden>
      </Grid>

      <Grid item xs={4}>
        <Hidden mdDown>
          <Grid container justify='space-between' alignItems='center'>
            <Grid item>
              <Link to='/mission' className={classes.link}>
                <h4>Our Mission</h4>
              </Link>
            </Grid>
            <Grid item>
              <Link to='/pricing' className={classes.link}>
                <h4>Packages</h4>
              </Link>
            </Grid>
            {/*
            <Grid item>
              <h4 className={classes.link}>Showcase</h4>
            </Grid>
            <Grid item>
              <h4 className={classes.link}>FAQ</h4>
            </Grid>
            */}
            <Grid item>
              <CustomButton
                linkTo='/pricing'
                buttonText='Get Your Site'
              ></CustomButton>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden lgUp>
          <Grid container justify='flex-end' alignItems='center' spacing={2}>
            <Hidden xsDown>
              <Grid item>
                <HamburgerMenu />
              </Grid>
            </Hidden>
            <Hidden smUp>
              <SmallerHamburgerMenu />
            </Hidden>
            <Hidden smDown>
              <Grid item>
                <CustomButton
                  linkTo='/pricing'
                  buttonText='Get Your Site'
                ></CustomButton>
              </Grid>
            </Hidden>
            <Hidden mdUp xsDown>
              <Grid item>
                <SmallerCustomButton
                  linkTo='/pricing'
                  buttonText='Get Your Site'
                ></SmallerCustomButton>
              </Grid>
            </Hidden>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default NavBar;
