<<<<<<< HEAD
//基本类型
=======

//基本（原始）类型
>>>>>>> ae5354f3deecdeae99953ed39bfdccd49c73cd55
console.log(typeof123); //number
console.log(typeof true); //boolean
console.log(typeof "abc"); //string
console.log(typeof null); //object
console.log(typeof undefined); //undefined

var arr = [1,2,3];
console.log(arr instanceof Array); //true
console.log(aa instanceof Object); //true

var foo = function(){
console.log(12);
}
function fee(){
console.log(23);
}
console.log(foo instanceof Function); //true
console.log(foo instanceof Object); //true

var obj1 = {"key":2};
var obj2 = obj1;
obj2.key = 3;
console.log(obj1.key); //3

var obj1 = {"key":2};
var obj2 = obj1;
obj2.key = 3;
console.log(obj1.key); //3
obj2 = {"key":4};
console.log(obj1.key); //3

var obj_a = {v:"a"};
var obj_b = obj_a;
obj_b.v = "b";
console.log(obj_a,obj_b); //{v:"b"} {v:"b"}
obj_b = {v:"c"};
console.log(obj_a,obj_b); //{v:"b"} {v:"c"}

var a = 2;
var b = 2;
a == b; //true

var c = [1,2];
var d = [1,2];
c === d; //false
c == d; //false
d = c;
c === d; //true

var a = [1,2];
var b = [1,2];
console.log(a == b); //false
b = a;
console.log(a == b); //true

var a = 123;
var b = new Number(123);
console.log(a === b); //false
console.log(a == b); //true

var a = 123;
function foo(x){
x = 345;
}
foo(a);
console.log(a); //123

var a = {y:123};
function foo(x){
x.y = 345;
}
foo(a);
console.log(a.y); //345

var a = {y:123};
function foo(x){
x.y = 345;
}
foo(a);
console.log(a.y); //345

var a = {y:123};
function foo(x){
x.y = 345;
x = {y:456};
}
foo(a);
console.log(a.y); //345

var a = {y:123};
function foo(x){
x = {y:456};
x.y = 345;
}
foo(a);
console.log(a.y); //123

Number("123"); //123
var a = Number("xx1s123"); //undefined
a; //NaN
typeof NaN; //"number"

Number instanceof Function; //true
Math instanceof Function; //false
Number instanceof Object; //true
Math instanceof Object; //true


