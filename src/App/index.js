import React from 'react';
import Router from '../Routing/Router';
import AppContext from '../context/AppContext';
import GlobalStyleTemplate from '../templates/GlobalStyleTemplate';

const App = () => (
  <GlobalStyleTemplate>
    <Router />
    <span style={{ color: 'red' }} class="material-icons">
      tv
    </span>
  </GlobalStyleTemplate>
);

export default App;
