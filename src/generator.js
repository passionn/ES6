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
