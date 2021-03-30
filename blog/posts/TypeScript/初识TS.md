---
title: 初识TS
author: Peng
date: 2021/03/30
categories:
- TS
tags:
- TS
---

### 概述

TS -> typescript  javascript 的超集，微软出品，扩充javascript对类型判断和报错提示的不足。

### 开撸代码

 1.interface - > 接口

 ```javascript
  interface A {
    num: number,
    str: string
  }
  let obj:A = {a:123,b:'456'};
 ```

2.联合类型

 ```javascript
  let numOrStr: number|string = 123
 ```
tip: 实在预测不到类型的可以直接使用 any


3.定义数组

```js
// 纯数字类型
let arr: number[] = [1, 2, 3, 4] 
// 纯字符串类型
let arr2: string[] = ['str', 'str', 'str']
// 混合类型
let arr3: any[] = [1, 'str', 'str', 3]

// 使用接口
interface arr {
  [index: number]: number
}
let list: arr = [1, 2, 3, 4]

// 使用范型
let arrF: Array<number> = [1, 2]

```

4.配置

```js
// tsconfig.json
{
    "compilerOptions": {
        // 不报告执行不到的代码错误。
        "allowUnreachableCode": true,
        // 必须标注为null类型,才可以赋值为null
        "strictNullChecks": true,
        // 严格模式, 强烈建议开启
        "strict": true,
        // 支持别名导入:
        // import * as React from "react"
        "esModuleInterop": true,
        // 目标js的版本
        "target": "es5",
        // 目标代码的模块结构版本
        "module": "es6",
        // 在表达式和声明上有隐含的 any类型时报错。
        "noImplicitAny": true,
        // 删除注释
        "removeComments": true,
        // 保留 const和 enum声明
        "preserveConstEnums": false,
        // 生成sourceMap    
        "sourceMap": true,
        // 目标文件所在路径
        "outDir": "./lib",
        // 编译过程中需要引入的库文件的列表
        "lib": [
            "dom",
            "es7"
        ],
        // 额外支持解构/forof等功能
        "downlevelIteration": true,
        // 是否生成声明文件
        "declaration": true,
        // 声明文件路径
        "declarationDir": "./lib",
        // 此处设置为node,才能解析import xx from 'xx'
        "moduleResolution": "node"
    },
    // 入口文件
    "include": [
        "src/main.ts"
    ]
}
```