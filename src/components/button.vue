<template>
  <li class="cr button">
    <label class="label-text" ref="label" @click="handleClick">
      <slot></slot>
    </label>
  </li>
</template>

<script>
export default {
  name: 'DatButton',
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    },
  },
}
</script>

<style lang="scss">
@import "../assets/base.scss";

.vue-dat-gui .cr.button {
  border-left: $border-left-size solid $button-color;

  &:hover {
    background: #111;
  }
  .label-text {
    width: 100%;
    cursor: pointer;
  }
}
</style>
