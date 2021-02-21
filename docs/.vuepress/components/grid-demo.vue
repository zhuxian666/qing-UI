<template>
    <div class="grid-wrapper">
        <q-row class="row">
            <q-col class="item" span="24">col-24</q-col>
        </q-row>
        <q-row>
            <q-col class="item" span="12">col-12</q-col>
            <q-col class="item" span="12">col-12</q-col>
        </q-row>
        <q-row class="row">
            <q-col class="item" span="8">col-8</q-col>
            <q-col class="item" span="8">col-8</q-col>
            <q-col class="item" span="8">col-8</q-col>
        </q-row>
        <q-row class="row">
            <q-col class="item" span="6">col-6</q-col>
            <q-col class="item" span="6">col-6</q-col>
            <q-col class="item" span="6">col-6</q-col>
            <q-col class="item" span="6">col-6</q-col>
        </q-row>
    </div>
</template>
<script>
    import Col from '../../../src/Col'
    import Row from '../../../src/Row'
    export default {
        components: {
            'q-col': Col,
            'q-row': Row
        }
    }
</script>
<style lang="scss" scoped>
    $font-color:#fff;
    $background:#30996A;
    .grid-wrapper{
        > .row{ padding: .3em;
            > .item { text-align: center; color: $font-color;
                &:nth-child(odd){ background: $background; }
                &:nth-child(even){ background: lighten($background,20%); color: $font-color; }
            }
        }
    }
</style>


