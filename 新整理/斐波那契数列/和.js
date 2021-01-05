function fabbinaci (n) {
  if (n < 2) return n
  return fabbinaci(n - 1) + fabbinaci(n - 2)
}

console.log(fabbinaci(20))