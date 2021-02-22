<template>
    <svg class="q-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    import './svg.js'
    export default {
        name:"QIcon",
      props:{
          name:{
              type:String,
          }
      }
    }
</script>

<style lang="scss" scoped>
    .q-icon{
        height: 1em;
        width: 1em;
    }
</style>
