<template>
    <div class="popover" ref="popover">
        <div :class="{['position-'+position]:true}" ref="contentWrapper" class="contentWrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <div>
            <span ref="triggerWrapper" style="display: inline-block">
                <slot name="default"></slot>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'QPopover',
        data() {
            return {
                visible: false,
            }
        },
        mounted() {
            if (this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.onClick)
            } else {
                this.$refs.popover.addEventListener('mouseenter', this.open)

                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        },
        destroyed () {
            if (this.trigger === 'click') {
                this.$refs.popover.removeEventListener('click', ()=> {
                    setTimeout(() => {
                        console.log(1)
                    }, 3000)
                })
            } else {
                this.$refs.popover.removeEventListener('mouseenter', this.open)
                this.$refs.popover.removeEventListener('mouseleave', this.close)
            }
        },
        computed:{
            openEvent () {
                if (this.trigger === 'click') {
                    return 'click'
                } else {
                    return 'mouseenter'
                }
            },
            closeEvent () {
                if (this.trigger === 'click') {
                    return 'click'
                } else {
                    return 'mouseleave'
                }
            }
        },
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom'].indexOf(value) >= 0
                }
            },
            trigger:{
                type: String,
                default: 'click',
                validator(value) {
                    return ['click','hover'].indexOf(value)>=0;
                }
            }
        },
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper)
                const {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                const {height: height2} = this.$refs.contentWrapper.getBoundingClientRect()
                let positions = {
                    top: {top: top + window.scrollY, left: left + window.scrollX,},
                    bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
                    // left: {top: top + window.scrollY + (height - height2) / 2, left: left + window.scrollX},
                    // right: {top: top + window.scrollY + (height - height2) / 2, left: left + window.scrollX + width},
                }
                this.$refs.contentWrapper.style.left = positions[this.position].left + 'px'
                this.$refs.contentWrapper.style.top = positions[this.position].top + 'px'
            },
            onClickDocument(e) {
                if (this.$refs.popover &&
                    (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
                ) {
                    return
                }
                if (this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
                ) {
                    return
                }
                this.close()
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close()
                    } else {
                        this.open()
                    }
                }
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
        }

    }
</script>

<style lang="scss" scoped>
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .contentWrapper {
        position: absolute;
        background: white;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3));
        border-radius: $border-radius;
        border: 1px solid $border-color;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;

        &::before, &::after {
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
            border-left-width: 0;
        }

        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;

            &::before {
                border-top-color: black;
                top: 100%;
                left: 10px;
            }

            &::after {
                border-top-color: white;
                top: calc(100% - 2px);
                left: 11px;
            }
        }

        &.position-bottom {
            margin-top: 10px;

            &::before {
                border-bottom-color: black;
                bottom: 100%;
                left: 10px;
            }

            &::after {
                border-bottom-color: white;
                bottom: calc(100% - 2px);
                left: 11px;
            }
        }


    }
</style>
