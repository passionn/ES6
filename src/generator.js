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
