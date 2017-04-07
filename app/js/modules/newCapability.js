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

{
   let a = 3
}

console.log(a);

var fs = [];
  for(var i = 0; i < 10; i++) {
    fs.push(function (){
      console.log(i);
    })
  }

fs.forEach(function(f){
//  f();
})
`,
    _const:
`const ARR = {};
ARR.foo='foo';

console.log('value: ', ARR.foo);`,
    function_arrow:
`function showMenu({title="Заголовок", width:w=100, height:h=200} = {}) {
  console.log(title + ' ' + w + ' ' + h);
}

//showMenu();


let b = [1, 2].map(x => x * 2);
//console.log(b);

let group = {
  title: "Наш курс",
  students: ["Вася", "Петя", "Даша"],

  showList: function() {
    this.students.forEach(
      student => console.log(this.title + ': ' + student)
    )
  }
}

//group.showList();
`,
    spread:
`console.log(...[ 1, 2, 3]);

let first = [ 1, 2, 3];
let second = [ 4, 5, 6];
first.push(...second);

console.log(first);

function addThreeThings( a, b, c){
  let result = a + b + c;
  console.log(result);
}

addThreeThings(...first);
`,
    strings:
`
var salutation = "Hello";
var greeting = salutation + ' world';

console.log(greeting);

//console.log('Blue Whale'.includes('blue'))
//console.log('To be, or not to be, that is the question.'.endsWith('question.'))
//console.log('To be, or not to be, that is the question.'.startsWith('To'))
//console.log('abc'.repeat(2))
`,
   ObjectPrototypes:
`let name = 'Филимон';
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
  zip: 1111,
  sayHi(){
    console.log(this.name)
  }
}

user2.sayHi()

let user3 = Object.assign({},user2,user);
//user3.sayHi();
//console.log(user3);

let animal = {
  walk() {
    alert("I'm walking");
  }
};

let rabbit = {
  __proto__: animal,
  walk() {
    alert(super.walk);
    super.walk();
  }
};

//rabbit.walk();
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

console.log('b: ', b);
console.log('height: ',height);
console.log('firstname: ', firstName);
console.log('lastname: ', lastName);

`
  }
};
export default newCapability;


