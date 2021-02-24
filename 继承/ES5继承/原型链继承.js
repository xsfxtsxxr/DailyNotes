/**
 * 1.引用类型的属性被所有实例共享，举个例子：
 * 2.创建子实例时候不能向父函数传参
 */
function Person () {
  this.name = "person’s name"
  this.say = function () {
    console.log(this.name)
  }
}

function Student () {

}

Student.prototype = new Person()

const jack = new Student()

jack.say()