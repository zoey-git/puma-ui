<template>
    <div
        :class="classes"
        :style="{backgroundColor: this.color}"
        @click="handleClick"
    >
        <slot>{{text}}</slot>
        <i
            v-if="closable"
            class="pm-tag__close pm-icon-close"
            @click="handleClose"
        ></i>
    </div>
</template>

<script>
export default {
    name: 'PmTag',
    props: {
        text: String,
        type: String,
        hit: Boolean,
        color: String,
        size: String,
        closable: Boolean, // 是否显示关闭按钮
        effect: { // 主题
            type: String,
            default: 'light',
            validator(val) {
                return ['dark', 'light', 'plain'].includes(val)
            }
        }
    },
    data() {
        return {
            classes: []
        }
    },
    computed: {
        tagSize() {
            return this.size || (this.$ELEMENT || {}).size
        }
    },
    mounted() {
        const {type, tagSize, effect, hit} = this
        this.classes = [
            'pm-tag',
            type ? `pm-tag--${type}` : '',
            tagSize ? `pm-tag--${tagSize}` : '',
            effect ? `pm-tag--${effect}` : '',
            hit && 'is-hit'
        ]
    },
    methods: {
        handleClick(event) {
            this.$emit('click', event)
        },
        handleClose(event) {
            this.$emit('close', event)
        }
    }
}
</script>