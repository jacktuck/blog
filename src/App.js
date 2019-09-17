import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'
import Nav from './Nav'
import Post from './Post'
import PostList from './PostList'
import NotFound from "./NotFound";

function AppRouter() {
  return (
    <Router>
      <div id="container">
        <div id="header">
          <Nav/>
        </div>

        <div id="page">
          <Switch>
            <Route path="/" exact component={PostList} />
            <Route path="/post/:slug" component={Post} />
            <Route component={NotFound} />
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default AppRouter;