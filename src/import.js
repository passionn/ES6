import user,{name,NAME} from './export';

user();
console.log(name);
console.log(NAME);

console.log('hello github!');

//模块 中的this；

console.log('this');
console.log(this);

import hello from './export1'

console.log(hello.name);
console.log(hello.data());