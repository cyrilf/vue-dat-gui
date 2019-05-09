<template>
  <label ref="label">
    <span class="label-text">
      <slot></slot>
    </span>
    <div class="c">
      <select :value="currentValue" @change="handleChange">
        <option
          v-for="item in items"
          :key="item.value"
          :value="item.value">
          {{item.name}}
        </option>
      </select>
    </div>
  </label>
</template>

<script>
import liMixin from './mixin'

export default {
  name: 'DatSelect',
  props: ['value', 'items'],
  model: {
    prop: 'value',
    event: 'change',
  },
  data() {
    return {
      currentValue: this.value || '',
      liClassName: 'cr select',
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
  },
  mixins: [liMixin],
  methods: {
    handleChange(evt) {
      this.currentValue = evt.target.value
      this.$emit('change', evt.target.value)
    },
  },
  mounted() {
    this.checkParentNode()
  },
}
</script>

<style lang="scss">
@import "../assets/base.scss";

.vue-dat-gui .cr.select {
  border-left: $border-left-size solid $select-color;

  select {
    width: 100%;
  }
}
</style>
