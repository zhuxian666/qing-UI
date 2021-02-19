<template>
    <div class="tabsItem" @click="onClick" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'QTabsItem',
        data() {
            return {
                active: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: [String, Number],
                required: true
            }
        },
        inject: ['eventBus'],
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        methods: {
            onClick() {
                if(this.disabled){return}
                this.eventBus.$emit('update:selected', this.name,this)
            }
        },
        computed: {
            classes() {
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    $blue:#00B0F0;
    $disabled-text-color: grey;
    .tabsItem {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        align-items: center;
        display: flex;
        &.active {
            color: $blue;
            font-weight: bold;
        }
        &.disabled{
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>
