var [a,b]=[1,2];
console.log('a:%d;b:%d',a,b);

//允许使用默认值；
 var [x,y=1,z=3,u=4]=[1,2,undefined,null];
 console.log('x:%d;y:%d;z:%s;u:%s',x,y,z,u);

//对象的解构赋值；
console.log('对象的解构赋值');

var {name,age}={name:'passion',age:12};
console.log('name:%s;age:%d;',name,age);

var {foo:baz}={foo:'aaa',baz:'bbb'};
//console.log('foo:%s',foo); //error
console.log('baz:%s',baz);

console.log('字符串的赋值');

// let {length : len} = 'hello';
// console.log(length);
// console.log(len);
 let {length:len}={length:15,len:20};
 console.log(len);
 console.log(length);

 console.log('函数的解构赋值');

 function add([x, y]){
   return x + y;
 }
 console.log(add([1, 2]));

var newarr=[[1,2],[3,4]].map(([a,b])=> a+b);
console.log(newarr);
