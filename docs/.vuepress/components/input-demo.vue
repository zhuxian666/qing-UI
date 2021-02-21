<template>
    <div class="input-wrapper">
        <q-input></q-input>
        <br>
        <br>
        <q-input disabled></q-input>
        <br>
        <br>
        <q-input readonly></q-input>
        <br>
        <br>
        <q-input error="错误信息"></q-input>
        <br>
        <br>
        <q-input v-model="xxx"></q-input>
        <br>
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
