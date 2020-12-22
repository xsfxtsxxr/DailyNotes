function throttle1 (fn, wait) {
  var previous = 0
  return function (...args) {
    var now = +new Date()
    if (now - previous > wait) {
      fn.apply(this, args)
      previous = now
    }
  }
}

function throttle2 (fn, wait) {
  var timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, wait)
    }
  }
}