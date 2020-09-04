import React from 'react';
import { BrowserRouter, Route, Switch,HashRouter } from 'react-router-dom'

import Home from '../components/Home/Home'
import Blog from '../components/Blog/Blog'

function App() {
  return (
    <HashRouter basename ='/'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blogs/:blogId' component={Blog} />
      </Switch>
    </HashRouter>
  );
}

export default App;
