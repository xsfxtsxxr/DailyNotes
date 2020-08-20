const p = Promise.resolve();

(async () => {
  await p
  console.log('await end')
})();

p.then(() => {
  console.log('then1')
}).then(() => {
  console.log('then2')
})

