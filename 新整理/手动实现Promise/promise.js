const PENDING = 'pending', RESOLVED = 'resolved', REJECTED = 'rejected'

function myPromise (exec) {
  this.state = PENDING
  this.value = null
  this.resolveCbs = []
  this.rejectedCbs = []

  function resolve (value) {
    if (this.state !== PENDING) return
    this.state = RESOLVED
    this.value = value
    this.resolveCbs.forEach(fn => fn(value))
  }
  function reject (reason) {
    if (this.state !== PENDING) return
    this.state = REJECTED
    this.value = reason
    this.rejectedCbs.forEach(fn => fn(reason))
  }

  exec(resolve.bind(this), reject.bind(this))
}

myPromise.prototype.then = function (onFullfilled, onRejected) {
  onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : e => e
  return new myPromise((resolve, reject) => {
    if (this.state === PENDING) {
      this.resolveCbs.push(onFullfilled)
      this.rejectedCbs.push(onRejected)
    }
    if (this.state === RESOLVED) {
      let x = onFullfilled(this.value)
      resolve(x)
    }
    if (this.state === REJECTED) {
      let x = onRejected(this.value)
      reject(x)
    }
  })
}

new myPromise((resolve, reject) => {
  resolve(1)
}).then(res => {
  console.log(res)
  return 2
}).then(res => {
  console.log(res)
  return 3
}).then(res => {
  console.log(res)
})