<template>
    <div class="group-wrapper">
        <q-button-group>
            <q-button icon="left">上一页</q-button>
            <q-button>更多</q-button>
            <q-button icon-position="right" icon="right">下一页</q-button>
        </q-button-group>
    </div>
</template>

<script>
    import ButtonGroup from '../../../src/button-group'
    import Button from '../../../src/button'
    export default {
        components:{
            'q-button':Button,
            'q-button-group':ButtonGroup
        }
    }
</script>
<style lang="scss" scoped>
 .group-wrapper{
     padding: 10px;
 }
</style>
