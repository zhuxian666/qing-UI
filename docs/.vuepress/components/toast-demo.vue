<template>
    <div class="wrapper">
        <q-button @click="autoClose">会自动关闭</q-button>&nbsp;&nbsp;
        <q-button @click="clickClose">点击按钮才关闭</q-button>&nbsp;&nbsp;
        <br>
        <br>
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

<style lang="scss" scoped>
    .wrapper{
        padding-top: 10px;
    }
</style>
