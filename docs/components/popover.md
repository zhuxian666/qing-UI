---
title: Popover - 弹出层
---

# 弹出层
## 预览
<popover-demo></popover-demo>
 
## 使用方法

```html
<template>
    <div class="popover-wrapper">
        <q-popover position="bottom">
            <template slot="content">
                popover 中的内容
            </template>
            <q-button>下方显示内容</q-button>
        </q-popover>
        <q-popover>
            <template slot="content">
                popover 中的内容
            </template>
            <q-button>点击显示</q-button>
        </q-popover>
        <q-popover trigger="hover">
            <template slot="content">
                popover 中的内容
            </template>
            <q-button>hover 显示内容</q-button>
        </q-popover>
    </div>
</template>
```

## 选项

    Popover 组件支两个选项： position 用于设置显示位置； trigger 用于设置出发事件

### 1. position

position 默认为 top ，可选择的参数为 top , left , right , bottom ,分别设置 popover 显示的方位。
### 2. trigger

trigger 默认为 click ,,用于设置触发 popover 显示的事件。 除此之外还支持 hover 
