class Father { }

class Child extends Father { }

console.log(Child.__proto__ === Father, Child.prototype.__proto__ === Father.prototype)

var child = new Child()

console.log(child.__proto__ === Child.prototype)