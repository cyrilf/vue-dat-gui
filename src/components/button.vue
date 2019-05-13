<template>
  <li class="control-item button">
    <label class="w-100" ref="label" @click="handleClick">
      {{label}}
    </label>
  </li>
</template>

<script>
export default {
  name: 'DatButton',
  props: {
    label: String,
  },
  methods: {
    handleClick(evt) { this.$emit('click', evt) },
  },
}
</script>
