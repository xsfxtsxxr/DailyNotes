// 组合继承
function Father (name, age) {
  this.name = name
  this.age = age
}

Father.prototype.say = function () {
  console.log(`My name is ${this.name}, i am ${this.age} years old.`)
}

function Child (name, age) {
  Father.call(this, name, age)
}

Child.prototype = new Father()
Child.prototype.constructor = Child

var child = new Child('jack', 12)

child.say()