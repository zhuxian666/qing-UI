<template>
    <div class="wrapper">
        <q-layout>
            <q-header> header</q-header>
            <q-layout>
                <q-sider> sider</q-sider>
                <q-content> content</q-content>
            </q-layout>
            <q-footer> footer</q-footer>
        </q-layout>
        <br>
        <q-layout>
            <q-header> header</q-header>
            <q-content> content</q-content>
            <q-footer> footer</q-footer>
        </q-layout>
        <br>
        <q-layout>
            <q-header> header</q-header>
            <q-layout>
                <q-sider> sider</q-sider>
                <q-layout>
                    <q-content> content</q-content>
                    <q-footer> footer</q-footer>
                </q-layout>
            </q-layout>
        </q-layout>
    </div>
</template>

<script>
    import Layout from '../../../src/layout'
    import Header from '../../../src/header'
    import Sider from '../../../src/sider'
    import Content from '../../../src/content'
    import Footer from '../../../src/footer'

    export default {
        components: {
            'q-layout': Layout,
            'q-header': Header,
            'q-sider': Sider,
            'q-content': Content,
            'q-footer': Footer
        }
    }
</script>

<style lang="scss" scoped>
    $background: #30996A;

    .wrapper {
    > .layout {
        height: 30vh;

        > .header {
            height: 3em;
            background: $background;
        }

        > .content {
            background: lighten($background, 40%);
        }

        > .layout {
            height: 6em;

            > .sider {
                width: 3em;
                background: lighten($background, 15%);
            }

            > .content {
                background: lighten($background, 40%);
            }

            > .layout {
                > .content {
                    background: lighten($background, 40%);
                }

                > .footer {
                    background: $background;
                }
            }
        }

        > .footer {
            background: $background;
        }
    }

    }
</style>
