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
    _let:
`let a = 2
 {let a = 3}`,
    _const: 'const ARR = [5, 6];\n\rARR',
    function_arrow:
`
function showMenu({title="Заголовок", width:w=100, height:h=200} = {}) {
  return(title + ' ' + w + ' ' + h);
}

let a = showMenu()


let b = [1, 2].map(x => x * 2);

let group = {
  title: "Наш курс",
  students: ["Вася", "Петя", "Даша"],

  showList: function() {
    this.students.forEach(
      student => console.log(this.title + ': ' + student)
    )
  }
}

group.showList();`
,
    spread:
`let a=[3,4,5]
//let b=[1,2,...a]
let [firstName, lastName, ...rest] = "Сегезмунд Полиграфович Неактив-Болотский Вылазец".split(" ");
`,
    strings:
`
'//Blue Whale'.includes('blue');
'//To be, or not to be, that is the question.'.endsWith('question.');
'//To be, or not to be, that is the question.'.startWith('To');
//'abc'.repeat(2);
`,
   ObjectPrototypes:
`
let name = 'Филимон';
let surname = 'surname'
let gender = () => 'gender'
let user={
  name,
  [surname]:'Уржумский',
  [gender()]:'mail'
}

let user2={
  name: 'Венеамин',
  adress:'Утопская площадь 2б стр.4',
  zip: 1111
}
`,
    Classes:
`
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
   console.log(this.name)
  }

}

let user = new User("Вася");

class ChildUser extends User{
  sayHi(){
    super.sayHi()
    return 'from ChilDuser'
  }
}

new ChildUser('Петя');
`,
Symbol:
`
let sym = Symbol("name");
sym.toString();
// Symbol("name") == Symbol("name")
//let user = {
//  isAdmin: 'Admin',
//  name: "Вася",
//  age: 30,
//  [Symbol.for("isAdmin")]: true
//};
//Object.keys(user)
//user[Symbol.for("isAdmin")]
`,
    SetMap:
`
let map = new Map();

map.set('1', 'str1')
   .set(1, 'num1')
   .set(true, 'bool1');

for (let keys of map.keys()){
  //console.log keys
}
for (let values of map.keys()){
   //console.log values
}
for (let entries of map.keys()){
   //console.log entries
}
// map.delete(true)

let fruit = [
  {name: 'orange'},
  {name: 'apple'},
  {name: 'pineapple'}
]
let weakMap = new WeakMap();

weakMap[fruit[1]] = 'green';
`,
    Generators:`
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

for(let value of generator) {
  alert(value);}
    `,
    Promise:
`
let promise = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve("result");
  }, 1000);
});

promise
  .then(
    result => {
      console.log("Fulfilled: " + result);
    },
    error => {
      console.log("Rejected: " + error); // error - аргумент reject
    }
  );
`,
    Modules:'',
    Proxy:'',
    Assignment_Destructuring:
`let a = {
  foo: 24,
  height:2
};
let { foo:b, height } = a;
let [firstName="Гость", lastName="Анонимный"] = [];
`

  }
};
export default newCapability;


