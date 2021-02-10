import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from "../Home";
import { Navbar } from "../menu/NavBar/NavBar";

export const AppRouter = () => {
    return (
        <Router>
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    )
}
