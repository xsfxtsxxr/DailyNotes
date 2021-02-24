/**
 * 1.跟借用构造函数模式一样，每次创建对象都会创建一遍方法。
 */

function createObj (o) {
  var clone = Object.create(o)
  clone.say = function () {
    console.log(this.name)
  }
  return clone
}

const parent = {
  name: 'person’s name'
}


const child = createObj(parent)

child.say()