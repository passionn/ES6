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








