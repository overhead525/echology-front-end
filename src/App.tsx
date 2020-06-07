import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Mission from './pages/Mission';
import PageNotFound from './pages/PageNotFound';
import Pricing from './pages/Pricing';
import Showcase from './pages/Showcase';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    top: 0,
    bottom: 0,
    width: '100%',
    minHeight: '100vh',
    background:
      'radial-gradient(50% 50% at 50% 50%, rgba(94, 25, 244, 0.33) 0%, rgba(94, 25, 244, 0.76) 100%) fixed',
  },
  container: {
    width: '85%',
    margin: '0 auto',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Box className={classes.root}>
        <Box className={classes.container}>
          <NavBar />
          <Switch>
            <Route path='/landing'>
              <Landing />
            </Route>
            <Route path='/pricing'>
              <Pricing />
            </Route>
            <Route path='/mission'>
              <Mission />
            </Route>
            <Route path='/showcase'>
              <Showcase />
            </Route>
            <Route path='/404'>
              <PageNotFound />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
