<template>
    <div class="wrapper">
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

<style lang="scss" scoped>
    .wrapper{
        padding-top: 10px;
        width: 300px;
    }
</style>
