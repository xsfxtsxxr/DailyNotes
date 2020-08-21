// await会跳出当前async函数执行后面的同步代码

console.log('start')

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise resolved')
  }, 3000)
})

async function foo () {
  console.log('foo start')

  const cb = await p1
  console.log(cb)

  console.log('foo end')
}

foo()

console.log('last')