// 防抖：频繁触发事件，但是只会在事件触发n秒后才执行，如果在一个事件触发n秒内又触发事件，那就以新的事件时间为准，n秒后再执行。

// 实现 1
// fn 是需要防抖处理的函数
// wait 是时间间隔
function debounce1 (fn, wait = 50) {
  // 通过闭包缓存一个定时器 id
  let timer = null
  // 将 debounce 处理结果当作函数返回
  // 触发事件回调时执行这个返回函数
  return function () {
    const args = arguments
    // 如果已经设定过定时器就清空上一次的定时器
    if (timer) clearTimeout(timer)
    // 开始设定一个新的定时器，定时器结束后执行传入的函数 fn
    timer = setTimeout(() => {
      fn.call(this, ...args)
    }, wait)
  }
}

// 实现 2 (立即执行)
function debounce2 (fn, wait = 50) {
  let timer = null
  return function () {
    const args = arguments
    if (timer) clearTimeout(timer)

    if (!timer) {
      fn.call(this, ...args)
    }

    timer = setTimeout(() => {
      fn.call(this, ...args)
    }, wait)
  }
}