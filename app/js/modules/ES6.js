import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return(
      <div>
      <ul className="menu-list">
          <li className="menu-list__item"><NavLink to="/es6/_let">let</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/_const">const</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/function_arrow">Function</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/Assignment_Destructuring">Assignment Destructuring</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/spread">Spread</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/strings">Strings</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/Object&prototypes">Object and prototypes</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/ObjectPrototypes">Classes</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/Symbol">Symbol</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/SetMap">Set, Map, WeakSet и WeakMap</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/Promise">Promise</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/Genrators">Generators</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/Modules">Modules</NavLink></li>
          <li className="menu-list__item"><NavLink to="/es6/Proxy">Proxy</NavLink></li>
      </ul>
      {this.props.children}
    </div>
      )

  }
})
