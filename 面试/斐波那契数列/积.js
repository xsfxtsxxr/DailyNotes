function fabbinaci (n) {
  if (n === 1) return n
  return n * fabbinaci(n - 1)
}

console.log(fabbinaci(5))