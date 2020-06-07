import React from 'react';

import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';

import MissionLargeScreens from './MissionLargeScreens';
import MissionMediumScreens from './MissionMediumScreens';
import MissionMobileScreens from './MissionMobileScreens';

const Mission = () => {
  return (
    <Box>
      <Hidden mdDown>
        <MissionLargeScreens />
      </Hidden>
      <Hidden smDown lgUp>
        <MissionMediumScreens />
      </Hidden>
      <Hidden mdUp>
        <MissionMobileScreens />
      </Hidden>
    </Box>
  );
};

export default Mission;
