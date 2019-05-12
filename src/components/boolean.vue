<template>
  <li class="cr boolean">
    <label ref="label">
      <span class="label-text">
        <slot></slot>
      </span>
      <div class="c">
        <input type="checkbox" :checked="currentValue" @change="handleChange" />
      </div>
    </label>
  </li>
</template>

<script>
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
    }
  },
  watch: {
    checked(val) {
      this.currentValue = val
    },
  },
  methods: {
    handleChange() {
      this.currentValue = !this.currentValue
      this.$emit('change', this.currentValue)
    },
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
