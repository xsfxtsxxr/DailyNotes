function deepCopy (obj, findArr = []) {
  if (typeof obj !== 'object') return
  var newObj = obj instanceof Array ? [] : {}
  if (findArr.find(obj)) {
    newObj = obj
  } else {
    findArr.push(obj)
    for (var key in obj) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key], findArr) : obj[key]
    }
  }
  return newObj
}