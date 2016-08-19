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


