<template>
    <div class="button-wrapper">
        <q-button class="item">默认按钮</q-button>
    </div>
</template>

<script>
    import Button from '../../../src/Button'

    export default {
        components: {
            'q-button': Button,
        },
    }
</script>

<style lang="scss" scoped>
    .button-wrapper{
        padding-top: 10px;
    }
</style>
