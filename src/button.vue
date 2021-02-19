<template>
    <button class="q-button" @click="$emit('click')" :class="{['icon-'+ iconPosition]:true}">
        <q-icon v-if="icon && !loading" :name="icon"  class="icon"></q-icon>
        <q-icon v-if="loading" name="loading"  class="loading icon"></q-icon>
        <div class="q-button-content"><slot></slot></div>
    </button>
</template>
<script>
    import Icon from './icon.vue'
    import QIcon from "./icon";
    export default {
        components: {QIcon},
        props: {
            name:"QButton",
            component: {'q-icon':Icon},
            icon: {
                type: String
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return ['left', 'right'].indexOf(value) >= 0
                }
            },
            loading: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style lang="scss" scoped>
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg)
        }
    }

    .q-button {
        height: var(--button-height);
        padding: 0 1em;
        font: inherit;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        > .q-button-content {
            order: 2;
        }

        > .icon {
            order: 1;
            margin-right: 0.2em;
        }

        &.icon-right {
            > .q-button-content {
                order: 1;
            }

            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: 0.2em;
            }
        }

        .loading {
            animation: spin 1s infinite linear;
        }
    }
</style>
