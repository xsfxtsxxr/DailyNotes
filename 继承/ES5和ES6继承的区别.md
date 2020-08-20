# ES5 和 ES6 继承除了在写法上有区别，还有什么不同的地方？

## 答案：生成 this 的顺序不同

```
ES5 是先新建子类的实例对象 this，再将父类的属性添加到子类上，由于父类的内部属性无法获取，导致无法继承原生的构造函数。比如，Array 构造函数有一个内部属性
[[DefineOwnProperty]]，用来定义新属性时，更新 length 属性，这个内部属性无法在子类获取，导致子类的 length 属性行为不正常。
```

```js
function Father(name, age) {
  this.name = name
  this.age = age
}

function Child() {
  Father.call(this, arguments)
}

let child = new Child('jack', 12)
```

```
ES6 是先创建父类的实例对象 this(所以必须先调用父类的 super()方法)，然后再用子类的构造函数修改 this
ES6 允许继承原生构造函数定义子类，因为 ES6 是先新建父类的实例对象this，然后再用子类的构造函数修饰this，使得父类的所有行为都可以继承
```

```js
class MyArray extentds Array {
  constructor(...args){
    super(args)
  }
}

let myarray = new MyArray(1)
```

```
class 继承中，子类必须在 constructor 方法中调用 super 方法，否则新建实例时会报错。这是因为子类自己的 this 对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用 super 方法，子类就得不到 this 对象
```
