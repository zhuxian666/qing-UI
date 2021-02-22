# Light UI - 一个基于Vue的轻量级UI组件
作者：Yang

## 介绍
这是我学习Vue的过程中做的一个UI，其中包括了8个经常会用到的组件，希望会对你有所帮助。

## 使用

使用本框架之前，请在 css 中开启 border-box
```
*{margin: 0;padding: 0;box-sizing: border-box;}
*::before,*::after{box-sizing:border-box}
```
### 安装 
npm

    npm i --save light-ui-demo
    
yarn

    yarn add light-ui-demo    
    
### 引入 

```vue
import {Button} from 'light-ui-demo'
import Vue from 'vue'

export default {
  name: 'app',
  components: {
        'q-button':Button,
 }
}
```    

## 文档

[light-ui 官网](https://zhuxian666.github.io/q-ui/)
