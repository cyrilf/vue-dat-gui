<template>
  <li class="control-item number">
    <label ref="label">
      <span class="label-text">{{label}}</span>
      <div class="control">
        <slider
          v-show="hasSlider"
          class="slider"
          :min="minValue"
          :max="maxValue"
          :value="currentValue"
          @updateState="sanitizeNumber">
        </slider>
        <input
          type="number"
          ref="input"
          class="input"
          :min="minValue"
          :max="maxValue"
          :step="stepValue"
          v-model="currentValue"
          @change="handleChange"
        />
      </div>
    </label>
  </li>
</template>

<script>
import toNumber from 'lodash.tonumber'
import clamp from 'lodash.clamp'
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
    label: String,
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  components: { Slider },
  data() {
    let minValue = typeof this.min === 'number' ? this.min : Number.NEGATIVE_INFINITY
    let maxValue = typeof this.max === 'number' ? this.max : Number.POSITIVE_INFINITY
    if (minValue > maxValue) {
      [minValue, maxValue] = [maxValue, minValue]
      process.env.NODE_ENV !== 'production'
        && console.warning('vue-dat-gui: You are using a dat-number with a min prop higher than the max prop') // eslint-disable-line no-console
    }

    return {
      currentValue: toNumber(this.value),
      minValue,
      maxValue,
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
    value(number) { this.currentValue = toNumber(number) },
  },
  methods: {
    sanitizeNumber(number) {
      const [min, max, step] = [this.minValue, this.maxValue, this.stepValue]

      let safeNumber = clamp(toNumber(number), min, max)

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
}
</script>

<style lang="scss">
.vue-dat-gui .control-item.number {
  .control {
    display: inline-flex;

    .slider {
      flex: 3;
    }
    .input {
      flex: 1;
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
