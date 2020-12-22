Function.prototype.apply2 = function (context, arr) {
  context = context || window
  context.fn = this
  var ret
  if (!arr) {
    ret = context.fn()
  } else {
    var args = []
    for (var i = 0; i < arr.length; i++) {
      args.push('arr[' + i + ']')
    }
    ret = eval('context.fn(' + args + ')')
  }
  delete context.fn
  return ret
}