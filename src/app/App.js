import React from 'react';
import { Route, Switch,HashRouter,Redirect } from 'react-router-dom'

import Home from '../components/Home/Home'
import Blog from '../components/Blog/Blog'
import BlogSearch from '../components/Search/Blogsearch'
import About from '../components/About/about'
import Contact from '../components/Contact/contact'
import NoPage from '../components/NoPage/NoPage'


function App() {
  return (
    <HashRouter basename ='/'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blogs/:blogId' component={Blog} />
        <Route path='/blogs' component={BlogSearch} />
        <Route path='/contactme' component={Contact} />
        <Route path='/about' component={About}/>
        <Route component={NoPage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
