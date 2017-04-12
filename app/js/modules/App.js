import { Link } from 'react-router'
import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import NavLink from './NavLink';

export default class App extends React.Component{
  render() {
    return (
      <div className="route">
        <ul role="nav" className="nav">
          <li><NavLink to="/es6">ES6</NavLink></li>
          <li>/</li>
          <li><NavLink to="/repos">ES7</NavLink></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
