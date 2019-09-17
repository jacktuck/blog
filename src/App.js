import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import Nav from './Nav'
import Post from './Post'
import PostList from './PostList'

function Foo () {
  return <div>Foo</div>
}

function AppRouter() {
  return (
    <Router>
      <div id="container">
        <Nav/>
        <Route path="/" exact component={PostList} />
        <Route path="/blog/:slug" component={Post} />
        <Route path="/foo" component={Foo} />
      </div>
    </Router>
  );
}

export default AppRouter;