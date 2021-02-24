/**
 * 1.避免了引用类型的属性被所有实例共享
 * 2.可以在 Child 中向 Parent 传参
 * 3.融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式
 * 4.组合继承最大的缺点是会调用两次父构造函数。
 */
function Person (name = "person’s name") {
  this.name = name
}

Person.say = function () {
  console.log(this.name)
}

function Student (name, age) {
  Person.call(this, name)
  this.age = age
}

Student.prototype = new Person()
Student.prototype.Constructor = Student

const jack = new Student()
jack.name = 'jack‘s name'
jack.say()
const tom = new Student()
tom.say()