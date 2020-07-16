import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import PostList from './post/PostList';
import PostDetail from './post/PostDetail';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/about" component={About} />
    <Route path="/posts" component={PostList} exact />
    <Route path="/posts/:id" component={PostDetail} />
  </Switch>
)

export default Routes