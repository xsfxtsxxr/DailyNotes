/**
 * 这种方式的高效率体现它只调用了一次 Parent 构造函数，并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。
 * 与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。
 * 开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。
 */

function Person (name) {
  this.name = name
}

Person.prototype.say = function () {
  console.log(this.name)
}

function Student (name) {
  Person.call(this, name)
}

const F = function () { }

F.prototype = Person.prototype

Student.prototype = new F()

const jack = new Student('jack‘s name')

jack.say()