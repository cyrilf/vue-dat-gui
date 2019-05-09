<template>
  <label class="label-text" ref="label" @click="handleClick">
    <slot></slot>
  </label>
</template>

<script>
import liMixin from './mixin'

export default {
  name: 'DatButton',
  data() {
    return {
      liClassName: 'cr button',
    }
  },
  mixins: [liMixin],
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    },
  },
  mounted() {
    this.checkParentNode()
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
