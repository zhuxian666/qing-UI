<template>
    <div class="offset-wrapper">
        <q-row class="row">
            <q-col class="item" span="12" :ipad="{span:10}" :pc="{span:8,offset:4}"> <span></span> </q-col>
            <q-col class="item" span="12" :ipad="{span:10,offset:4}" :pc="{span:8,offset:4}"> <span></span> </q-col>
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

