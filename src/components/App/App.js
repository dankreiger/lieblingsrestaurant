import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'components/Home/Home';
import Info from 'components/Info/Info';
import Navigation from 'components/Navigation/Navigation';

const App = () => (
  <div>
    <Navigation />
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/info" component={Info} />
    </main>
  </div>
);

export default App;
