## 对象的扩展
#### 属性的简介表示
ES6允许直接写入变量和函数，作为对象的属性和方法。
```
var foo ='bar';
var baz={foo};
baz //{foo:'bar'}
```
ES6允许在对象之中，致谢属性名，不写属性值，这时，属性值等于属性名所代表的变量。
```
function getPoint(){
	var x=1;
	var y=10;
	return {x,y};
}
getPoint(); //{x:1,y:10}
```
