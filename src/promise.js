function timeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms,'done');
    });
}

timeout(1000).then((value)=>{
    console.log(value);
})

//异步加载图片的例子

function loadImageAsync(url){
    return new Promise((resolve,reject)=>{
        var image=new Image();

        image.onload=function(){
            resolve(image);
        }

        image.onerror=function(){
            reject('error');
        }

        image.src=url;

    });
}

loadImageAsync('aaa').then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error);
});

//promise，链式调用

function promiseChar(val){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(val+2);
        },3000);
    });
}

function promiseChar1(val){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(val+2);
        },2000);
    });
}

//哎呀 这样不行啊！！！
promiseChar(5).then(function(value){
    console.log(value);
    return value;
}).then(promiseChar1)
.then(function(value){
    console.log(value);
});

var p1=Promise.resolve(1);
p1.then(promiseChar)
.then(promiseChar1);

function doubleUp(value) {
    return value * 2;
}
function increment(value) {
    return value + 1;
}
function output(value) {
    console.log(value);// => (1 + 1) * 2
}

/*var promise = Promise.resolve(1);
promise
    .then(increment)
    .then(doubleUp)
    .then(output)
    .catch(function(error){
        // promise chain中出现异常的时候会被调用
        console.error(error);
    });
    */
