## Async
就是 Generator 函数的语法糖   
进一步说 async 函数完全看作是多个异步操作，包装称一个Promise对象；而await命令就是内部 then 命令的语法糖；

##### 基本用法
async 函数返回一个Promise 对象，可以使用 then 方法添加回调函数；
```javascript
 async function getStockPriceByName(name){
    const symbol = await getStockSymbol(name);
    const stockPrice = await getStockPrice(symbol);
    return stockPrice;
 }

getStockPriceByName('goog').then(function (result) {
  console.log(result);
});
```
> 函数前面有 async 表明函数体内有异步操作，调用该函数时回立即返回一个 Promise 对象；
例如：
```javascript
function timeout(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms)
    })
}

async function asyncPrint(value){
    await timeout(2000);
    console.log(value);
}
asyncPrint('hello word!');

```
async 函数有多种使用形式
```javascript
    //函数声明
    async function foo(){};
    // 变量声明
    var foo= async function(){};
    // 对象方法；
    var obj={async foo(){}}
```
##### 返回Promise 对象
函数内部的 return 语句会成为 then 方法回调函数的参数；  
Promise 状态的变化： 必须等到内部所有 await 命令后面的promise对象执行完 才会改变状态；  

##### await 命令
await 命令后面是一个 Promise 对象，返回该对象的结果；如果不是Promise 就直接返回对应的值；  


