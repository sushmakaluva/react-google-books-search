import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './components/Search.js';
import NavBar from './components/NavBar.js';
import Heading from './components/Heading.js';
import Saved from './components/Saved.js';
import NoMatch from './components/NoMatch.js';
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
