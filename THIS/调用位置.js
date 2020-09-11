function baz () {
  console.log('baz')
  debugger
  bar()
}

function bar () {
  console.log('bar')
  debugger
  foo()
}

function foo () {
  console.log('foo')
  debugger
}

baz()