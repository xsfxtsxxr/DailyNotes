var arr = [1, 2, [3, 4], [5, 6, [7, 8]]]

function flaten (arr) {
  return arr.reduce(function (pre, cur, idx, arr) {
    return pre.concat(Array.isArray(cur) ? flaten(cur) : cur)
  }, [])
}

console.log(flaten(arr))


function flaten2 (arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flaten2(arr))