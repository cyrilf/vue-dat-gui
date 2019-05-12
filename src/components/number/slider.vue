<template>
  <span
    ref="slider"
    class="slider"
    :style="{width: `${width}px`,'background-size': `${bgWidth}% 100%`}"
    @mousedown="handleMouseDown"
  />
</template>

<script>
import clamp from 'lodash.clamp'
import toNumber from 'lodash.tonumber'

export default {
  name: 'Slider',
  props: {
    value: [Number, String],
    min: Number,
    max: Number,
    width: Number,
  },
  data() {
    return {
      currentValue: toNumber(this.value) || 0,
    }
  },
  watch: {
    value(val) {
      this.currentValue = toNumber(val)
    },
  },
  computed: {
    bgWidth() {
      return clamp(
        (this.currentValue - this.min) * 100 / (this.max - this.min),
        0,
        100,
      )
    },
  },
  methods: {
    handleMouseDown(evt) {
      this.updateState(evt.pageX)

      window.addEventListener('mousemove', this.handleMouseMove)
      window.addEventListener('mouseup', this.handleMouseUp)
    },
    handleMouseMove(evt) { this.updateState(evt.pageX) },
    handleMouseUp(evt) {
      this.updateState(evt.pageX)

      window.removeEventListener('mousemove', this.handleMouseMove)
      window.removeEventListener('mouseup', this.handleMouseUp)
    },
    updateState(pageX) {
      const rect = this.$refs.slider.getBoundingClientRect()
      const x = pageX - rect.left
      const width = rect.right - rect.left
      const value = this.min + clamp(x / width, 0, 1) * (this.max - this.min)

      this.$emit('updateState', value)
    },
  },
}
</script>

<style lang="scss">
@import "../../assets/base.scss";

.vue-dat-gui .slider {
  height: 25px;
  display: block;
  position: relative;
  cursor: ew-resize;
  border: 1px solid $background-color;
  background-color: $input-background-color;
  background-image: linear-gradient(90deg, $number-color, $number-color);
  background-size: 0% 100%;
  background-repeat: no-repeat;
}
</style>
