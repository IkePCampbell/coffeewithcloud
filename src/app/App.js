import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../components/Home/Home'
import Blog from '../components/Blog/Blog'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blogs/:blogId' component={Blog} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
