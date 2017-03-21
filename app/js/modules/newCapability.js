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
        <Transpiler code={this.setCapabiity(this.props.params.newCapability)}/>
      </div>
    )
  }
 }

newCapability.defaultProps={
  es6:{
    _let:'let a = 2 \n\r{let a = 3\n\r a}\n\r a ',
    _const: 'const ARR = [5, 6];\n\rARR',
    function_arrow:'[1, 2].map(x => x * 2)',
    spread:'let a=[3,4,5]\n\rlet b=[1,2,...a]',
    Assignment_Destructuring:' let {foo} = pony\n\rvar {foo: baz} = pony'

  }
};
export default newCapability;


