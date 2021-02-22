---
title: 快速上手
---
# 快速上手
## 引入必要资源
```js

 import {Button} from "qing-ui-demo";
 import "qing-ui-demo/dist/index.css";

```
    

## 注册组件
```js
    export default {
      name: "ComponentName",
      components: {
        "q-button": Button,
      },
    }
```
   

## 使用

代码：
```vue
    <template>
      <div>
        <q-button>默认按钮</q-button>
      </div>
    </template>
```
    

效果： 

<get-started-button-demo></get-started-button-demo>
