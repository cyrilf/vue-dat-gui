<template>
  <li class="control-item button">
    <label class="w-100" ref="label" @click="handleClick">
      {{text}}
    </label>
  </li>
</template>

<script>
export default {
  name: 'DatButton',
  props: {
    text: String,
  },
  methods: {
    handleClick(evt) { this.$emit('click', evt) },
  },
}
</script>
