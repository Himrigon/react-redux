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
`function showMenu(title = "Без заголовка", width = 100, height = 200) {
  console.log(title + ' ' + width + ' ' + height);
}

let option={
title:"Блок"
}

//showMenu();


function f() {}

let g = function () {};

let user = {
  sayHi: function() {}
};
//console.log(f.name,g.name,user.sayHi.name);


let b = [1, 2].map(x => x * 2);


let group = {
  title: "Корзина",
  items: ["Персик", "Ложка", "Гусь", "Лепешка"],

  showList: function() {
    this.items.forEach(
      item => console.log(this.title + ': ' + item)
    )
  }
}

//group.showList();

function f() {
  let showArg = () => console.log(arguments[0]);
  showArg();
}

//f(1)

function decorator(f,ms){
 return function(){
  setTimeout (()=> f.apply(this,arguments),ms)
 }
}
function go(name){
 console.log("let's go ",name);
}
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
let surname = 'surname';
let gender = () => 'gender';

let user={
  name,
  [surname]:'Уржумский',
  [gender()]:'male'
}

let user2={
  name: 'Венеамин',
  adress:'Утопская площадь 2б стр.4',
  zip: 1111,
  sayHi(){
    console.log(this.name)
  },
}

//user2.sayHi()

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
`class User {

  constructor(name,surname) {
    this.name = name;
    this.surname = surname;
  }

  sayHi() {
   console.log(this.name)
  }

  get fullname(){
   return
  }

  set fullname(newValue){
    [this.name,this.surname] = newValue.split(' ');
  }

  static createUser(){
    return new User('Вельвет','Вельветович')
  }
}

let vasya = new User("Вася","Васин");
vasya.fullname='Петя Петин';
let velvet = User.createUser();

//console.log(vasya.fullname)
//console.log(new User("Вася","Васин").fullname);
//console.log(velvet.fullname)

class ChildUser extends User{
  constructor(){
    super('Петя')
  }
  sayHi(){
    super.sayHi()
    alert('from childUser')
  }
}

//console.log(ChildUser.prototype.__proto__ == User.prototype)
//new ChildUser().sayHi();
`,
Symbol:
`let sym = Symbol("name");
let name = Symbol.for("name");
let user = {
  isAdmin: 'Admin',
  name: "Вася",
  age: 30,
  [Symbol.for("isAdmin")]: true
};

//console.log(sym.toString())
//console.log( Symbol("name") == Symbol("name"));
//console.log(Symbol.for("name") == name);
//console.log(Object.keys(user));
//console.log(user[Symbol.for("isAdmin")]);
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

let one = generator.next();
let two = generator.next();

//console.log(JSON.stringify(one));
//console.log(JSON.stringify(two));
//console.log(JSON.stringify(generator.next()));

function* gen(){

  let promise = yield new Promise(
    resolve =>setTimeout(
      ()=>resolve('/js/test/user.json'),3000)
  )

  let result = yield httpGet(promise);

  return результат:
}


function execute(generator, yieldValue) {

  let next = generator.next(yieldValue);

  if (!next.done) {
    next.value.then(
      result => execute(generator, result),
      err => generator.throw(err)
    );
  } else {
    console.log(next.value);
  }

}

execute(gen());


    `,
    Promise:
`let promise = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve("user");
  }, 1000);
});

promise
  .then(
    result => {
      console.log("Fulfilled: " + result);
      return result
    },
    error => {
      console.log("Rejected: " + error);
    }
  ).then(
    result => {
      return httpGet('/js/test/.json');
    }
  ).then(
    response=>{
      console.log(JSON.parse(response)["user"])
    }
  ).catch(
    error => {
      console.log("catch error: ", error)
    }
  )

let urls = [
  '/js/test/user.json',
  '/js/test/promise.json'
];

Promise.all( urls.map(httpGet) )
  .then(
    results => console.log(results),
    error => alert("Ошибка: " + error.message)
       );
`,
    Modules:'',
    Proxy:
`
let dictionary = {
  'Hello': 'Привет',
  'Bye': 'Пока'
};

let dictionaryGet = new Proxy(dictionary, {
  get(target, phrase) {
    if (phrase in target) {
      return target[phrase];
    } else {
      console.log('No phrase: ',phrase);
      return phrase;
    }
  }
})

//console.log(dictionaryGet['Hello'])
//console.log(dictionaryGet['Hell'])

let dictionaryHas = new Proxy(dictionary, {
  has(target, phrase) {
    return true;
  }
});

//console.log("BlaBlaBla" in dictionaryHas);
let dictionaryDelete = new Proxy(dictionary, {
  deleteProperty(target, phrase) {
    return true;
  }
});
delete dictionaryDelete['Hello'];

//console.log('Hello' in dictionary)

function sum(a, b) {
  return a + b;
}

let proxy = new Proxy(sum, {

  apply: function(target, thisArg, argumentsList) {
    console.log('Буду вычислять сумму: ',argumentsList);
    return target.apply(thisArg, argumentsList);
  }
});

//console.log( proxy(1, 2) );
`,
    Assignment_Destructuring:
`let [firstName="Гость", lastName="Анонимный"] = ["Николай","Кустицкий"];

let [first, last, ...rest] = "Пончик Морковка Яичко Коровка".split(" ");

let a = {
  foo: 24,
  height:2
};

let { foo:b, height, time=23 } = a;



//console.log('firstname: ', firstName,'lastname: ',lastName);
//console.log(rest)

//console.log('height: ',height,'b: ', b,'time: ',time);
`
  }
};
export default newCapability;


