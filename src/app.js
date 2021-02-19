import Vue from 'vue'
import Button from './button.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Toast from './toast.vue'
import Plugin from "./plugin";
import Row from './row.vue'
import Col from './col.vue'
import Icon from './icon.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Footer from './footer.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsBody from './tabs-body.vue'
import TabsItem from './tabs-item.vue'
import TabsPane from './tabs-pane.vue'

Vue.component('q-button', Button)
Vue.component('q-icon', Icon)
Vue.component('q-button-group', ButtonGroup)
Vue.component('q-input', Input)
Vue.component('q-toast', Toast)
Vue.component('q-row', Row)
Vue.component('q-col', Col)
Vue.component('q-layout', Layout)
Vue.component('q-footer', Footer)
Vue.component('q-header', Header)
Vue.component('q-sider', Sider)
Vue.component('q-content',Content)
Vue.component('q-tabs', Tabs)
Vue.component('q-tabs-head', TabsHead)
Vue.component('q-tabs-body', TabsBody)
Vue.component('q-tabs-item', TabsItem)
Vue.component('q-tabs-pane', TabsPane)

Vue.use(Plugin)

new Vue({
    el: '#app',
    data: {
        selectedTab: 'sports',
        loading1: false,
        loading2: true,
        loading3: false,
        xxx:'xxxx'
    },
    methods:{
        add(){
            this.$toast('xxxxxxxxxxx',{
                position:'top',
                enableHtml:false,
                closeButton:{
                    text:'关闭',callBack(){
                        console.log('关闭了')
                    }
                },
                autoClose:2,
            })
        }
    }
})
