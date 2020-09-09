// 节流，频繁触发事件，只会在指定的时间内执行一次

// 实现1(定时器)
function throttle1 (fn, wait) {
  let timer = null
  return function () {
    let args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        fn.call(this, ...args)
        timer = null
      }, wait)
    }
  }
}

// 实现2(时间戳)
function throttle2 (fn, wait) {
  let previous = 0
  return function () {
    const args = arguments
    let now = Date.now()
    if (now - previous > wait) {
      fn.call(this, ...args)
      previous = now
    }
  }
}