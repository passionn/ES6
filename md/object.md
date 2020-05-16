## 对象的扩展
#### 属性的简介表示
ES6允许直接写入变量和函数，作为对象的属性和方法。
``` javascript
var foo ='bar';
var baz={foo};
baz //{foo:'bar'}
```
ES6允许在对象之中，只写属性名，不写属性值，这时，属性值等于属性名所代表的变量。
```javascript
function getPoint(){
	var x=1;
	var y=10;
	return {x,y};
}
getPoint(); //{x:1,y:10}
```

#### Object.assign()

基本用法：object.assign 方法用于对象的合并，将元对象的所有可枚举属性，复制到目标对象。
```javascript
var target = { a: 1 };

var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}

```
* ES5 回顾
hasOwnProperty 判断一个对象是否含有特定的自身属性；
in 操作会判断原型链上是否包含特定的属性；

### Object.entries(obj)

返回对象自身可枚举属性的键值对数组
```javascript
	var obj={foo"bar",baz:42}
	console.log(Object.entries(obj)); // [['foo','bar'],['baz','42']]
```
> 使用最多点，统计对象，对value值进行排序；

### Object.create()
创建一个新对象   
使用**现有对象** 提供新创建对象的 __proto__ 

