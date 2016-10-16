## Generator
generator 是ES6提供的一种异步编程解决方案  
Generator函数是一个状态机封装了多个内部状态，执行Generator函数会返回一个遍历器对象
Generator 的两个特征
. function 关键字与函数名之间有一个星号
. 函数体内使用yield语句 定义不同的内部状态；
```
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
hw.next();
// {value:'hello',done:false}
hw.next();
//{value:'word!',done:false}
hw.next();
//{value:'ending',done:true}
hw.next();
//{value:undefined,done:true}

```

### yield 语句
由于Generator函数返回遍历器对象，只有调用next 方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield 语句就是暂停标志；  
> 普通函数中不能使用yield 语句

```
var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
  var length = a.length;
  for (var i = 0; i < length; i++) {
    var item = a[i];
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  }
};

for (var f of flat(arr)) {
  console.log(f);
}

```
### 与Iterator 接口的关系

### next 方法参数
yield 句本身没有返回值，或者说总是返回undefined。next 方法可以带一个参数，该参数就会被当做上一个yield 语句的返回值。
```
function *f(){
    for(var i=0;true;i++){
        var rest=yield i;
        if(rest){i=-1;}
    }
}

var g=f();

g.next(); // {value:0,done:false}
g.next(); // {value:1,done:false}
g.next(true); //{value:0,done:false}

```

### for of 循环
for... of 循环可以自动遍历Generator 生成的Iterator 对象，因此不再需要调用next 方法；
```
function *foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5

```

### Generator.prototype.return()
函数返回的遍历器对象，还有一个return 方法，可以返回给定的值，并且终结遍历generator 函数
```
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

g.next()        // { value: 1, done: false }
g.return('foo') // { value: "foo", done: true }
g.next()        // { value: undefined, done: true }

```

### Generator 应用
. 异步操作同步化表达
. 流程管理
. 部署Iterator 接口
. 做为数据结构
