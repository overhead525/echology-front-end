import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { brandColors } from '../../constants/brand';
import missionImage from '../../missionImage.png';

const useStyles = makeStyles({
  bigText: {
    fontWeight: 900,
    fontSize: '6.0rem',
    lineHeight: '6.0rem',
    color: brandColors.yellow,
    marginTop: '5.5rem',
    marginBottom: '4.0rem',
  },
  blockWrapper: {
    width: '20px',
  },
  bodyText: {
    color: brandColors.pureWhite,
  },
  highlighted: {
    color: brandColors.yellow,
  },
  leftQuoteBlock: {
    height: '5rem',
    width: '4px',
    backgroundColor: brandColors.yellow,
    position: 'absolute',
  },
  leftQuoteText: {
    fontWeight: 'bold',
    fontHeight: '1.4rem',
    lineHeight: '1.5rem',
    fontStyle: 'italic',
    fontSize: '1.4rem',
    color: brandColors.yellow,
    marginLeft: '1rem',
  },
  leadText: {
    marginBottom: '1.5rem',
  },
  secondBody: {
    marginBottom: '3.7rem',
  },
  rightImage: {
    marginBottom: '3.5rem',
    textAlign: 'center',
    width: '60%',
    paddingLeft: '18%',
    height: 'auto',
  },
  verticalRule: {
    height: '37rem',
    width: '1px',
    backgroundColor: brandColors.pureWhite,
    marginTop: '2rem',
  },
});

const MissionLargeScreens = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify='space-between'
      alignItems='flex-start'
      className={classes.bodyText}
    >
      <Grid item xs={5}>
        {/* Left Side */}
        <Grid container direction='column'>
          <Grid item>
            <Typography className={classes.bigText}>
              Our
              <br />
              Mission
              <br />& Vision
            </Typography>
            <Typography>
              We believe that{' '}
              <span className={classes.highlighted}>HAVING A WEBSITE</span> is a{' '}
              <span className={classes.highlighted}>GIVEN RIGHT</span> to{' '}
              <span className={classes.highlighted}>ANYONE</span> who has a{' '}
              <span className={classes.highlighted}>BUSINESS IDEA</span>. The
              world shouldn’t be deprived of your{' '}
              <span className={classes.highlighted}>VISION</span> just because
              you don’t have the time or skills to build your own.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Grid container justify='center'>
          <Grid item>
            <Box className={classes.verticalRule}></Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        {/* Right Side */}
        <img
          src={missionImage}
          alt='Mission Img Goes Here'
          className={classes.rightImage}
        />
        <Typography className={classes.secondBody}>
          We <span className={classes.highlighted}>PRIORITIZE</span> getting you{' '}
          <span className={classes.highlighted}>INTO THE MARKETPLACE</span> as{' '}
          <span className={classes.highlighted}>SOON</span> as possible. That’s
          why we not only <span className={classes.highlighted}>DELIVER</span> a
          stunning website quickly, but also get you started with a suitable{' '}
          <span className={classes.highlighted}>MARKETING</span> plan to fit{' '}
          <span className={classes.highlighted}>YOUR NEEDS</span>. We want you
          to put your website to use as soon as it’s launched so you can{' '}
          <span className={classes.highlighted}>START GETTING FEEDBACK</span>.
        </Typography>
        <Typography className={classes.leadText}>
          In the words of our founder:
        </Typography>
        <Grid container justify='flex-start' alignItems='center' spacing={1}>
          {/* Quote Wrapper */}
          <Box className={classes.leftQuoteBlock}>{/* Vertical Rule */}</Box>
          <Typography className={classes.leftQuoteText}>
            The goal of a making a website shouldn’t simply be “to make a
            website”. It should be “to give your customers a place to go.”
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MissionLargeScreens;
