import React from 'react'
import Transpiler from './transpiler'


class newCapability extends React.Component{
  constructor(pros){
    super()
  }

  setCapabiity(capability){
    return this.props.es6[capability]
  }

  render() {
    return (
      <div className="transpiler-container">
        <h2>{this.setCapabiity(this.props.params.newCapability)}</h2>
        <Transpiler code={this.setCapabiity(this.props.params.newCapability)}/>
      </div>
    )
  }
 }

newCapability.defaultProps={
  es6:{
    function_arrow:'a=(a)=>a',
    spread:'let a=[3,4,5]\n\rlet b=[1,2,...a]'
  }
};
export default newCapability;


