import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory,IndexRoute } from 'react-router'
import App from './modules/App'
import ES6 from './modules/ES6'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import NotFound from './modules/NotFound'
import NewCapability from './modules/newCapability'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/es6" component={ES6}>
        <Route path="/es6/:newCapability" component={NewCapability}/>
      </Route>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>

    </Route>
    <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('app'))
