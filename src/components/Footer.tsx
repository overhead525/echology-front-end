import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { brandColors } from '../constants/brand';

const styles = {
  textField: {
    color: brandColors.pureWhite,
  },
};

const useStyles = makeStyles(() => ({
  boxContainer: {
    padding: '1.5rem 0',
    backgroundColor: brandColors.black,
    opacity: 0.5,
    marginTop: '3rem',
  },
  gridContainer: {
    width: '85%',
    margin: 'auto',
  },
  header: {
    color: brandColors.pureWhite,
  },
  link: {
    color: brandColors.pureWhite,
  },
  textField: {
    color: brandColors.pureWhite,
    outlineColor: brandColors.pureWhite,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.boxContainer}>
      <Grid
        container
        justify='space-between'
        alignItems='flex-start'
        className={classes.gridContainer}
      >
        <Grid item>
          <Typography variant='h6' className={classes.header}>
            Links
          </Typography>
          <Link to='/mission'>
            <Typography variant='body1' className={classes.link}>
              Our Mission
            </Typography>
          </Link>
          <Link to='/pricing'>
            <Typography variant='body1' className={classes.link}>
              Packages
            </Typography>
          </Link>
          <Link to='/privacy'>
            <Typography variant='body1' className={classes.link}>
              Privacy Policy
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Typography variant='h6' className={classes.header}>
            Join Our Newsletter
          </Typography>
          <input
            type='email'
            name='EmailAddress'
            id='emailAddress'
            placeholder='Email Address'
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
