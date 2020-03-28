import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import NewIncident from "./pages/NewIncident/NewIncident";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />

      <Route path="/profile" component={Profile} />
      <Route path="/incidents/new" component={NewIncident} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
