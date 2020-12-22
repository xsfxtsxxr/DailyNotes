function debounce1 (fn, wait) {
  var timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}

function debounce2 (fn, wait, immediate) {
  var timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    if (immediate && !timer) {
      fn.apply(this, args)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}