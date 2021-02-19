<template>
    <div class="tabsHead">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div  class="actionsWrapper">
            <slot name="actions"></slot>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'QTabsHead',
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected',(item,vm)=>{
                let {width,left}=vm.$el.getBoundingClientRect()
                this.$refs.line.style.width=`${width}px`
                this.$refs.line.style.left=`${left}px`
            })
        }
    }
</script>

<style lang="scss" scoped>
    $tab-height:40px;
    $blue:#00B0F0;
    $border-color: #ddd;
    .tabsHead {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid $border-color;
        > .actionsWrapper{
            margin-left:auto ;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1em;
        }
        > .line{
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $blue;
            transition: all 350ms;
        }
    }
</style>
