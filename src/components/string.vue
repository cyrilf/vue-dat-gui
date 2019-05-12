<template>
  <li class="cr string">
    <label ref="label">
      <span class="label-text">
        <slot></slot>
      </span>
      <div class="c">
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
  },
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
      this.$emit('change', this.currentValue)
    },
  },
}
</script>

<style lang="scss">
@import "../assets/base.scss";

.vue-dat-gui .cr.string {
  border-left: $border-left-size solid $string-color;

  input[type="text"] {
    background: $input-color;
    border: 1px solid $background-color;
    border-radius: 0;
    padding: 4px;
    margin: 0;
    outline: none;
    font-size: inherit;
    &::-ms-clear {
      display: none;
    }
    color: $string-color;
    width: 100%;

    &:hover {
      background: lighten($input-color, $hover-lighten);
    }
    &:focus {
      background: lighten($input-color, $active-lighten);
      color: #fff;
    }
  }
}
</style>
