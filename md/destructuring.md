## 变量的解构赋值

ES6允许按照一定的模式，从数组和对象中提取值，对变量进行赋值，这被成为解构；

```
    var [a,b,c]=[1,2,3];
```
同下面的赋值是相同的
```
var a=1;
var b=2;
var c=3;
```
#### 解构赋值允许使用默认值
```
var [foo=true]=[];
foo; //true

var [x,y='b']=['a'] // x=a;y=b;
var [x,y='b']= ['a',undefined]; // x=a;y=b;
```
> * ES6使用严格运算符，如果一个数组成员不严格等于undefined 默认值不会生效；

```
var [x=1]=[undefined];
x //1;
var [x=1]=[null];
x //null

```
#### 对象的解构赋值
