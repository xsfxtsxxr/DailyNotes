// 只有await后面异步操作返回了才会执行async函数体中await下面的代码

const p = Promise.resolve();

(async () => {
  await p
  console.log('await end')
})()

console.log('waibu')

p.then(() => {
  console.log('then1')
}).then(() => {
  console.log('then2')
})

console.log('waibu2')