<template>
    <div class="align-wrapper">
        <q-row class="row" align="left">
            <q-col class="item" span="8">left</q-col>
            <q-col class="item" span="8">left</q-col>
        </q-row>
        <q-row class="row" align="center">
            <q-col class="item" span="8">center</q-col>
            <q-col class="item" span="8">center</q-col>
        </q-row>
        <q-row class="row" align="right">
            <q-col class="item" span="8">right</q-col>
            <q-col class="item" span="8">right</q-col>
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
        },
    }
</script>

<style lang="scss" scoped>
    $font-color:#fff;
    $background:#30996A;
    .align-wrapper{ text-align: center; color: $font-color;
        .row{ padding-top: 10px;
            > .item { text-align: center;
                &:nth-child(odd){ background: $background; }
                &:nth-child(even){ background: lighten($background,20%); color: $font-color; }
            }
        }
    }
</style>
