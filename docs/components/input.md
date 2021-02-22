---
title: Input-输入框
---
# 输入框
## 预览
<input-demo></input-demo>
 
使用方法

```vue
        <q-input></q-input>
        <q-input disabled></q-input>
        <q-input readonly></q-input>
        <q-input error="错误信息"></q-input>
        <q-input v-model="xxx"></q-input>
```

## 选项

    Input 组件的选项有： disabled, readonly, error。 并且支持数据的双向绑定。

### 1. disabled

表示是否禁用状态，默认为 false，禁用。
### 2. readonly

表示只读状态， 与 disabled 相似。但是 disabled 不可以被 Tab 键选中，readonly 可以被选中，不能修改。
### 3. error

给 Input 添加 error 属性，会在该 input 右侧显示一个提示图标与文字，用于提示。
### 4. v-model
Input使用v-model，支持数据的双向绑定
