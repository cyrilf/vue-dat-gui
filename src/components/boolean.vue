<template>
  <li class="control-item boolean">
    <label ref="label">
      <span class="label-text">{{label}}</span>
      <div class="control">
        <input type="checkbox" :checked="currentValue" @change="handleChange"/>
      </div>
    </label>
  </li>
</template>

<script>
export default {
  name: 'DatBoolean',
  props: {
    checked: Boolean,
    label: String,
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
