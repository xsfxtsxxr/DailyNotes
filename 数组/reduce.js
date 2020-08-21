var arr = [1, 2, 3, 4, 5]

var a = arr.reduce((memo, curItem, curIndex, array) => {
  return memo + curItem
}, 1)

console.log(a)