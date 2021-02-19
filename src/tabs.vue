<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: 'QTabs',
        props:{
            selected:{
               type:String,
               request:true
            },
            direction:{
                type:String,
                default: 'row',
                validator(value){
                    return ['row','column'].indexOf(value)>=0
                }
            }
        },
        data(){
          return{
              eventBus: new Vue()
          }
        },
        provide(){
            return{
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'QTabsHead') {
                    vm.$children.forEach((childVm) => {
                        if (childVm.$options.name === 'QTabsItem'
                            && childVm.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, childVm)
                        }
                    })
                }
            })
        }

    }
</script>

<style lang="scss" scoped>
.tabs{
}
</style>
