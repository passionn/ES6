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
也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为
```javascript
Proxy(target,{
    set:function(target,name,value,receiver){
        var success = Reflect.set(target, name, value, receiver);
        if (success) {
            console.log('property ' + name + ' on ' + target + ' set to ' + value);
        }
        return success;
    }
})

```
> 它采用Reflect.set方法将值 赋值给对象的属性，确保完成原有的行为，然后再部署额外的功能。
下面是另一个例子。
``` javascript
var loggedObj = new Proxy(obj, {
  get(target, name) {
    console.log('get', target, name);
    return Reflect.get(target, name);
  },
  deleteProperty(target, name) {
    console.log('delete' + name);
    return Reflect.deleteProperty(target, name);
  },
  has(target, name) {
    console.log('has' + name);
    return Reflect.has(target, name);
  }
});

```
上面代码中，每一个Proxy对象的拦截操作（get、delete、has），内部都调用对应的Reflect方法，保证原生行为能够正常执行。添加的工作，就是将每一个操作输出一行日志。

## 2. 静态方法
1. 
