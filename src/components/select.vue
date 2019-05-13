<template>
  <li class="control-item select">
    <label ref="label">
      <span class="label-text">{{label}}</span>
      <div class="control">
        <select :value="currentValue" @change="handleChange" class="w-100">
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
  props: {
    value: [String, Number],
    items: Array,
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
    value(val) { this.currentValue = val || '' },
  },
  methods: {
    handleChange(evt) {
      this.currentValue = evt.target.value
      this.$emit('change', evt.target.value)
    },
  },
}
</script>
