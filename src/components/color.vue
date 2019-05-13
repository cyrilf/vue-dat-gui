<template>
  <li
    class="control-item color"
    :style="{ 'border-left-color': currentColor }"
    @mouseleave="onMouseLeave">
    <label>
      <span class="label-text">{{label}}</span>
      <div class="control" @mouseover="onMouseOver">
        <input
          type="text"
          ref="inputColor"
          :value="currentColor"
          :style="{ 'background-color': currentColor, 'color': inputColor }"
          readonly/>
        <color-picker
          v-show="showColorPicker"
          :color="currentColor"
          class="color-picker"
          @change="onChange"/>
      </div>
    </label>
  </li>
</template>

<script>
import ColorPicker from 'v-color'
import 'v-color/dist/index.css'

export default {
  name: 'DatColor',
  props: {
    color: { required: true },
    label: String,
  },
  model: {
    prop: 'color',
    event: 'change',
  },
  components: {
    ColorPicker,
  },
  data() {
    return {
      currentColor: this.color,
      showColorPicker: false,
    }
  },
  computed: {
    inputColor() {
      if (this.color.length !== 7 || this.color[0] !== '#') { return 'black' }
      const r = parseInt(this.currentColor.substr(1, 2), 16)
      const g = parseInt(this.currentColor.substr(3, 2), 16)
      const b = parseInt(this.currentColor.substr(5, 2), 16)
      const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
      return (yiq >= 128) ? 'black' : 'white'
    },
  },
  methods: {
    onChange(result) {
      this.currentColor = result.hex
      this.$emit('change', this.currentColor)
    },

    onMouseOver() {
      this.showColorPicker = true
      window.addEventListener('keydown', this.onKeyDown)
    },

    onMouseLeave() {
      this.showColorPicker = false
      window.removeEventListener('keydown', this.onKeyDown)
    },

    onKeyDown(event) {
      if (event.key === 'Enter' || event.keyCode === 13) {
        this.showColorPicker = false
      }
    },
  },
}
</script>

<style lang="scss">
@import "../assets/base.scss";

.vue-dat-gui .control-item.color {
  input[type="text"] {
    text-align: center;
  }

  .control > div {
    position: absolute;
    right: 0;
    width: 200px;
    z-index: 1;
  }
}
</style>
