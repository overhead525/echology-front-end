import React from 'react';

import { brandColors } from '../../constants/brand';
import CustomButtonPricing from '../../components/CustomButtonPricing';

import PricingTableComponent from '../../components/PricingTable';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  title: {
    color: brandColors.pureWhite,
    marginTop: '3rem',
    marginBottom: '2rem',
  },
  checkoutButton: {
    marginTop: '3rem',
  },
}));

const Pricing = () => {
  const classes = useStyles();

  return (
    <Box>
      <Grid container direction='column' alignItems='center'>
        <Typography variant='h4' className={classes.title}>
          <b>Choose Your Package</b>
        </Typography>
      </Grid>
      <PricingTableComponent />
      <Grid container direction='column' alignItems='center'>
        <CustomButtonPricing
          buttonText='Checkout'
          linkTo='/'
        ></CustomButtonPricing>
      </Grid>
    </Box>
  );
};

export default Pricing;
