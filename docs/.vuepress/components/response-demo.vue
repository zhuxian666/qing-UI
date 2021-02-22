<template>
    <div class="response-wrapper">
        <q-row>
            <q-col class="item" span="2" :ipad="{span:10}" :pc="{span:8,offset:4}"> <span></span> </q-col>
            <q-col class="item" span="22" :ipad="{span:10,offset:4}" :pc="{span:8,offset:4}"> <span></span> </q-col>
        </q-row>
        <q-row>
            <q-col class="item" span="0" :ipad="{span:0}" :pc="{span:6}"> <span></span> </q-col>
            <q-col class="item" span="0" :ipad="{span:11}" :pc="{span:6,offset:3}"> <span></span> </q-col>
            <q-col class="item" span="24" :ipad="{span:11,offset:2}" :pc="{span:6,offset:3}"> <span></span> </q-col>
        </q-row>
    </div>
</template>

<script>
    import Col from '../../../src/col'
    import Row from '../../../src/row'
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
    .response-wrapper { padding-top: 10px;
        > .row {
            padding: .3em;
            > .item { text-align: center; color: $font-color;
                 display: block; background: $background;
                height: 20px;
            }
        }
    }
</style>

