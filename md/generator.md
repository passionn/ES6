## Generator
generator 是ES6提供的一种异步编程解决方案  
Generator函数是一个状态机封装了多个内部状态，执行Generator函数会返回一个遍历器对象
Generator 的两个特征
. function 关键字与函数名之间有一个星号
. 函数体内使用yield语句 定义不同的内部状态；
｀｀｀
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

｀｀｀
### yield 语句
由于Generator函数返回遍历器对象，只有调用next 方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield 语句就是暂停标志；
