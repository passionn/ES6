//let 定义 块级作用于；
{
    let name='passion';
    console.log(name);
}
//console.log(name);

//＊ 注意：不存在变量的提升；必须先声明后使用；
//＊ 暂时行死区；但是babel 在转换过程中处理了这中错误；
var tmp = 123;
if (true) {
  tmp = 'abc'; // ReferenceError
  console.log(tmp);
  let tmp;
}

//* 不允许重复声明；
{
    let name=123;
    //let name=456; //报错
}

//const 声明的变量是只读的不能改变；但是可以为其增加属性；

//全局变量；var function 声明的全局变量依然是全局变量的属性；
//let class const 声明的对象不属于全局；

//箭头函数；
/*
* 箭头函数 中大括号，相当于 结构赋值；
*/
var fun= ({name})=> {
	console.log('箭头函数！！');
	console.log(name);
}

fun({name:'passionn!'});

//test
for(var i=0;i<5;i++){
	setTimeout(function(){
		console.log(i);
	},0)
}

for(var i=0;i<5;i++){
	(function(index){
		setTimeout(function(){
			console.log(i);
		},0);
	})(i);
}