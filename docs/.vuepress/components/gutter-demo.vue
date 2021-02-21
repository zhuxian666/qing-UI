<template>
    <div class="gutter-wrapper">
        <q-row gutter="30">
            <q-col class="item" span="12"> <span> col-12 gutter-30</span> </q-col>
            <q-col class="item" span="12"> <span> col-12 gutter-30</span> </q-col>
        </q-row>
        <q-row gutter="5">
            <q-col class="item" span="8"> <span> col-8 gutter-5</span> </q-col>
            <q-col class="item" span="8"> <span> col-8 gutter-5</span> </q-col>
            <q-col class="item" span="8"> <span> col-8 gutter-5</span> </q-col>
        </q-row>
        <q-row gutter="40">
            <q-col class="item" span="12"> <span> col-12 gutter-40</span> </q-col>
            <q-col class="item" span="12"> <span> col-12 gutter-40</span> </q-col>
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
        },
    }
</script>

<style lang="scss" scoped>
    $font-color:#fff;
    $background:#30996A;
    .gutter-wrapper { padding-top: 10px;
        .row{
            padding: .3em;
            .item {text-align: center; color: $font-color;
                > span { display: block; background: $background; }
            }
        }

    }
</style>
