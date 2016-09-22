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
