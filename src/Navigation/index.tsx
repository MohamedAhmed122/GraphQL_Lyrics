import React from "react";
import { Route, Switch } from "react-router-dom";
import { CreatePage } from "../Pages/CreatePage";
import { DetailPage } from "../Pages/DetailPage";
import { HomePage } from "../Pages/HomePage";

export const Navigation: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/detail/:id" component={DetailPage} />
      <Route exact path="/create" component={CreatePage} />
    </Switch>
  );
};
