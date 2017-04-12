import React, {Component} from 'react'
import NavLink from './NavLink'

class ES7 extends React.Component{
  render() {
    return(
      <div>
      <ul className="menu-list">
          <li className="menu-list__item"><NavLink to="/es7/includes">Array.prototype.includes</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es7/exponent">exponentiation operator </NavLink></li>
      </ul>
      {this.props.children}
    </div>
      )

  }
}

export default ES7;
