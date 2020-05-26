import React from 'react';

import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

import LandingLargeScreens from './LandingLargeScreens';
import LandingMobileScreens from './LandingMobileScreens';

const Landing = () => {
  return (
    <Box>
      <Hidden mdDown>
        <LandingLargeScreens></LandingLargeScreens>
      </Hidden>
      <Hidden lgUp>
        <LandingMobileScreens></LandingMobileScreens>
      </Hidden>
    </Box>
  );
};

export default Landing;
