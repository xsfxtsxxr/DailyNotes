Function.prototype.call2 = function (context) {
  context = context || window
  context.fn = this
  var args = []
  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  var ret = eval('context.fn(' + args + ')')
  delete context.fn
  return ret
}

var obj = {
  value: 1
}

function bar (age) {
  console.log(this.value, age)
}

bar.call2(obj, 18)