<template>
    <div class="p-modal">
        <transition name="opacityInUiOut">
            <div class="p-modal-bg" @click="$emit('close')" v-if="show"></div>
        </transition>
        <transition-group name="bounceInUiOut">
            <!-- 默认弹窗样式 -->
            <Default
                    key="default"
                    v-if="show && mode==='default'"
                    :title="title"
                    :iconLoading="iconLoading"
                    @close="$emit('close')"
            >
                <template #default>
                    <!-- @slot html内容 -->
                    <slot></slot>
                </template>
                <template #handle>
                    <Handle
                            :iconLoading="iconLoading"
                            @close="$emit('close')"
                            @confirm="$emit('confirm')"
                    />
                </template>
            </Default>
            <!-- 全屏弹窗样式 -->
            <Full
                    key="full"
                    v-if="show && mode==='full'"
                    :title="title"
                    @close="$emit('close')"
            >
                <slot></slot>
            </Full>
            <!-- 最小弹窗样式 -->
            <Small
                    key="small"
                    v-if="show && mode==='small'"
                    :title="title"
                    :iconLoading="iconLoading"
                    :type="type"
                    @close="$emit('close')"
            >
                <template #small>
                    <slot></slot>
                </template>
                <template #handle>
                    <Handle
                            :iconLoading="iconLoading"
                            :type="type"
                            @close="$emit('close')"
                            @confirm="$emit('confirm')"
                    />
                </template>
            </Small>
        </transition-group>
    </div>
</template>

<script>
    import Default from './depend/default';
    import Full from './depend/full';
    import Small from './depend/small';
    import Handle from './depend/handle';

    export default {
        name: 'Modal',
        components: { Default, Full, Small, Handle },
        props: {
            /**
             * 模态框显示状态
             */
            show: {
                type: Boolean,
                default: false,
                require: true
            },
            /**
             * 模态框标题
             */
            title: {
                type: String,
                default: '',
                require: true
            },
            /**
             * 模态框确定按钮的loading
             */
            iconLoading: {
                type: Boolean,
                default: false
            },
            /**
             * 模态框显示模式，【可选值 full-全屏显示 default-(默认值)自适应宽高 small-最小对话框】
             */
            mode: {
                type: String,
                default: 'default'
            },
            /**
             * 最小模态框类型
             */
            type: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                loading: false // 确定按钮的loading属性
            }
        },
        watch: {
            show(n, o) {
                if (n !== o) {
                    if (n) {
                        document.body.style.overflow='hidden';
                    } else {
                        document.body.style.overflow='auto';
                    }
                }
            }
        },
        beforeDestroy() {
            document.body.style.overflow='auto';
        }
    }
</script>

<style lang="stylus">
    @import "../static/stylus/animate/opacityInUiOut.styl"
    @import "../static/stylus/animate/bounceInUiOut.styl"

    .p-modal-bg
        position fixed
        left 0
        top 0
        background-color rgba(100,108,115,.5)
        width 100%
        height 100%
        z-index 999
    .p-modal-main
        position fixed
        background-color #fff
        z-index 999
    .p-modal-main-full
        top 0
        left 0
        width 100%
        height 100%
    .p-modal-main-max
        top 60px
    .p-modal-title
        position relative
        padding-left 32px
        padding-right 32px
        border-bottom 1px solid $grey-300
        width 100%
        height 56px
        line-height @height
        .p-title-text
            max-width 98%
            color $grey-900
            font-size 16px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
        .p-modal-title-icon
            position absolute
            top 16px
            right 28px
    .p-modal-content
        margin-bottom 72px
        padding 16px 32px
        width 100%
        min-height 77px
    .p-modal-content-normal
        max-height 648px
    .p-modal-content-max
        overflow auto

</style>
