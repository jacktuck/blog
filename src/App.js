import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss'
import Nav from './Nav'
import Post from './Post'
import PostList from './PostList'
import NotFound from "./NotFound";

function AppRouter() {
  return (
    <Router>
      <div id="container">
        <div id="sidenav">
          <Nav/>
        </div>

        <div id="page">
          <Switch>
            <Route path="/" exact component={PostList} />
            <Route path="/:slug" component={Post} />
            <Route component={NotFound} />
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default AppRouter;