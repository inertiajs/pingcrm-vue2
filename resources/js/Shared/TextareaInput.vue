<template>
  <div>
    <label v-if="label" class="form-label" :for="id">{{ label }}:</label>
    <textarea :id="id" ref="input" v-bind="$attrs" class="form-textarea" :class="{ error: error }" :value="value" @input="$emit('input', $event.target.value)" />
    <div v-if="error" class="form-error">{{ error }}</div>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid'

export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `textarea-input-${uuid()}`
      },
    },
    error: String,
    label: String,
    value: String,
  },
  emits: ['input'],
  methods: {
    focus() {
      this.$refs.input.focus()
    },
    select() {
      this.$refs.input.select()
    },
  },
}
</script>
