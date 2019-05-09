<template>
  <label ref="label">
    <span class="label-text">
      <slot></slot>
    </span>
    <div class="c">
      <input
        type="text"
        :value="bgColor"
        ref="inputField"
        :style="{'background-color': bgColor, color: borderColor,'text-shadow': inputTextShadow}"
        @keydown="handleKeyDown"
        @blur="handleBlur"/>
      <div class="selector" ref="selector" @mousedown="handleSelector" @touchstart="handleSelector">
        <div
          class="field-knob"
          :style="{
            'margin-top': fieldMarginTop,
            'margin-left': fieldMarginLeft,
            'background-color': bgColor,
            'border-color': borderColor}"
          @mousedown="fieldDown"
          @touchstart="fieldDown">
        </div>
        <div class="saturation-field" ref="saturationField">
          <div class="valueField" ref="valueField" @mousedown="fieldDown" @touchstart="fieldDown">
          </div>
        </div>
        <div class="hue-field" ref="hueField" @mousedown="fieldDownH" @touchstart="fieldDownH">
          <div class="hue-knob" :style="{'margin-top':hueMarginTop}"></div>
        </div>
      </div>
    </div>
  </label>
</template>

<script>
import debounce from 'lodash.debounce'
import assignIn from 'lodash.assignin'
import liMixin from './mixin'
import Color from './color/lib/Color'
import interpret from './color/lib/interpret'

const vendors = ['-moz-', '-o-', '-webkit-', '-ms-', '']

