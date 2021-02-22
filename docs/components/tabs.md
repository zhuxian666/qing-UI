---
title: Tabs - 标签
---
# 标签
## 预览
<tabs-demo></tabs-demo>
 
## 使用方法
```vue
<template>
    <div class="tabs-wrapper">
        <q-tabs :selected.sync="selectedTab">
            <q-tabs-head>
                <q-tabs-item name='tab1'>
                    <q-icon name="thumbs-up"></q-icon>
                    Tab1
                </q-tabs-item>
                <q-tabs-item name='tab2'>Tab2</q-tabs-item>
                <q-tabs-item name='tab3'>Tab3</q-tabs-item>
                <q-tabs-item name='tab4' disabled>Tab4</q-tabs-item>
            </q-tabs-head>
            <q-tabs-body>
                <q-tabs-pane name='tab1'>内容1</q-tabs-pane>
                <q-tabs-pane name='tab2'>内容2</q-tabs-pane>
                <q-tabs-pane name='tab3'>内容3</q-tabs-pane>
                <q-tabs-pane name='tab4'>内容4</q-tabs-pane>
            </q-tabs-body>
        </q-tabs>
    </div>
</template>

<script>
  export default {
    data() { return { selectedTab: 'tab1' } }
  }
</script>
```
此组件的 i-tabs i-tabs-item i-tabs-pane 必须有一一对应的 name。



## 选项
1. 默认高亮状态 q-tabs 需要设置 selected 属性来确定默认标签。
  你可以这样：:selected.sync="selectedTab",其中 selectedTab 是你需要传递的默认值。
  并且该标签的子组件应该是 q-tabs-head 和 q-tabs-body ，否则你会得到一个警告。
2. disabled 状态 disabled 属性用于 q-tabs-item 标签，可以设置该标签的不可用状态。
