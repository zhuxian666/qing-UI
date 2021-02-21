<template>
    <div class="offset-wrapper">
        <q-row class="row">
            <q-col class="item" span="7"> <span>col-7</span> </q-col>
            <q-col class="item" span="7" offset="2"> <span>col-7 offset-2</span> </q-col>
            <q-col class="item" span="7" offset="1"> <span>col-7 offset-1</span> </q-col>
        </q-row>
        <q-row class="row">
            <q-col class="item" span="8"> <span>col-8</span> </q-col>
            <q-col class="item" span="5" offset="2"> <span>col-5</span> </q-col>
            <q-col class="item" span="5" offset="4"> <span>col-5</span> </q-col>
        </q-row>
        <q-row class="row">
            <q-col class="item" span="9" > <span>col-9</span> </q-col>
            <q-col class="item" span="3" offset="2"> <span>col-3</span> </q-col>
            <q-col class="item" span="4" offset="6"> <span>col-4</span> </q-col>
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
    .offset-wrapper { padding-top: 10px;
        > .row {
            padding: .3em;
            > .item { text-align: center; color: $font-color;
                > span { display: block; background: $background; }
            }
        }
    }
</style>
