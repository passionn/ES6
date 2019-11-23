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



