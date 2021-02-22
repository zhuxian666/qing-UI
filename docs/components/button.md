---
title: Button-按钮
---
# 按钮
## 预览

<buttons-demo></buttons-demo>

## 使用方法

```vue
<q-button>默认按钮</q-button>
<q-button icon="setting">默认按钮</q-button>
<q-button :loading="true">默认按钮</q-button>
<q-button icon-position="right" icon="setting">默认按钮</q-button>
<q-button disabled>默认按钮</q-button>
```
## 选项
## 单个按钮
### 1. 图标

通过设置 icon 属性在 Button 内嵌入一个 Icon。
通过设置 iconPosition 属性改变 Icon 在 Button 中的位置，仅支持“左，右”两个位置。
### 2. 加载中状态

通过设置 loading 属性，可以让按钮处于加载中状态。
### 3. 不可用状态

通过设置 disabled 属性，可将按钮设置为不可用状态。

## 按钮组

### 预览

<button-group-demo></button-group-demo>

### 代码

```vue
<q-button-group>
    <q-button icon="left">上一页</q-button>
    <q-button>更多</q-button>
    <q-button icon-position="right" icon="right">下一页</q-button>
</q-button-group>
```
