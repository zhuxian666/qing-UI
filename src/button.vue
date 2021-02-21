<template>
    <button class="q-button" @click="$emit('click')" :class="{['icon-'+ iconPosition]:true}">
        <q-icon v-if="icon && !loading" :name="icon"  class="icon"></q-icon>
        <q-icon v-if="loading" name="loading"  class="loading icon"></q-icon>
        <div class="q-button-content"><slot></slot></div>
    </button>
</template>
<script>
    import Icon from './icon.vue'
    export default {
        components: {'q-icon':Icon},
        props: {
            name:"QButton",
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
        $border-color-hover: #666;
        $border-color: #999;
        $border-radius: 4px;
        $button-active-bg: #eee;
        $button-bg: white;
        $button-height: 32px;
        $font-size: 14px;
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: $border-color-hover;
        }

        &:active {
            background-color: $button-active-bg;
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
