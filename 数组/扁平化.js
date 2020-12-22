var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]
// 第一种
function flat (arr) {
  return Array.from(new Set(arr.toString().split(','))).sort((a, b) => a - b).map(item => Number(item))
}
// console.log(flat(arr))

// 第二种 flat函数在浏览器中才有，node环境没有
function flat2 (arr) {
  return Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b)
}
// console.log(flat2(arr))

// 第三种 利用递归执行
Array.prototype.flat = function () {
  return [].concat(...this.map(item => Array.isArray(item) ? item.flat() : [item]))
}
Array.prototype.uique = function () {
  return Array.from(new Set(this))
}
const sort = (a, b) => a - b

// console.log(arr.flat().uique().sort(sort))

// 第四种 利用while循环
function flatten (arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

flatten(arr)

// 第五中递归reduce
var arrReduce = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]
var flatReduce = function (arr) {
  return arr.reduce(function (ret, cur, idx, arr) {
    return ret.concat(Array.isArray(cur) ? flatReduce(cur) : cur)
  }, [])
}

console.log(flatReduce(arrReduce))