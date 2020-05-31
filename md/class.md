## Class 的基本语法

生成实例对象的传统方法是通过构造函数。
``` javascript
function Point(x,y){
    this.x=x;
    this.y=y;
}
Point.prototype.toString={
    return '('+this.x + ',' + this.y +')';
}
var p=new Point(1,2);

```
新的class写法只是让对象原型的写法更加清晰、更像面向对象变成的语法糖而已。

``` javascript
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    toString(){
        return return '('+this.x + ',' + this.y +')';
    }

}

```
> 注意，定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。 另外，方法之间不需要逗号分隔，加了会报错。

``` javascript
class Point{
    //
}
typeof Point // 'function'
Point === Point.prototype.constructor //true

```
> 上面代码表明 类的数据类型就是函数，类本身就指向构造函数。
类的方法都是定义在 prototype 上面的

__proto__ 并不是语言本身的特性，这是各大浏览器厂商添加的私有属性；有可能存在兼容性   
可以使用 Object.getPrototypeOf() 方法获取实例对象的原型   

##### 静态方法
在方法前加上 static关键字 静态方法不会被实例继承 而是直接通过类赖调用
```javascript
class Point {
    static classmethod(){
        console.log('hello class!');
    }
}

Point.classmethod(); // hello class
var p=new Point();
p.classmethod();// 报错

```
静态方法可以和非静态方法重名   
父类的静态方法可以被子类继承  

###### 类的继承
通过extends 实现继承
```javascript
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    toString(){
        return this.x+this.y
    }
}

class Mpoint extends Point{
    constructor(x,y,color){
        super(x,y);
        this.color=color;
    }

    toString(){
        //return this.x+this.y+this.color;
        //
        return this.color + super.toString();
    }

}
```
继承 必须在构造函数中调用 super 方法；

##### Object.getPrototypeOf()
可以从子类上获取父类   
```javascript
Object.getPrototypeOf(ColorPoint) === Point
```
可以用来判断一个类是否继承了另一个类 
















