import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Mission from './pages/Mission';
import PageNotFound from './pages/PageNotFound';
import Pricing from './pages/Pricing';
import Showcase from './pages/Showcase';

function App() {
  return (
    <Router>
      <div>
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
      </div>
    </Router>
  );
}

export default App;
