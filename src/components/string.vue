<template>
  <li class="control-item string">
    <label ref="label">
      <span class="label-text">{{label}}</span>
      <div class="control">
        <input type="text" :value="currentValue" @input="handleChange"/>
      </div>
    </label>
  </li>
</template>

<script>
export default {
  name: 'DatString',
  props: {
    value: String,
    label: String,
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  data() {
    return { currentValue: this.value || '' }
  },
  watch: {
    value(val) { this.currentValue = val },
  },
  methods: {
    handleChange(evt) {
      this.currentValue = evt.target.value
      this.$emit('change', this.currentValue)
    },
  },
}
</script>
