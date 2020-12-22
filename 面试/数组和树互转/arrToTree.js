var list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 }
]

function arrToTree (arr) {
  const map = arr.reduce((ret, cur) => {
    ret[cur.id] = cur
    return ret
  }, {})
  console.log(map)
  const result = []
  for (let key in map) {
    const item = map[key]
    if (item.parentId === 0) {
      result.push(item)
    } else {
      const parent = map[item.parentId]
      if (parent) {
        parent.children = parent.children || []
        parent.children.push(item)
      } else {
        result.push(item)
      }
    }
  }
  console.log(result)
  return result
}

arrToTree(list)