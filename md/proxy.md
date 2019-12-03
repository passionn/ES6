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
#### apply()
apply 方法拦截函数的调用，或者call，apply的调用；
apply 接受三个参数，目标对象，目标对象上下文（this），和目标对象的参数数组
``` javascript
    var target=function(){return 'I am target'}
    var handler={
        apply(target,cxt,arg){
            return 'I am Proxy';
        }
    }
    var p=new Proxy(target,handler);
    p();
```

### construct()
用于拦截new 命令
construct 接受三个参数 
1. target：目标对象
2. args：构造函数的参数对象
3. newTarget 创造实例对象时，new命令作用的构造函数（下面例子的p）
```javascript
var p=new Proxy(function(){},{
    construct(target,args,newTarget){
        console.log('called: ' + args.join(', ');
        return { value: args[0] * 10 };
    }
});

(new p(1)).value //10

```
> construct方法返回的必须是一个对象，否则会报错。

#### has()
has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符。

has方法可以接受两个参数，分别是目标对象、需查询的属性名。


### defineProperty()
defineProperty 方法拦截了 Object.defineProperty操作
``` javascript
var handler = {
  defineProperty (target, key, descriptor) {
    return false;
  }
};
var target = {};
var proxy = new Proxy(target, handler);
proxy.foo = 'bar' // 不会生效

```






