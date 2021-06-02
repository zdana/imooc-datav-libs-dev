// 使用node中的path包
const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')
// 输入路径和输出路径，__dirname表示当前目录路径
const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/imooc.datav.js')
const outputEsPath = path.resolve(__dirname, './dist/imooc.datav.es.js')
module.exports = {
  input: inputPath,
  // output一次性输出多个模块使用数组对象，若为1个则用对象
  output: [{
    file: outputUmdPath,
    // 表示输出的模块协议
    format: 'umd',
    name: 'imoocDatav',
    globals: {
      'vue': 'vue'
    }
  }, {
    file: outputEsPath,
    format: 'es',
    globals: {
      'vue': 'vue'
    }
  }],
  plugins: [
    vue(),//vue应该放在前面
    resolve(),
    commonjs(),
    babel({
      // 表示bulid时该文件不被打包
      exclude: 'node_modules/**'
    }),
    json(),
    postcss({
      plugins: []
    })
  ],
  // 模块为外部变量进行引用,也就是在bulid时以外部模块的形式导入
  // 打包时代码不会一起打包进去
  external: [
    'sam-test-data'
  ]
}