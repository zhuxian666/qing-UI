<template>
    <div class="input-wrapper">
        <q-input></q-input>
        <q-input disabled></q-input>
        <q-input readonly></q-input>
        <q-input error="错误信息"></q-input>
        <br>
        <q-input v-model="xxx"></q-input>
        <br>
        <span>value:&nbsp;{{xxx}}</span>
    </div>
</template>

<script>
    import Input from '../../../src/input'
    export default {
        data(){
            return{ xxx:'双向绑定' }
        },
        components: { 'q-input': Input }
    }
</script>

<style lang="scss" scoped>
    .input-wrapper {
        padding-top: 10px;
        > input{
            margin-top: 10px;
        }
    }
</style>
