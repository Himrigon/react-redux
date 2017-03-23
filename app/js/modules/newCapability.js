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
    _let:'let a = 2\n\r{\n let a = 3\n a\n}',
    _const: 'const ARR = [5, 6];\n\rARR',
    function_arrow:
`
function showMenu({title="Заголовок", width:w=100, height:h=200} = {}) {
  return(title + ' ' + w + ' ' + h);
}

let a = showMenu()


let b = [1, 2].map(x => x * 2);

 function Timer () {
  this.seconds = 0
  setInterval(() => this.seconds++, 1000)
 };

 var timer = new Timer();


// setTimeout(() => console.log(timer.seconds), 3100);`,
    spread:'let a=[3,4,5]\n\r//let b=[1,2,...a]',
    strings:'',
    ObjectPrototypes:'',
    SetMap:'',
    Generators:'',
    Promise:'',
    Modules:'',
    Proxy:'',
    Assignment_Destructuring:'let a = {\n foo: 24,\n height:2\n};\n\rlet {foo:b,height} = a;'

  }
};
export default newCapability;


