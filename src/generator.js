function *f(){
    console.log('generator 执行了！！');
}

var generator=f();

setTimeout(function(){
    generator.next();
},2000);
