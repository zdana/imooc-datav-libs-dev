## 组件库

### 一、搭建组件库
1. 创建
+ 创建项目文件夹 mkdir 项目名字
+ 进入文件夹初始化对象
  ```
  npm init -y
  ```

2. 安装
+ 安装rollup  
  ```
  rollup npm install -D rollup
  ```
+ -D 表示局部安装，不加则表示全局安装

3. 修改 package.json 中scripts 的test
+ "test":"内容......"更改为："dev":"rollup"

4. 做打包
+ 创建src目录，src中创建index.js
+ index中写入操作代码，末尾一行为export default {}
+ 创建开发模式的配置文件：rollup.config.dev.js
+ 创建正式模式的配置文件：rollup.config.prod.js

5. rollup.config.dev.js文件内容配置
+ 引用node的path包
+ 配置输入/输出路径
  ```
    const inputPath = path.resolve(__dirname, './src/index.js')
    const outputPath = path.resolve(__dirname, './dist/imooc.datav.js')
  ```
+ 模块导出
  ```javaScript
  module.exports = {
    input:inputPath,
    output:{
      file:outputPath,
      // 表示输出的模块协议
      format:'umd',
      name:'imoocDatav'
    }
  }
  //output可为数组，可定义多个output
  //format为umd时，必须有name
  ```

6. 修改package.json文件
```
  "scripts": {
    "dev": "rollup -wc rollup.config.dev.js"
  },
```
+ -wc 表示处于监听状态，当rollup.config.dev.js内容发生修改时会自动打包，-c则表示当前打包，rollup.config.dev.js修改后需要再次启动命令行

7. 完成
+ 运行 
  ```
  npm run dev
  ```
+ 在根目录下会创建一个dist文件夹，文件夹中有一个名为imooc.datav.js的文件

8. 使用
+ example中创建html文件，script导入imooc.datav.js

### 二、模块化标准
（主要是3种）
+ umd：导出的模块是一个js的function
+ cjs(commonjs)：nodejs中使用的一种模块化标准
+ es：es6中新增，浏览器默认不支持；使用时需要在script标签中加入type="module"，但需要放到web服务器上

### 三、vue复杂项目/组件的开发
1. 配置复杂插件
+ rollup-plugin-node-resolve (加载npm模块的插件)
+ rollup-plugin-commonjs (bulid时支持commjs类型文件)
+ rollup-plugin-babel (bulid之后低版本浏览器可支持es6语法)
+ rollup-plugin-json (打包时支持json文件的打包)
+ rollup-plugin-terser (打包时对文件进行压缩，减小压缩包体积,只写在...prod.js文件中)
+ rollup-plugin-vue (对vue文件进行打包,一定要放在第一个位置)
+ @vue/compiler-sfc (对vue文件进行打包,由于上一个插件需要用到本插件，因此不需要导入) 
+ rollup-plugin-postcss (对vue文件进行打包,需要导入)
+ sass (对vue文件进行打包,由于上一个插件需要用到本插件，因此不需要导入)
2. 使用插件
```javaScript
  //rollup.config.dev.js
  const resolve = require('rollup-plugin-node-resolve')
  module.exports={
    ...
    plugins:[
      resolve()
    ]
  }
```
3. node中默认情况先只允许使用commonjs语法，无法使用es6语法
+ 解决方案
  + 安装babel/node和babel/core
  + 创建.babelrc文件
  + 安装@babel/preset-env
+ babel插件是将es6语法转换成es5语法，使其可在node中使用
+ babel-node使用命令行调试
  ```
  bable-node
  require('./src/index.js').default(10)
  //表示调用index.js中的random函数
  .exit //退出bable-node语法
  ```
4. tree-shaking机制
+ bulid时没有备用到的代码都不会被打包