'use strict'

const path = require('path')

const resolvePath = (relativePath) => path.resolve(__dirname, relativePath)
const srcIndex = resolvePath('../src/index.js')
const libIndex = resolvePath('../lib')

module.exports = {
  resolvePath,
  srcIndex,
  libIndex
}
