<template>
    <div class="tabsPane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'QTabsPane',
        data(){
            return {
                active:false
            }
        },
        props: {
            name: {
                type: [String, Number],
                required: true
            }
        },
        inject:['eventBus'],
        created() {
            this.eventBus.$on('update:selected',(name)=>{
                this.active = name === this.name;
            })
        },
        computed:{
            classes(){
                return{
                    active:this.active
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
.tabsPane{
    &.active{
        padding: 1em;
    }
}
</style>
