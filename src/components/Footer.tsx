import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
  return (
    <Grid container>
      <Grid item xs={5}>
        <Typography variant='h4'>Links</Typography>
        <Link to='/'>
          <Typography variant='h6'>Something</Typography>
        </Link>
        <Link to='/'>
          <Typography variant='h6'>Something</Typography>
        </Link>
        <Link to='/'>
          <Typography variant='h6'>Something</Typography>
        </Link>
        <Link to='/'>
          <Typography variant='h6'>Something</Typography>
        </Link>
      </Grid>
      <Grid item xs={7}>
        <Grid container>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
