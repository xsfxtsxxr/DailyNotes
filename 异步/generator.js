// generato会暂停执行，只有调用next才会执行，所以log会在一秒后才打印出来，如果是一般函数，在赋值给变量g时候就执行了，应该立即就会打印log

function* fetch () {
  console.log('执行了')
}

const g = fetch()

setTimeout(() => {
  g.next()
}, 1000)