import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../helpers/routes';
import NavigationTemplate from '../templates/NavigationTemplate';
import Home from '../views/Home';
import Settings from '../views/Settings';
import SingleRoom from '../views/SingleRoom';

const Router = () => {
  return (
    <BrowserRouter>
      <NavigationTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.settings} component={Settings} />
          <Route path={routes.singleRoom} component={SingleRoom} />
        </Switch>
      </NavigationTemplate>
    </BrowserRouter>
  );
};

export default Router;
