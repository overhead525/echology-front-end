import React from 'react';

import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { brandColors } from '../../constants/brand';
import heroImage from '../../hero_image.png';

const useStyles = makeStyles(() => ({
  headerText: {
    color: brandColors.pureWhite,
    fontWeight: 'bolder',
  },
  headerTextEmphasized: {
    color: brandColors.yellow,
  },
  bodyText: {
    color: brandColors.pureWhite,
    marginBottom: '1.6rem',
  },
  heroImage: {
    width: '75%',
    height: 'auto',
  },
  heroImageWrapper: {
    textAlign: 'right',
  },
  customDivider: {
    margin: '2rem 0',
  },
  customButtonStyle1: {
    backgroundColor: brandColors.purple,
    borderRadius: '2rem',
    fontWeight: 'bold',
    height: '3rem',
    width: '12rem',
    padding: '0.5rem',
    color: brandColors.pureWhite,
  },
  customButtonStyle2: {
    backgroundColor: brandColors.purple,
    borderRadius: '2rem',
    fontWeight: 'bold',
    height: '2rem',
    width: '8rem',
    padding: '0.5rem',
    color: brandColors.pureWhite,
  },
  width85: {
    maxWidth: '85%',
  },
  width70: {
    maxWidth: '70%',
  },
  width50: {
    maxWidth: '50%',
  },
  width30: {
    maxWidth: '30%',
  },
}));

const LandingLargeScreens = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container justify='space-between' alignItems='center'>
      <Grid item xs={3}>
        <Grid
          container
          direction='column'
          alignItems='flex-start'
          justify='center'
        >
          <Grid item>
            <Typography
              variant='h2'
              gutterBottom
              className={classes.headerText}
            >
              Get <span className={classes.headerTextEmphasized}>15%</span> Off
              Your Site Today
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              gutterBottom
              className={classes.bodyText}
            >
              We’re offering a discount for first-time customers! Register today
              to get yours and be notified about future discounts.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={handleClickOpen}
              color='primary'
              className={classes.customButtonStyle1}
            >
              Get Your Discount
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby='form-dialog-title'
            >
              <DialogTitle id='form-dialog-title'>
                15% Off Your Next Order
              </DialogTitle>
              <DialogContent>
                <DialogContentText>What's your first name?</DialogContentText>
                <TextField
                  margin='dense'
                  id='name'
                  label='Name'
                  type='text'
                  fullWidth
                />
                <Box className={classes.customDivider} />
                <DialogContentText>
                  Where should we send your coupon code? We hate spam and
                  promise email you respectfully.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin='dense'
                  id='emailAddress'
                  label='Email Address'
                  type='email'
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  color='primary'
                  className={classes.customButtonStyle2}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleClose}
                  color='primary'
                  className={classes.customButtonStyle2}
                >
                  Subscribe
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9} className={classes.heroImageWrapper}>
        <img src={heroImage} alt='Hero' className={classes.heroImage} />
      </Grid>
    </Grid>
  );
};

export default LandingLargeScreens;
