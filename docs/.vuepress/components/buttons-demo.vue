<template>
    <div class="button-wrapper">
        <q-button>按钮1</q-button>
        <q-button :loading="false" icon="setting" >按钮2</q-button>
        <q-button :loading="true">按钮3</q-button>
        <q-button :loading="false" icon-position="right" icon="setting">按钮4</q-button>
        <q-button disabled>按钮5</q-button>
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
        padding: 0 10px;
    }
</style>
