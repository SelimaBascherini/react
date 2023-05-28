import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import postUno from "./components/postUno";
import postDue from "./components/postDue";
import postTre from "./components/postTre";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={postUno} />
        <Route path="/post/:postId" component={postDue} />
        <Route path="/forum" component={postTre} />
      </Switch>
    </Router>
  );
}

export default Routes;
