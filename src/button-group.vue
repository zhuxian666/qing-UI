<template>
    <div class="q-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'QButtonGroup',

    }
</script>

<style lang="scss" scoped>
    $border-radius: 4px;
.q-button-group{
    display: inline-flex;
    vertical-align: middle;
    .q-button{
        border-radius: 0;
        &:not(:first-child){
            margin-left: -1px;
        }
        &:first-child{
            border-top-left-radius: $border-radius;
            border-bottom-left-radius: $border-radius;
        }
        &:last-child{
            border-top-right-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }
        &:hover{
            position: relative;
            z-index: 1;
        }
    }
}
</style>