export default {
  name: 'DatColor',
  props: {
    color: {
      required: true,
    },
  },
  model: {
    prop: 'color',
    event: 'change',
  },
  data() {
    return {
      liClassName: 'cr color',
      current: this.color,
      currentColor: new Color(this.color),
      setCurrentDebounced: debounce(function debounced(val) { this.current = val }, 20),
    }
  },
  computed: {
    flip() { return this.currentColor.v < 0.5 || this.currentColor.s > 0.5 ? 255 : 0 },
    inputTextShadow() {
      const f = 255 - this.flip
      return `0 1px 1px rgb(${f}, ${f}, ${f})`
    },
    fieldMarginTop() { return `${100 * (1 - this.currentColor.v) - 7}px` },
    fieldMarginLeft() { return `${100 * this.currentColor.s - 7}px` },
    bgColor() {
      const color = this.currentColor.toHexString()
      return color
    },
    borderColor() { return `rgb(${this.flip}, ${this.flip}, ${this.flip})` },
    hueMarginTop() { return `${(1 - this.currentColor.h / 360) * 100}px` },
  },
  mixins: [liMixin],
  watch: {
    color(val) {
      this.current = val
    },
    bgColor(val) {
      if (this.listElement) {
        this.listElement.style.borderLeftColor = val
      }
    },
    current(val) {
      try {
        this.currentColor = new Color(val)
      } catch (ex) {} // eslint-disable-line no-empty
      this.linearGradient(
        this.$refs.saturationField,
        'left',
        '#fff',
        this.getCopy(),
      )
      this.$emit('change', val)
    },
  },
  methods: {
    linearGradient(elem, x, a, b) {
      elem.style.background = '' // eslint-disable-line no-param-reassign
      vendors.forEach((vendor) => {
        elem.style.cssText += `background: ${vendor}linear-gradient(${x}, ${a} 0%, ${b} 100%)` // eslint-disable-line no-param-reassign
      })
    },
    hueGradient() {
      const elem = this.$refs.hueField
      elem.style.background = ''
      vendors.forEach((vendor) => {
        elem.style.cssText += `background: ${vendor}linear-gradient(
            top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%,
            #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%)`
      })
    },

    handleBlur() {
      const { inputField } = this.$refs
      let val = inputField.value
      if (val === this.currentColor.toHexString()) return

      try {
        val = JSON.parse(val)
      } catch (ex) {} // eslint-disable-line no-empty
      const i = interpret(val)
      if (i !== false) {
        const temp = new Color(0)
        temp.state = i
        this.current = this.getOrginal(temp)
      } else {
        inputField.value = this.currentColor.toHexString()
      }
    },
    handleSelector() {
      const { selector } = this.$refs
      selector.classList.add('drag')
      window.addEventListener('mouseup', () => selector.classList.remove('drag'))
    },
    handleKeyDown(e) {
      e.keyCode === 13 && this.handleBlur()
    },
    fieldDown(e) {
      this.setSV(e)
      window.addEventListener('mousemove', this.setSV)
      window.addEventListener('touchmove', this.setSV)
      window.addEventListener('mouseup', this.fieldUpSV)
      window.addEventListener('touchend', this.fieldUpSV)
    },
    fieldDownH(e) {
      this.setH(e)
      window.addEventListener('mousemove', this.setH)
      window.addEventListener('touchmove', this.setH)
      window.addEventListener('mouseup', this.fieldUpH)
      window.addEventListener('touchend', this.fieldUpH)
    },
    fieldUpSV() {
      window.removeEventListener('mousemove', this.setSV)
      window.removeEventListener('touchmove', this.setSV)
      window.removeEventListener('mouseup', this.fieldUpSV)
      window.removeEventListener('touchend', this.fieldUpSV)
    },
    fieldUpH() {
      window.removeEventListener('mousemove', this.setH)
      window.removeEventListener('touchmove', this.setH)
      window.removeEventListener('mouseup', this.fieldUpH)
      window.removeEventListener('touchend', this.fieldUpH)
    },
    setSV(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault()
      }

      const fieldRect = this.$refs.saturationField.getBoundingClientRect()
      const { clientX, clientY } = (e.touches && e.touches[0]) || e
      let s = (clientX - fieldRect.left) / (fieldRect.right - fieldRect.left)
      let v = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top)

      if (v > 1) {
        v = 1
      } else if (v < 0) {
        v = 0
      }

      if (s > 1) {
        s = 1
      } else if (s < 0) {
        s = 0
      }

      this.currentColor.v = v
      this.currentColor.s = s
      this.setCurrentDebounced(this.currentColor.toOriginal())

      return false
    },
    setH(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault()
      }

      const fieldRect = this.$refs.hueField.getBoundingClientRect()
      const { clientY } = (e.touches && e.touches[0]) || e
      let h = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top)
      if (h > 1) {
        h = 1
      } else if (h < 0) {
        h = 0
      }

      this.currentColor.h = h * 360
      this.setCurrentDebounced(this.currentColor.toOriginal())

      return false
    },
    getCopy() {
      const color = new Color(0)
      assignIn(color.state, this.currentColor.state)
      color.s = 1
      color.v = 1

      return color.toHexString()
    },
    getOrginal(color) {
      // eslint-disable-next-line no-param-reassign
      if (color.a === undefined) color.a = this.currentColor.a
      return this.currentColor.state.conversion.write(color)
    },
  },
  mounted() {
    this.checkParentNode()
    this.hueGradient()
    this.linearGradient(this.$refs.valueField, 'top', 'rgba(0,0,0,0)', '#000')
    this.currentColor = new Color(this.current)
    this.linearGradient(
      this.$refs.saturationField,
      'left',
      '#fff',
      this.getCopy(),
    )
  },
}
</script>

<style lang="scss">
@import "../assets/base.scss";

.vue-dat-gui .cr.color {
  border-left: $border-left-size solid $background-color;

  input[type="text"] {
    text-align: center;
    font-weight: bold;
    width: 100%;
  }

  .c:hover .selector,
  .selector.drag {
    display: block;
  }

  .selector {
    display: none;
    width: 122px;
    padding: 3px;
    background-color: #222;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    position: absolute;
    z-index: 10;
    margin-top: -3px;

    .field-knob {
      width: 12px;
      height: 12px;
      position: absolute;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
      border-radius: 12px;
      border: 2px solid #fff;
      cursor: pointer;
      z-index: 1;
    }

    .saturation-field {
      width: 100px;
      height: 100px;
      border: 1px solid #555;
      margin-right: 3px;
      cursor: pointer;

      .valueField {
        width: 100%;
        height: 100%;
        background: none;
      }
    }

    .hue-field {
      width: 15px;
      height: 100px;
      border: 1px solid #555;
      cursor: ns-resize;
      top: 3px;
      right: 3px;
      position: absolute;

      .hue-knob {
        width: 15px;
        height: 2px;
        border-right: 4px solid #fff;
        position: absolute;
        z-index: 1;
        top: -3px;
      }
    }
  }
}
</style>
