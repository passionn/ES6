## Reflect
1. 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。也就是说，从Reflect对象上可以拿到语言内部的方法
2. 修改某些Object方法的返回结果，让其变得更合理；比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj, name, desc)则会返回false

> 面试题 Object.defineProperty() 的不足；解答：
``` javascript
// 变量一但定义为基本类型；则无法添加属性
var name="passion";
name.age=12;
// 再严格模式下报错； 切换为Object.defineProperty方式，依旧提示错误
var username = 'yiifaa'
Object.defineProperty(username, 'from', {
    value : 'china'
})
console.log(username.from);

```
3.  让Object操作都变成函数行为;
某些Object操作是命令式，比如name in obj和delete obj[name]，而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为
```javascript
// 老写法
'assign' in Object // true

// 新写法
Reflect.has(Object, 'assign') // true
```
4. Reflect对象的方法与Proxy对象的方法一一对应
