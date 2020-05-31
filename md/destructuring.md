## 变量的解构赋值

ES6允许按照一定的模式，从**数组**和**对象**中提取值，对变量进行赋值，这被成为解构；

``` javascript
    var [a,b,c]=[1,2,3];
```
同下面的赋值是相同的
``` javascript
var a=1;
var b=2;
var c=3;
```
#### 解构赋值允许使用默认值
```javascript
var [foo=true]=[];
foo; //true
var [x,y='b']=['a'] // x=a;y=b;
var [x,y='b']= ['a',undefined]; // x=a;y=b;
```
> * ES6使用严格运算符，如果一个数组成员不严格等于undefined 默认值不会生效；

```javascript
var [x=1]=[undefined];
x //1;
var [x=1]=[null];
x //null

```
#### 对象的解构赋值
```javascript
var {name,age}={name:'passion',age:21};
name;//passion
age;//age
```
对象与数组的不同之处，数组元素是按照顺序排列的，变量的取值由位置决定；对象的属性没有次序，变量名必须与属性名相同，才能取到正确的值；
``` javascript
var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
foo // error;
```
其实对象的赋值是下面形式的简写；
``` javascript
var { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
```
也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后在赋给对应的变量，真正被赋值的是后者，而不是前者。

上面的代码中 真正被赋值的变量 baz,而不是模式foo

#### 字符串解构赋值
字符串也可以解构赋值，以为字符串被转化成了一个类似数组的对象
``` javascript
const [a,b,c,d]='hello word';
a;//h
b;//e
c;//l
d;//o

```
#### 函数参数的解构赋值
``` javascript
function add([a,b]){
    return x+y;
}
add([1,2]);

[[1, 2], [3, 4]].map(([a, b]) => a + b);
// [ 3, 7 ]
```
#### 用途
##### 交换变量的值
``` javascript
[x,y]=[y,x];
```
##### 从函数返回多个值
函数只能返回一个值，如果要返回多个值，只能将他们放在数组或者对象里，有了解构赋值，取出这些值就非常方便了
``` javascript
function example() {
  return {
    foo: 1,
    bar: 2
  };
}
var { foo, bar } = example();
```
##### 提取JSON 中的数据
``` javascript
var jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
```

##### 解构赋值的应用
1、不借助第三个变量交换变量；
2、对象的解构赋值：提取JSON 中的数据；