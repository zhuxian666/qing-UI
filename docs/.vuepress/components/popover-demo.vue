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

<script>
    import Popover from '../../../src/Popover'
    import Button from '../../../src/Button'
    export default {
        components:{
            'q-popover':Popover,
            'q-button': Button
        }
    }
</script>

<style lang="scss" scoped>
    .popover-wrapper{
        padding-top: 10px;
    }
</style>
