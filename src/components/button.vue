<template>
  <li class="control-item button">
    <label class="w-100" ref="label" @click="handleClick">
      <slot></slot>
    </label>
  </li>
</template>

<script>
export default {
  name: 'DatButton',
  methods: {
    handleClick(evt) { this.$emit('click', evt) },
  },
}
</script>
