/*
 * 导出默认的对象;
 */
export default function() {
    console.log('hello export');
}

/*
 * 分别导出多个变量 通过import {} 导入。和下面的 导出是一样的；
 */
export const NAME = 'zhangpan';
export const NAMEA = 'passionn';

const name = 'passion';
const age = 25;

/*
 * 导出对象 必须通过 import {name,age} 引用，对象可以省略不需要的属性；
 */
export {
    name,
    age
};

/*注意*/
/*
 * export 命令是规定的对外接口，必须与模块内壁的变量建立一一对应关系；
 */

// 下面的代码会报错，因为导出的是了一个变量而不是一个接口；

/*
	const m=1;
	export m;
*/
//正确写法；

var m = 1;
export {
    m
}; //或者 export var m=1;
