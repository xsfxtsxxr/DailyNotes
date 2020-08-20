function* fetch () {
  console.log('执行了')
}

const g = fetch()

setTimeout(() => {
  g.next()
}, 1000)