<template>
    <transition name="fadeDownUpUi">
        <div v-show="visible" :class="`p-message p-message-${type}`">
            <section class="p-message-hint">
                <HintInfo v-if="type==='info'" />
                <HintSuccess v-else-if="type==='success'" />
                <HintWaring v-else-if="type==='warning'" />
                <HintError v-else />
            </section>
            <section class="p-message-text">{{message}}</section>
            <section class="p-message-close" @click="closeNode"><IconClose /></section>
        </div>
    </transition>
</template>

<script>
    import IconClose from '../static/iconSvg/icon_close_white.svg';
    import HintError from '../static/iconSvg/hint_error.svg';
    import HintInfo from '../static/iconSvg/hint_info.svg';
    import HintSuccess from '../static/iconSvg/hint_success.svg';
    import HintWaring from '../static/iconSvg/hint_waring.svg';

    export default {
        name: 'Message',
        components: {
            IconClose,
            HintError, HintInfo, HintSuccess, HintWaring
        },
        data() {
            return {
                type: 'info',
                message: '',
                visible: false
            }
        },
        methods: {
            closeNode() { // 移除当前节点
                this.$el.style.transition='all .3s';
                this.$el.style.opacity='.5';
                this.$el.style.marginTop='0';
                setTimeout(() => this.$el.parentNode.removeChild(this.$el), 300);
            }
        }
    }
</script>

<style lang="stylus">
    @import "../static/stylus/animate/fadeDownUpUi.styl"

    .p-message
        display inline-block
        padding 8px
        border-radius 4px
        box-shadow 0 2px 10px 0 rgba(31,35,41,.1)
        min-width 240px
        max-width 600px
        min-height 40px
        > section
            display inline-block
            vertical-align top
        & + .p-message
            margin-top 24px
        .p-message-hint
            margin-right 4px
            padding-top 4px
        .p-message-text
            width calc(100% - 52px)
            text-align left
            font-size 14px
            color #fff
            word-wrap break-word
            line-height 24px
        .p-message-close
            padding-top 4px
            height 24px
            pointer-events auto
            svg
                opacity .5
                transition opacity .3s
                cursor pointer
                &:hover
                    opacity 1
    .p-message-info
        background-color $blue-500
    .p-message-success
        background-color $turquoise-500
    .p-message-warning
        background-color $orange-400
    .p-message-error
        background-color $red-400

</style>
