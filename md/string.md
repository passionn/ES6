## 字符串的扩展

#### 字符串的识别
    includes
#### 多行字符串
```javascript
let string1 =`欢迎来到
    我的世界！`;
console.log(string1);

```
#### 字符串模版
```javascript
let name = "Mike";
let age = 27;
let info = `My Name is ${name},I am ${age+1} years old next year.`
console.log(info);
```
> 字符串模板中的空格和换行都会被保留
> 字符串模版用的不是单引号而是 ``



