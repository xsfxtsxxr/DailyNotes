function shallowCopy (obj) {
  if (typeof obj !== 'object') return
  var newObj = obj instanceof Array ? [] : {}
  for (var key in obj) {
    newObj[key] = obj[key]
  }
  return newObj
}