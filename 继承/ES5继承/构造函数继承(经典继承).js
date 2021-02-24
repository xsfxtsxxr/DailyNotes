/**
 * 1.避免了引用类型的属性被所有实例共享
 * 2.可以在 Child 中向 Parent 传参
 * 3.方法都在构造函数中定义，每次创建实例都会创建一遍方法。
 */
function Person (name = "person’s name") {
  this.name = name
  this.say = function () {
    console.log(this.name)
  }
}

function Student (name, age) {
  Person.call(this, name)
  this.age = age
}

const jack = new Student('jack‘s name')
jack.say()
const tom = new Student()
tom.say()