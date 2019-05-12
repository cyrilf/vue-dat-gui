<template>
  <li class="cr select">
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
  </li>
</template>

<script>
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
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
  },
  methods: {
    handleChange(evt) {
      this.currentValue = evt.target.value
      this.$emit('change', evt.target.value)
    },
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
