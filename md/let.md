## let 和 const 命令
### let const 定义块级作用域

``` javascript
{
    let name='passion';
}
console.log(name); //error;
```

> 不存在变量提升，必须先声明后使用；  
> 不允许重复声明  
> const 声明的变量是只读的，不能改变，但是可以为其增加属性  
> 全局变量：var function 声明的变量依然是全局变量的属性；let const class 声明的变量不属于全局变量；   

> var 和函数，函数会优先提升

```javascript
console.log(a); //输入函数题
var a=123;
function a(){
    console.log(a);
}
console.log(a);//123
```
相当于
```javascript
function a(){
    console.log(a);
}
console.log(a); //输入函数题
var a=123;
console.log(a);//123
```

1. 函数形参声明--->函数声明---->变量声明 
2. 参数a会覆盖预编译变量a的默认值，如果有函数，函数会覆盖参数a的值，这个就是先后顺序而已

``` javascript
var a=10;
function fn(a,b){
    console.log(a)//function a(){}   这里输出function a(){}， 不是参数a的值，哈哈
    var a=10;
    console.log(a)//10
    function a(){}
    console.log(a)//10
}
fn(15);
```

请输入：node server ./src/let.js 测试function
