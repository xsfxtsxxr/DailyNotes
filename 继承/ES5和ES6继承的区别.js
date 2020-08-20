// ES5继承
function Super () { }
function Sub () { }

Sub.prototype = new Super();
Sub.prototype.constructor = Sub;

var sub = new Sub();

console.log(Sub.__proto__ === Function.prototype);
// ES6继承
class Super1 { }
class Sub1 extends Super1 { }

var sub1 = new Sub1()
console.log(Sub1.__proto__ === Super1)