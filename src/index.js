import React from 'react';
import { render } from 'react-dom';

import App from './components/App/App';
import Root from './Root';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-lightbox/style.css';
import './index.css';

render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);
