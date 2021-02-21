<template>
    <div class="tabs-wrapper">
        <q-tabs :selected.sync="selectedTab">
            <q-tabs-head>
                <q-tabs-item name='tab1'>
                    <q-icon icon-name="settings"></q-icon>
                    Tab1
                </q-tabs-item>
                <q-tabs-item name='tab2'>Tab2</q-tabs-item>
                <q-tabs-item name='tab3'>Tab3</q-tabs-item>
                <q-tabs-item name='tab4' disabled>Tab4</q-tabs-item>
            </q-tabs-head>
            <q-tabs-body>
                <q-tabs-pane name='tab1'>内容1</q-tabs-pane>
                <q-tabs-pane name='tab2'>内容2</q-tabs-pane>
                <q-tabs-pane name='tab3'>内容3</q-tabs-pane>
                <q-tabs-pane name='tab4'>内容4</q-tabs-pane>
            </q-tabs-body>
        </q-tabs>
    </div>
</template>

<script>
    import Tabs from '../../../src/Tabs'
    import TabsBody from '../../../src/tabs-body'
    import TabsHead from '../../../src/tabs-head'
    import TabsItem from '../../../src/tabs-item'
    import TabsPane from '../../../src/tabs-pane'
    import Icon from '../../../src/Icon'
    export default {
        components: {
            'q-tabs': Tabs, 'q-tabs-head': TabsHead, 'q-tabs-body': TabsBody, 'q-tabs-item': TabsItem,
            'q-tabs-pane': TabsPane, 'q-icon': Icon
        },
        data() { return { selectedTab: 'tab1' } }
    }
</script>

<style lang="scss" scoped>
</styleq
