## Proxy 概述
proxy 用于修改某些操作的默认行为；等于在语言层面作出修改，属于一种元编程，即对编程语言进行编程；

proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问都必须先通过这层拦截；
``` javascript
var obj= new Proxy({},{
    get:function(target,key,receiver){
        console.log('getting ${key}!');
        return Reflect.get(target,key,receiver);
    },
    set:function(){
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
});

obj.count = 1
//  setting count!
++obj.count
//  getting count!
//  setting count!
//  2

```
> 注意 要是proxy起作用，必须针对Proxy的实力进行操作，而不是目标对象（上个例子是控对象）进行操作

Proxy 实例也可以作为其他对象的原型对象。
``` javascript
var proxy=new Proxy({},{
    get:function(target, property){
        return 3;
    }
});

var obj=Object.create(proxy);
obj.name; //3

```
#### Proxy 支持拦截的操作
1. get 拦截对象属性的读取
2. set 拦截对象属性的设置
3. apply 拦截Proxy 实例作为函数的调用
4. construct 拦截Proxy 实例作为构造函数的调用

#### get()
可以接受三个参数，依次为目标对象，属性名和Proxy本身
```javascript
var person ={
    name:"passion"
}
var proxy=new Proxy(person,{
    get:function(target,property){
        if(property in target){
            return target[property];
        }else{
            throw new ReferenceError("Property \"" + property + "\" does not exist.");
        }
    }
});

proxy.name //passion
proxy.age //跑出错误

```


