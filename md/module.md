## ES6模块
ES6的class只是面向对象变成的语法糖，升级了ES5构造函数的原型链集成的写法，并没有解决模块化的问题。Module功能就是为了解决这个问题而提出的。

#### 严格模式
ES6的模块自动采用严格模式，不管你有没有在模块头部加上“use strict”;

先前的模块化解决方案  
Commonjs 用于服务端；AMD 用于浏览器   
ES6 模块 是编译时加载 或者称为静态加载

##### export 命令
export 主要用于对外输出接口
``` javascript

// 输出变量
 export var name="passion";

//或者
var name="p";
export {name}

// 输出函数
export function sum(x,y){
    return x+y;
}
// 或者
function sum(x,y){
    return x+y;
}
export {sum};

// 这样输出是报错的
export sum;

```
export 可以导出默认模块和其他多个模块；

##### import 命令
import 命令主要用于导出模块
```javascript
import {name, age} form '*.js'
// 如果使用默认导出
import names from '*.js'; //names 可以随便命名

```
###### import()
import 命令是静态编译的，所以不能写在if 语句中；所以无法实现条件加载；所以import() 函数实现了动态加载；    
import() 返回一个promise 对象；
```javascript
import('*.js')
    .then(module=>{
        console.log(mudule);
    })
    .catch(err=>{

    });
```
使用场景：   
1、按需加载；如点击按钮按需加载；  
2、路由按需加载






