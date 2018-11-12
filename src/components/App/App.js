import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'components/Home/Home';
import Info from 'components/Info/Info';
import Navigation from 'components/Navigation/Navigation';

const App = () => (
  <>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route exact path="/info" component={Info} />
  </>
);

export default App;
