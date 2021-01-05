function curry (fn, length) {
  length = length || fn.length
  return function (...args) {
    if (args.length < length) {
      return curry(fn.bind(this, ...args), length - args.length)
    } else {
      return fn.apply(this, args)
    }
  }
}

const fn = curry(function (a, b, c) {
  console.log(a, b, c)
})

// var f1 = fn('a')
// var f2 = f1('b')
// var f3 = f2('c')

fn('a')('b')('c')