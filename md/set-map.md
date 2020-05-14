## Set 和Map数据结构
#### 1、set
#### 基本用法
ES6 提供了新的数据结构set，它类似于数组，但成员的值都是唯一的，没有重复的值。   
Set 本身是一个构造函数，用来生成Set数据结构。
``` javascript
var s=new Set();
[2,3,4,5,2,2].map(x=> s.add(x));

for(let i of s){
    console.log(i);
}
// 2 3 5 4
```
结果表明set结构不会添加重复的值。
set 函数可以接受一个数组作为参数，用来初始化；

> 数组去重
``` javascript
[... new Set(arr)]
// 去除字符串中的重复字符
[... new Set('ababbbc')].join('')
```
Array.from方法可以将 Set 结构转为数组。
``` javascript
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
```
> 遍历操作
forEach()
for of
> 利用Set 很容易的实现 并集、交集和差集

### WeakSet
WeakSet 结构与 Set类似也是不重复的值集合；区别：WeakSet成员只能是对象，而不能是其他类型的值；



#### 2、map
它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
``` javascript
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```
Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组
``` javascript
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"

```
Map构造函数接受数组作为参数，实际上执行的是下面的算法。
``` javascript
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"
```
``` javascript
const items = [
  ['name', '张三'],
  ['title', 'Author']
];
const map = new Map();
items.forEach(
  ([key, value]) => map.set(key, value)
);
```
> Map 的键实际上是跟内存地址绑定的
``` javascript
const map = new Map();

const k1 = ['a'];
const k2 = ['a'];
map
.set(k1, 111)
.set(k2, 222);
map.get(k1) // 111
map.get(k2) // 222
```
#### 基本方法
1. size()
2. get(key)
3. set(key,value)
4. has(key)
5. delete(key)
6. clear()

#### 遍历方法

#### 与其他数据结构的互相转换
> map 转化为数组
```javascript
const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);
[...myMap]
```










