import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Info from '../Info/Info';
import { AppContainer } from './App.styles';

const App = () => (
  <AppContainer>
    <header>
      <Link to="/">Home</Link>
      <Link to="/info">Info</Link>
    </header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/info" component={Info} />
    </main>
  </AppContainer>
);

export default App;
