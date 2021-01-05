var arr = [2, 1, 3, 4, 2, 5, 7, 88, 9]

function quickSort (arr) {
  if (arr.length === 0) {
    return arr
  }
  var midIndex = Math.floor(arr.length / 2)
  var midValue = arr.splice(midIndex, 1)[0]
  var left = [], right = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < midValue) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(midValue, quickSort(right))
}

console.log(quickSort(arr))

var arr2 = [2, 1, 3, 4, 2, 5, 7, 88, 9]
function bubbleSort (arr) {
  if (arr.length === 0) {
    return arr
  }
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr2))

function insertSort (arr) {
  if (arr.length === 0) {
    return arr
  }
  var preIndex, currentValue
  for (var i = 1; i < arr.length; i++) {
    preIndex = i - 1
    currentValue = arr[i]
    while (preIndex >= 0 && arr[preIndex] > currentValue) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = currentValue
  }
  return arr
}

console.log(insertSort(arr2))