import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory,IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import NotFound from './modules/NotFound'
import Home from './modules/Home'
import NewCapability from './modules/newCapability'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/es6" component={About}>
        <Route path="/es6/:newCapability" component={NewCapability}/>
      </Route>
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('app'))
