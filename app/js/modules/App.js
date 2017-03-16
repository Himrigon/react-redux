import { Link } from 'react-router'
import React from 'react';
import ReactDOM from 'react-dom';
import NavLink from './NavLink';
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/es6">ES6</NavLink></li>
          <li><NavLink to="/repos">Redux</NavLink></li>

        </ul>
        <div className="content">
          {this.props.children || {Home}}
        </div>
      </div>
    )
  }
})
