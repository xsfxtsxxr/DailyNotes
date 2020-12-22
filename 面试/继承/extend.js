// 1.原型链继承
function Father () {
  this.names = ['kevin', 'daisy']
}

Father.prototype.sayName = function () {
  console.log(this.names)
}

function Child () {

}

Child.prototype = new Father()

const child = new Child()

child.sayName()

// 2.经典继承（构造函数继承）
function Father2 (name) {
  this.name = name
}
function Child2 (name, age) {
  Father2.call(this, name)
  this.age = age
}
const child2 = new Child2(18)

console.log(child2.age)
// child2.sayName() 父的方法必须写在构造函数中，每次实例化都要创建一次

// 3.组合继承
function Child3 (name, age) {
  Father2.call(this, name)
  this.age = age
}

Child3.prototype = new Father2()
Child3.prototype.constructor = Child3

const child3 = new Child3()
