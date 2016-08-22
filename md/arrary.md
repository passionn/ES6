## 数组的扩展

#### Arrary.from
类似数组的对象，Array.from 能将他转化成真正的数组
```
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
```
Arrary.of(3,11,3);//[3,11,2]
Arrary.of(3).length;//1
```
### 数组实例的 find()和 findIndex()
数组实例的find 方法，用于找出第一个符合跳纤的数组成员，参数：一个回调函数，所有数组成员一次执行该回调函数，知道炸出第一个返回值为true 的成员，然后赶回该成员。如果没有符合跳纤的成员，则返回undefined。
```
[1,4,5,-3,10].find((n)=> n<0);
// -5;
```
findIndex 方法的用法与find方法 分厂类似，不同：所有成员不符合条件，则返回-1。  
另外这两个方法都可以发现NaN，弥补了数组的IndexOf方法的不足。
```
[NaN].indexof(NaN); //-1
[NaN].findIndex(y=>Object.is(NaN,y));//0
```
### 数组实例的fill()
fill 防范使用给定值，填充一个数组。
```
['a','b','c'].fill(7);
// [7,7,7]
```
fill 方法可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
```
['a','b','c'].fill(7,1,2); //['a',7,'c']
```
