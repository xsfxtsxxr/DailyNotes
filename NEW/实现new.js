function _new (fn, ...args) {
  let o = Object.create(null)
  o.__proto__ = fn.prototype
  let ret = fn.call(o, ...args)
  return typeof ret === 'object' ? ret : o
}

function Student (name, age) {
  this.name = name
  this.age = age
  this.say = function () {
    console.log(`my name is ${this.name}, & i am ${this.age} years old!`)
  }
}

var ll = _new(Student, 'lilei', 18)

ll.say()