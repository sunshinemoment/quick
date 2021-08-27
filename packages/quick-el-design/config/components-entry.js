const fs = require('fs')
const { resolvePath } = require('./path')
const componentsPathPrefix = '../src'
const componentsGroupDirs = ['base']

const componentsEntry = componentsGroupDirs.reduce((pre, next) => {
  const groupPath = resolvePath(`${componentsPathPrefix}/${next}`)
  // 找出第一层的所有文件名称
  const componentsDirNames = fs.readdirSync(groupPath)
  const currentComponentsEntry = componentsDirNames.reduce(
    (innerPre, innerNext) => {
      const itemPath = `${groupPath}/${innerNext}`
      const isDir = fs.statSync(itemPath).isDirectory()
      // 排除componentsGroupDirs下的index.js文件
      if (!isDir) {
        // componentsGroupDirs 下的index.js文件转成相应的xxx.js
        if (innerNext === 'index.js') {
          return {
            ...innerPre,
            [next]: itemPath
          }
        }
        return {
          ...innerPre
        }
      }
      // plugs 内部分模块不需要单独导出
      if (next === 'plugs') {
        return innerPre
      }
      return {
        ...innerPre,
        [innerNext]: `${itemPath}/index.js`
      }
    },
    {}
  )

  return {
    ...pre,
    ...currentComponentsEntry
  }
}, {})

module.exports = componentsEntry
