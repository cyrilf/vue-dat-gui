<template>
  <li class="cr number">
    <label ref="label">
      <span class="label-text">
        <slot></slot>
      </span>
      <div ref="content" class="c">
        <slider
          v-show="hasSlider"
          :min="minValue"
          :max="maxValue"
          :width="sliderWidth"
          :value="currentValue"
          @updateState="sanitizeNumber">
        </slider>
        <input
          type="number"
          ref="input"
          :min="minValue"
          :max="maxValue"
          :step="stepValue"
          v-model="currentValue"
          :style="{'width': `${inputWidth}px`}"
          @change="handleChange"
        />
      </div>
    </label>
  </li>
</template>

<script>
import toNumber from 'lodash.tonumber'
import isNumber from 'lodash.isnumber'
import Slider from './number/slider.vue'

export default {
  name: 'DatNumber',
  props: {
    showSlider: {
      type: Boolean,
      default: true,
    },
    min: Number,
    max: Number,
    step: Number,
    value: {
      type: [Number, String],
      required: true,
    },
    width: Number,
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  components: { Slider },
  data() {
    let minValue = isNumber(this.min) ? this.min : Number.NEGATIVE_INFINITY
    let maxValue = isNumber(this.max) ? this.max : Number.POSITIVE_INFINITY
    if (minValue > maxValue) {
      [minValue, maxValue] = [maxValue, minValue]
      process.env.NODE_ENV !== 'production'
        && console.warning('vue-dat-gui: You are using a dat-number with a min prop higher than the max prop') // eslint-disable-line no-console
    }

    return {
      currentValue: 0,
      minValue,
      maxValue,
      inputWidth: 0,
      sliderWidth: 0,
    }
  },
  computed: {
    hasSlider() {
      return this.showSlider
        && Number.isFinite(this.minValue)
        && Number.isFinite(this.maxValue)
    },
    stepValue() {
      if (!this.step) {
        const val = this.maxValue - this.minValue
        return (10 ** Math.floor(Math.log(Math.abs(val)) / Math.LN10)) / 10
      }

      return toNumber(this.step)
    },
  },
  watch: {
    value: {
      handler(number) { this.currentValue = toNumber(number) },
      immediate: true,
    },
  },
  methods: {
    sanitizeNumber(number) {
      const [min, max, step] = [this.minValue, this.maxValue, this.stepValue]

      let safeNumber = toNumber(number)
      if (safeNumber < min) { safeNumber = min }
      if (safeNumber > max) { safeNumber = max }

      if (step !== 0 && Number.isFinite(step)) {
        safeNumber = Math.round(safeNumber / step) * step
      }
      this.currentValue = safeNumber
      this.$emit('change', safeNumber)
    },
    handleChange(evt) {
      this.sanitizeNumber(evt.target.value)
    },
  },
  mounted() {
    const controlsWidth = this.$refs.content.clientWidth
    if (this.hasSlider) {
      this.inputWidth = this.width > 0 ? this.width : Math.round(controlsWidth / 3)
      this.sliderWidth = controlsWidth - this.inputWidth
    } else {
      this.inputWidth = controlsWidth
    }
  },
}
</script>

<style lang="scss">
@import "../assets/base.scss";

.vue-dat-gui .cr.number {
  border-left: $border-left-size solid $number-color;

  .c {
    display: inline-flex;
  }

  input[type="number"] {
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
    color: $number-color;

    &:hover {
      background: lighten($input-color, $hover-lighten);
    }
    &:focus {
      background: lighten($input-color, $active-lighten);
      color: #fff;
    }
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
