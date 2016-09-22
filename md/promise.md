## Promise 的含义
Promise 是异步编程的一种解决方案，比创痛的回调函数和事件更强大和合理；  
Promise 简单的说是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果；

#### promise 有以下几个特点
. 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中） Resolved（已完成）和 Rejected（已失败）。
. 一旦装填改变，就不会再变，任何时候都可以得到这个结果。就算状态改变了，你在对Promise 添加回调函数，也立即会得到结果。这与事件完全不同；
### 基本用法
```
var promise =new Promise(function(resolve,reject){
    // some code
    if(/* 成功*/){
        resolve(value);
    }else{
        reject(error)
    }
})
```
Promise 实例生成以后，可以用then 方法分别制定 Resolved 装填和 Reject的回调函数。
```
promise.then(function(value){

},function(error){

})
```

简单示例
 ```
 function timeout(ms){
     return new Promise((resolve,reject)=>{
         setTimeout(resolve,ms,'done');
     });
 }

 timeout(1000).then((value)=>{
     console.log(value);
 })
 ```
如果调用resolve函数和reject 函数时带有参数，那么他们的参数会被传递给回调函数，resolve函数的参数除了正常的值以外，还可能是另一个Promise实例，表示异步操作的结果有可能是一个值，也有可能是另一个一步操作；
```
var p1 = new Promise(function (resolve, reject) {
  // ...
});

var p2 = new Promise(function (resolve, reject) {
  // ...
  resolve(p1);
})

```
### Promise.prototype.then()
作用：为Promise 实例添加状态改变时的回调函数；then 方法的第一个参数是Resolved 状态的会调函数，第二个参数（可选）是 Rejected状态的回调函数；  
采用链式的then 可以指定一组按照次序调用的回调函数。这时，前一个回调函数有可能返回的还是一个promise 对象，这是后返回一个会调函数，就会等待改Promise对象的状态发生变化，才会被调用；

### Promise.prototype.catch()
Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
