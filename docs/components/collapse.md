---
title: Collapse - 折叠面板
---


# 折叠面板
## 预览
<collapse-demo></collapse-demo> 

 
## 使用方法
```html
<template>
    <div>
        <q-collapse :selected.sync="selected">
            <q-collapse-item title="标题1" name="1">1</q-collapse-item>
            <q-collapse-item title="标题2" name="2">2</q-collapse-item>
            <q-collapse-item title="标题3" name="3">3</q-collapse-item>
        </q-collapse>
    </div>
</template>

<script>
    import Collapse from '../../../src/Collapse'
    import CollapseItem from '../../../src/Collapse-item'
    export default {
        components:{
            'q-collapse': Collapse,
            'q-collapse-item': CollapseItem,
        },
        data(){
            return{
                selected : ['1']
            }
        },
    }
</script>
```


## 选项

### 1.双向绑定
Collapse 组件的双向绑定与 Vue 官方的类似，支持 .sync 修饰符。

    <i-collapse :selected.sync="selected">
### 2.必选参数
Collapse 组件必须接受两个参数： title 用于显示折叠面板的标题。 name 用于表示选中的 item。

    <i-collapse-item title="标题1" name="1">1</i-collapse-item>

### 3.手风琴效果
Collapse 组件还支持手风琴效果，就是只能同时显示一个面板内容,可以通过设置 single 属性来更改，默认是 false 。

### 预览
<collapse-single-demo></collapse-single-demo> 
    


