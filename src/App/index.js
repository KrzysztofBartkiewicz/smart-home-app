import React from 'react';
import Router from '../Routing/Router';
import AppContext from '../context/AppContext';
import GlobalStyleTemplate from '../templates/GlobalStyleTemplate';

const App = () => (
  <GlobalStyleTemplate>
    <Router />
  </GlobalStyleTemplate>
);

export default App;
