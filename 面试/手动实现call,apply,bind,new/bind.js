Function.prototype.bind2 = function (context) {
  var self = this
  var args = [].slice.call(arguments, 1)
  return function () {
    var newArgs = [].slice.call(arguments)
    return self.apply(context, args.concat(newArgs))
  }
}