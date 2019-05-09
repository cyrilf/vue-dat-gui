<template>
  <label ref="label">
    <span class="label-text">
      <slot></slot>
    </span>
    <div class="c">
      <input type="checkbox" :checked="currentValue" @change="handleChange" />
    </div>
  </label>
</template>

<script>
import liMixin from './mixin'

export default {
  name: 'DatBoolean',
  props: {
    checked: Boolean,
  },
  model: {
    prop: 'checked',
    event: 'change',
  },
  data() {
    return {
      currentValue: this.checked,
      liClassName: 'cr boolean',
    }
  },
  watch: {
    checked(val) {
      this.currentValue = val
    },
  },
  mixins: [liMixin],
  methods: {
    handleChange() {
      this.currentValue = !this.currentValue
      this.$emit('change', this.currentValue)
    },
  },
  mounted() {
    this.checkParentNode()
  },
}
</script>

<style lang="scss">
@import "../assets/base.scss";

.vue-dat-gui .cr.boolean {
  position: relative;
  border-left: $border-left-size solid $boolean-color;
  &:hover {
    background: #111;
  }
  label {
    cursor: pointer;
  }
}
</style>
