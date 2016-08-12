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

请输入：node server ./src/let.js 测试
