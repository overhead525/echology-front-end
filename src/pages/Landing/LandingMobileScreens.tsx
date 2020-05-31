import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
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
    fontWeight: 'bold',
  },
  headerTextEmphasized: {
    color: brandColors.yellow,
  },
  bodyText: {
    color: brandColors.pureWhite,
    marginBottom: '1.6rem',
  },
  heroImage: {
    width: '70%',
    height: 'auto',
  },
  centerItems: {
    textAlign: 'center',
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
    width: '7rem',
    padding: '0.5rem',
    fontSize: '0.75rem',
    color: brandColors.pureWhite,
  },
  extraTopMargin: {
    marginTop: '1.15rem',
  },
  fullBottomMargin: {
    marginBottom: '3.0rem',
  },
  extraBottomMargin: {
    marginBottom: '1.5rem',
  },
  tinyBottomMargin: {
    marginBottom: '0.8rem',
  },
  width85: {
    maxWidth: '85%',
  },
  width70: {
    maxWidth: '70%',
  },
  width60: {
    maxWidth: '60%',
  },
  width50: {
    maxWidth: '50%',
  },
  width30: {
    maxWidth: '30%',
  },
}));

const LandingMobileScreens = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item className={classes.extraTopMargin}>
        <Typography
          variant='h3'
          gutterBottom
          align='center'
          className={classes.headerText}
        >
          Get <span className={classes.headerTextEmphasized}>15%</span> Off Your
          Site Today
        </Typography>
      </Grid>
      <Grid item className={classes.centerItems}>
        <img src={heroImage} alt='Hero' className={classes.heroImage} />
      </Grid>
      <Grid item>
        <Typography
          variant='body1'
          gutterBottom
          align='center'
          className={classes.bodyText}
        >
          We’re offering a discount for first-time customers! Register today to
          get yours and be notified about future discounts.
        </Typography>
      </Grid>
      <Grid item className={classes.extraBottomMargin}>
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
            <DialogContentText>
              Where should we send your coupon code? We hate spam and promise
              email you respectfully.
            </DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Email Address'
              type='email'
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Grid container justify='space-around' alignItems='center'>
              <Grid item>
                <Button
                  onClick={handleClose}
                  color='primary'
                  className={classes.customButtonStyle2}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleClose}
                  color='primary'
                  className={classes.customButtonStyle2}
                >
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default LandingMobileScreens;
