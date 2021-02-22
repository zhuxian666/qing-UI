---
title: Toast - 弹出提示框
---

# 弹出提示框
## 预览
<toast-demo></toast-demo>

## 使用方法

想要使用 Toast 组件，首先需要引入该组件,然后使用 Vue 官方文档中插件的使用方法使用该插件。
代码
```vue
<template>
    <div>
        <q-button @click="autoClose">会自动关闭</q-button>&nbsp;&nbsp;
        <q-button @click="clickClose">点击按钮才关闭</q-button>&nbsp;&nbsp;
        <q-button @click="top">上方弹出</q-button>
        <q-button @click="middle">中间弹出</q-button>
        <q-button @click="bottom">下方弹出</q-button>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Toast from '../../../src/Toast'
    import Button from '../../../src/Button'
    import plugin from '../../../src/plugin'

    Vue.use(plugin)
    export default {
        components: {'q-toast': Toast, 'q-button': Button},
        methods: {
            autoClose() {
                this.$toast('我会自动关闭', {
                    autoClose: 1,
                })
            },
            clickClose() {
                this.$toast('点击确定我才会关闭', {
                    closeButton: {
                        text: '确定',
                        callback: () => {
                            console.log('回调的输出')
                        }
                    }
                })
            },
            top() {
                this.$toast('我是出现在上方的toast', {autoClose: 2,position: 'top'})
            },
            middle() {
                this.$toast('我是出现在中间的toast', {autoClose: 2,position: 'middle'})
            },
            bottom() {
                this.$toast('我是出现在下方的toast', {autoClose: 2,position: 'bottom'})
            },
        }
    }
</script>
```


## 选项


### 1.autoClose 
autoClose 此选项可以设定 Toast 自动关闭的延时。单位为“ 秒 ”，默认延时 3 秒后自动关闭。
代码

```vue
<template>
    <div>
        <q-button @click="autoClose">会自动关闭</q-button>&nbsp;&nbsp;
    </div>
</template>

<script>
    import Vue from 'vue'
    import Toast from '../../../src/Toast'
    import Button from '../../../src/Button'
    import plugin from '../../../src/plugin'
    Vue.use(plugin)
    export default {
        components: {'q-toast': Toast, 'q-button': Button},
        methods: {
            autoClose() {
                this.$toast('我会自动关闭', {
                    autoClose: 1,
                })
            },
        }
    }
</script>
```

### 2.closeButton
Toast 组件的右侧按钮文本可编辑，并且支持传入一个回调。 closeButton 选项接收一个对象。对象包括 text 与 callback 属性。用于设定按钮的文本与回调。
代码

```vue
<template>
    <div>
        <q-button @click="clickClose">点击按钮才关闭</q-button>&nbsp;&nbsp;
    </div>
</template>

<script>
    import Vue from 'vue'
    import Toast from '../../../src/Toast'
    import Button from '../../../src/Button'
    import plugin from '../../../src/plugin'

    Vue.use(plugin)
    export default {
        components: {'q-toast': Toast, 'q-button': Button},
        methods: {
            clickClose() {
                this.$toast('点击确定我才会关闭', {
                    closeButton: {
                        text: '确定',
                        callback: () => {
                            console.log('回调的输出')
                        }
                    }
                })
            },
        }
    }
</script>
```

### 3.enableHtml
Toast 组件还支持 HTML 语法，该功能默认关闭，你需要传递一个 enableHTML 参数来开启它, enableHtml:true 。 开启后就可以在 Toast 内容区域写 HTML 语法。

### 4.position
可以设定 Toast 弹出的位置 ，支持 top, middle, bottom 三个值。

    this.$toast('我是 toast 内容', { position: 'top' })
