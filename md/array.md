## 数组的扩展

#### Arrary.from
类似数组的对象,可遍历的对象（Set 和 Map），Array.from 能将他转化成真正的数组
``` javascript
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

```

### Arrary.of()
用于将一组值，转换为数组
``` javascript
Array.of(3,11,3);//[3,11,2]
Array.of(3).length;//1s
```
### 数组实例的 find()和 findIndex()
数组实例的find 方法，用于找出第一个符合条件的数组成员，参数：一个回调函数，所有数组成员一次执行该回调函数，知道找出第一个返回值为true 的成员，然后赶回该成员。如果没有符合条件的成员，则返回undefined。
``` javascript
[1,4,5,-3,10].find((n)=> n<0);
// -5;
```
findIndex 方法的用法与find方法 类似，不同：所有成员不符合条件，则返回-1。  
另外这两个方法都可以发现NaN，弥补了数组的IndexOf方法的不足。
```javascript
[NaN].indexof(NaN); //-1
[NaN].findIndex(y=>Object.is(NaN,y));//0
```
### 数组实例的fill()
fill 防范使用给定值，填充一个数组。
``` javascript
['a','b','c'].fill(7);
// [7,7,7]
```
fill 方法可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
``` javascript
['a','b','c'].fill(7,1,2); //['a',7,'c']
```
### 数组实例的 includes() 
Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似
```javascript
    [1, 2, 3].includes(2)     // true
    [1, 2, 3].includes(4)     // false
    [1, 2, NaN].includes(NaN) // true
```
indexOf方法有两个缺点，一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。二是，它内部使用严格相等运算符（===）进行判断，这会导致对NaN的误判

```javascript
[NaN].indexOf(NaN)
// -1
[NaN].includes(NaN)
// true
```
### 数组的find() 和findIndex()
数组实例的find方法，用于找出数组中第一个符合条件的成员；  
参数是一个函数  
返回值是 找到的值 找不到就返回 undefined
```javascript
    [1,2,5,-10,8].find(e=>{return e<0}); // 返回-10
```
> 注意和 includes()的区别 前者是返回 布尔值 后者是返回找到的数组成员；



