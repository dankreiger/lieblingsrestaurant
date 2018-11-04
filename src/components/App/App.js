import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Info from '../Info/Info';
import { AppContainer } from './App.styles';
import Navigation from '../Navigation/Navigation';

const App = () => (
  <AppContainer>
    <Navigation />
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/info" component={Info} />
    </main>
  </AppContainer>
);

export default App;
