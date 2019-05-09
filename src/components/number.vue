<template>
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
        @updateState="applyConstraints">
      </slider>
      <input
        type="number"
        ref="input"
        :min="minValue"
        :max="maxValue"
        :step="stepValue"
        inputMode="numeric"
        v-model="currentValue"
        :style="{'width': `${inputWidth}px`}"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </div>
  </label>
</template>

<script>
/* eslint-disable no-param-reassign */
import toNumber from 'lodash.tonumber'
import liMixin from './mixin'
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
    return {
      currentValue: 0,
      maxValue: this.max || Number.POSITIVE_INFINITY,
      minValue: this.min || Number.NEGATIVE_INFINITY,
      liClassName: 'cr number',
      inputWidth: 0,
      sliderWidth: 0,
    }
  },
  computed: {
    hasSlider() {
      return this.showSlider
        && Number.isFinite(this.maxValue)
        && Number.isFinite(this.minValue)
    },
  },
  watch: {
    value: {
      handler(val) {
        this.currentValue = toNumber(val)
      },
      immediate: true,
    },
  },
  mixins: [liMixin],
  methods: {
    stepValue() {
      if (!this.step) {
        const val = this.maxValue - this.minValue
        return (10 ** Math.floor(Math.log(Math.abs(val)) / Math.LN10)) / 10
      }
      return toNumber(this.step)
    },
    applyConstraints(val) {
      const [min, max, step] = [this.minValue, this.maxValue, this.step]
      const [hasMin, hasMax, hasStep] = [
        Number.isFinite(min),
        Number.isFinite(max),
        Number.isFinite(step),
      ]
      let [isMin, isMax] = [false, false]

      val = toNumber(val)

      if (hasMin && val <= min) {
        val = min
        isMin = true
      }

      if (hasMax && val >= max) {
        val = max
        isMax = true
      }

      if (!isMin && !isMax && hasStep) {
        const s = this.stepValue()
        if (s !== 0) val = Math.round(val / s) * step
      }
      this.currentValue = val
      this.$emit('change', val)
    },
    handleBlur(evt) {
      this.emitChange(evt.target.value)
      document.removeEventListener('keydown', this.handleKeyDown)
      window.getSelection().removeAllRanges()
    },
    handleChange(evt) {
      this.emitChange(evt.target.value)
    },
    handleFocus() {
      document.addEventListener('keydown', this.handleKeyDown)
    },
    handleKeyDown(evt) {
      const key = evt.keyCode || evt.which

      if (key === 13) {
        this.applyConstraints(this.$refs.input.value)
      }
    },
    emitChange(val) {
      this.applyConstraints(val)
    },
  },
  mounted() {
    this.checkParentNode()
    let max = toNumber(this.maxValue)
    let min = toNumber(this.minValue)
    if (max <= min) {
      [min, max] = [max, min]
    }
    [this.minValue, this.maxValue] = [min, max]
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
