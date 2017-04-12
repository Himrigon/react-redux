import React, {Component} from 'react'
import NavLink from './NavLink'

class ES6 extends React.Component{
  render() {
    return(
      <div>
      <ul className="menu-list">
          <li className="menu-list__item"><NavLink to="/es6/_let">let</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/_const">const</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/Assignment_Destructuring">Assignment Destructuring</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/function_arrow">Function</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/spread">Spread</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/strings">Strings</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/ObjectPrototypes">Object and prototypes</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/Classes">Classes</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/Symbol">Symbol</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/Iterator">Iterator</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/SetMap">Map WeakMap</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/Promise">Promise</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/Generators">Generators</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/Proxy">Proxy</NavLink></li>
      </ul>
      {this.props.children}
    </div>
      )

  }
}

export default ES6;
