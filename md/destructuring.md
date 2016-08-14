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
```
var {name,age}={name:'passion',age:21};
name;//passion
age;//age
```
对象与数组的不同之处，数组元素是按照顺序排列的，变量的取值由位置决定；对象的属性没有次序，变量名必须与属性名相同，才能取到正确的值；
```
var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
foo // error;
```
其实对象的赋值是下面形式的简写；
```
var { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
```
也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后在赋给对应的变量，真正被赋值的是后者，而不是前者。

上面的代码中 真正被赋值的变量 baz,而不是模式foo
