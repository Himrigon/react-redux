import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return(
      <div>
      <ul className="menu-list">
          <li className="menu-list__item"><NavLink to="/es6/function_arrow">Function =></NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/spread">spread</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/Assignment_Destructuring">Assignment Destructuring</NavLink></li>
      </ul>
      {this.props.children}
    </div>
      )

  }
})
