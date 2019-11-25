console.log('Proxy!');
var obj=new Proxy({},{
    get:function(traget,key,receiver){
        console.log('getting',key);
        return Reflect.get(traget,key,receiver);
    },
    set:function(traget,key,receiver){
        console.log('setting',key);
        return Reflect.set(traget,key,receiver);
    }
});
obj.count=1;

++obj.count;

// 示例
var proxy=new Proxy({},{
    get:function(target, property){
        return 3;
    }
});

var obj=Object.create(proxy);
obj.name; //3

// apply construct
var target=function(){return 'I am target'}
var handler={
    apply(target,cxt,arg){
        return 'I am Proxy';
    }
}
var p=new Proxy(target,handler);
console.log(p());

// construct
var p1=new Proxy(function(){},{
    construct(target,args,newTarget){
        console.log('called: ' + args.join(', '));
        return { value: args[0] * 10 };
    }
});

(new p1(1)).value // 10
console.log((new p1(1)).value); 



