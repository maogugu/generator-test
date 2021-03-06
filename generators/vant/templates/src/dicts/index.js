/**
 * 字典
 * @example
 * dict.getDictList('user')  // 字典名
 * dict.getDictObj('user')  // 字典名
 * dict.getDictItem('user',2))  // 字典名, key
*/

// 使用方式看type.js
// 注意不要重名哦
const dicts = {
  taskType: { 1: '字典文案1', 2: '字典文案1' }
}

export function getDictList (name) {
  const list = []
  if (dicts[name]) {
    for (const i in dicts[name]) {
      list.push({ key: i, value: dicts[name][i] })
    }
  }
  return list
}
// 返回某项value
export function getDictItem (name, key) {
  return dicts[name][key]
}

// 返回对象
export function getDictObj (name) {
  if (dicts[name]) {
    return { ...dicts[name] }
  }
}
