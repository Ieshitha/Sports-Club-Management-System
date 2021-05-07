import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from "react";
import { Link } from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import routes from './routes.js';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Table,
} from "reactstrap";
import { Route, Router, Switch } from 'react-router-dom';
import history from "./helpers/history";
import Views from "./modules";


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          {routes.map(
            (routes, index) => (
              <Route
                key={index}
                exact={true}
                path={routes.path}   // routes for views
                component={routes.layout(routes.component)} />
            )
          )}
        </Switch>
      </Router>
    );
  }
}

export default App;

