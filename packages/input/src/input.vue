<template>
    <div>
        <input
            type="text"
            ref="input"
            v-bind="$attrs"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
        >
    </div>
</template>

<script>
export default {
    name: 'PmInput',
    props: {
        value: [String, Number]
    },
    computed: {
        nativeInputValue() {
            return this.value === null || this.value === undefined ? '' : String(this.value)
        }
    },
    watch: {
        nativeInputValue() {
            this.setNativeInputValue()
        }
    },
    data() {
        return {
            focused: false
        }
    },
    methods: {
        getInput() {
            return this.$refs.input || this.$refs.textarea
        },
        setNativeInputValue() {
            const input = this.getInput()
            if (!input) return
            if (input.value === this.nativeInputValue) return
            input.value = this.nativeInputValue
        },
        handleInput(event) {
            if (event.target.value === this.nativeInputValue) return
            this.$emit('input', event.target.value)
            this.$nextTick(this.setNativeInputValue)
        },
        handleFocus(event) {
            this.focused = true
            this.$emit('focus', event)
        },
        handleBlur(event) {
            this.focused = false
            this.$emit('blur', event)
        }
    },
    mounted() {
        this.setNativeInputValue()
    }
}
</script>