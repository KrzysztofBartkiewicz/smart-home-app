import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../helpers/routes';
import NavigationTemplate from '../templates/NavigationTemplate';
import AddRoom from '../views/AddRoom';
import RemoveRoom from '../views/RemoveRoom';
import Home from '../views/Home';
import RoomSettings from '../views/RoomSettings';
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
          <Route path={routes.addRoom} component={AddRoom} />
          <Route path={routes.roomSettings} component={RoomSettings} />
          <Route path={routes.removeRoom} component={RemoveRoom} />
        </Switch>
      </NavigationTemplate>
    </BrowserRouter>
  );
};

export default Router;
