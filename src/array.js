//扩展运算符

var a1=[1,2];
console.log('扩展运算符', ...a1 );
function add(arr){
  for(var i=0;i<arguments.length;i++){
    console.log(arguments[i]);
  }
}

add(...a1);




let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
let arr2 = Array.from(arrayLike);
console.log(arr2);


let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('Resolved.');
});

console.log('Hi!');