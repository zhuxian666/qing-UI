---
title: Layout - 布局
---
# 布局
## 预览
<layout-demo></layout-demo>
 
## 使用方法
```html
<template>
    <div class="wrapper">
        <q-layout>
            <q-header> header</q-header>
            <q-layout>
                <q-sider> sider</q-sider>
                <q-content> content</q-content>
            </q-layout>
            <q-footer> footer</q-footer>
        </q-layout>
        <br>
        <q-layout>
            <q-header> header</q-header>
            <q-content> content</q-content>
            <q-footer> footer</q-footer>
        </q-layout>
        <br>
        <q-layout>
            <q-header> header</q-header>
            <q-layout>
                <q-sider> sider</q-sider>
                <q-layout>
                    <q-content> content</q-content>
                    <q-footer> footer</q-footer>
                </q-layout>
            </q-layout>
        </q-layout>
    </div>
</template>
```

## 选项

提供基础布局，样式自定义。
### 组件概述

* q-layout ：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。
* q-header ：顶部布局，其下可嵌套任何元素，只能放在 Layout 中。
* q-sider ：侧边栏，其下可嵌套任何元素，只能放在 Layout 中。
* q-content ：内容部分，其下可嵌套任何元素，只能放在 Layout 中。
* q-footer ：底部布局，其下可嵌套任何元素，只能放在 Layout 中。

