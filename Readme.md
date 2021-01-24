# 组织一个项目
1. npm init 初始化文件夹为项目
    * 目标生成package.json
2. 增加两个文件夹，
    * 一个放后端程序
    * 一个放前端web代码
3. 后端写一个简单的程序，
    * index.js 这个命名一般是约定俗称的名字，符合程序员习惯
    * console.log("我是后后端"); 一行代码
4. cli 中执行该后端程序
    * node xxx/xxx/xx/index.js
5. 修改package.json文件
    * 修改脚本部分，自己写一个快速执行的方法。
```json
  "scripts": {
    "dev":"node src/index.js"
  },
```
6. cli 中，用npm工具，执行我们写的快捷命令
    * npm run dev
7. 可以利用IDE，VSCode自带的快捷操作，执行方法