function *f(){
    console.log('generator 执行了！！');
}

var generator=f();

setTimeout(function(){
    generator.next();
},2000);

function *hello(){
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw=hello();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

function *vervield(){
    var a=yield 2;
    var b=yield 3;
    return 5;
}

var v1=vervield();
console.log('变量！');
console.log(v1.next());

//yield  停止的时机
var yieldtime= function*(a){
    var b=2*(yield 3);
    var c= yield 8;
    return 5;
}
var y1=yieldtime();
console.log('停止时机！');
console.log(y1.next());
console.log(y1.next());
