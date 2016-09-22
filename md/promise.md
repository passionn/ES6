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
