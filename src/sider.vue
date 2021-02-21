<template>
    <transition  name="slide">
        <div class="sider">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    import Button from "./button";

    export default {
        name: 'QSider',
        components: {Button},
    }
</script>

<style lang="scss" scoped>
    .sider {

    }
</style>
