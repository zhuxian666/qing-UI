---
title: Grid - 栅格
---

# 栅格

24 栅格系统。
## 预览
<grid-demo></grid-demo>
 
## 使用方法
```html
<template>
    <div class="grid-wrapper">
        <q-row class="row">
            <q-col class="item" span="24">col-24</q-col>
        </q-row>
        <q-row>
            <q-col class="item" span="12">col-12</q-col>
            <q-col class="item" span="12">col-12</q-col>
        </q-row>
        <q-row class="row">
            <q-col class="item" span="8">col-8</q-col>
            <q-col class="item" span="8">col-8</q-col>
            <q-col class="item" span="8">col-8</q-col>
        </q-row>
        <q-row class="row">
            <q-col class="item" span="6">col-6</q-col>
            <q-col class="item" span="6">col-6</q-col>
            <q-col class="item" span="6">col-6</q-col>
            <q-col class="item" span="6">col-6</q-col>
        </q-row>
    </div>
</template>
```

## 选项
### Row 选项
#### 1. gutter（排水沟；槽）

通过给 Row 设置 gutter 属性, 可以让栅格有间隔。单位为 px 。
预览
<gutter-demo></gutter-demo>
代码
```html
<template>
    <div class="gutter-wrapper">
        <q-row gutter="30">
            <q-col class="item" span="12"> <span> col-12 gutter-30</span> </q-col>
            <q-col class="item" span="12"> <span> col-12 gutter-30</span> </q-col>
        </q-row>
        <q-row gutter="5">
            <q-col class="item" span="8"> <span> col-8 gutter-5</span> </q-col>
            <q-col class="item" span="8"> <span> col-8 gutter-5</span> </q-col>
            <q-col class="item" span="8"> <span> col-8 gutter-5</span> </q-col>
        </q-row>
        <q-row gutter="40">
            <q-col class="item" span="12"> <span> col-12 gutter-40</span> </q-col>
            <q-col class="item" span="12"> <span> col-12 gutter-40</span> </q-col>
        </q-row>
    </div>
</template>
```

#### 2. align

通过给 Row 设置 align 属性, 可以定义其子组件在该节点里面的排版方式。
预览
<align-demo></align-demo>
代码

```html
<template>
    <div class="align-wrapper">
        <q-row class="row" align="left">
            <q-col class="item" span="8">left</q-col>
            <q-col class="item" span="8">left</q-col>
        </q-row>
        <q-row class="row" align="center">
            <q-col class="item" span="8">center</q-col>
            <q-col class="item" span="8">center</q-col>
        </q-row>
        <q-row class="row" align="right">
            <q-col class="item" span="8">right</q-col>
            <q-col class="item" span="8">right</q-col>
        </q-row>
    </div>
</template>
```
#### Col 选项
Col 的选项有 span, offset 以及响应式相关的 ipad, narrowPc, pc, widePc 这些。


### 1. span

栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。通过设置 span 属性来实现。 例如：三个等宽的列可以使用<i-col span="8">列</i-col> 来创建其中一个，其余两个再复制两份。
#### 2. offset

使用 offset 属性,可以将列向右侧偏。
例如，offset="4" 将元素向右侧偏移了 4 个列（column）的宽度。
预览 
<offset-demo></offset-demo>
代码
```html
<template>
    <div class="offset-wrapper">
        <q-row class="row">
            <q-col class="item" span="7"> <span>col-7</span> </q-col>
            <q-col class="item" span="7" offset="2"> <span>col-7 offset-2</span> </q-col>
            <q-col class="item" span="7" offset="1"> <span>col-7 offset-1</span> </q-col>
        </q-row>
        <q-row class="row">
            <q-col class="item" span="8"> <span>col-8</span> </q-col>
            <q-col class="item" span="5" offset="2"> <span>col-5</span> </q-col>
            <q-col class="item" span="5" offset="4"> <span>col-5</span> </q-col>
        </q-row>
        <q-row class="row">
            <q-col class="item" span="9" > <span>col-9</span> </q-col>
            <q-col class="item" span="3" offset="2"> <span>col-3</span> </q-col>
            <q-col class="item" span="4" offset="6"> <span>col-4</span> </q-col>
        </q-row>
    </div>
</template>
```
#### 3. 响应式

支持ipad 、narrowPc 、pc 、widePc 四种设备的响应式设置。
若不给 Col 这四个属性，默认为 手机端响应，span值为24。
注意： 若设置这四个属性，则需要对应属性 + offset 的值的和为24，具体看代码。

预览

<response-demo></response-demo>

代码

```html
<template>
    <div class="offset-wrapper">
        <q-row class="row">
            <q-col class="item" span="12" :ipad="{span:10}" :pc="{span:8,offset:4}"> <span></span> </q-col>
            <q-col class="item" span="12" :ipad="{span:10,offset:4}" :pc="{span:8,offset:4}"> <span></span> </q-col>
        </q-row>
    </div>
</template>
```
