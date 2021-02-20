<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: 'QCollapse',
        data(){
          return{
              eventBus: new Vue()
          }
        },
        props:{
          single:{
              type:Boolean,
              default:false
          }
        },
        provide(){
            if(this.single){
                return{
                    eventBus: this.eventBus
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $grey: #D6D5D5;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>
