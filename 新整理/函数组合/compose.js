function compose () {
  var args = arguments
  var start = args.length - 1
  return function () {
    var result = args[start].apply(this, arguments)
    var i = start
    while (start--) result = args[i].call(this, result)
    return result
  }
}

function compose2 (...funs) {
  if (funs.length === 0) {
    return args => args
  }
  if (funs.length === 1) {
    return funs[0]
  }
  return funs.reduce((a, b) => (...args) => a(b(...args)))
}