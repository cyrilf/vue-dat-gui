<script setup lang="ts">
import { computed, ref } from "vue";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

interface Props {
  label?: string;
}

withDefaults(defineProps<Props>(), {
  label: "",
});
const color = defineModel({ type: String, required: true });
let showColorPicker = ref(false);

const inputColor = computed(() => {
  if (color.value.length !== 7 || color.value[0] !== "#") {
    return "black";
  }
  const r = parseInt(color.value.substring(1, 3), 16);
  const g = parseInt(color.value.substring(3, 5), 16);
  const b = parseInt(color.value.substring(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
});

const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    showColorPicker.value = false;
  }
};
const onMouseOver = () => {
  showColorPicker.value = true;
  window.addEventListener("keydown", onKeyDown);
};

const onMouseLeave = () => {
  showColorPicker.value = false;
  window.removeEventListener("keydown", onKeyDown);
};
</script>

<template>
  <li
    class="control-item color"
    :style="{ 'border-left-color': color }"
    @mouseleave="onMouseLeave"
  >
    <label>
      <span class="label-text">{{ label }}</span>
      <div class="control" @mouseover="onMouseOver">
        <input
          type="text"
          :value="color"
          :style="{ 'background-color': color, color: inputColor }"
          readonly
        />
        <div class="color-picker-container">
          <ColorPicker
            v-model:pureColor="color"
            pickerType="chrome"
            is-widget
            disable-history
          />
        </div>
      </div>
    </label>
  </li>
</template>

<style lang="css" scoped>
.control-item.color {
  input[type="text"] {
    text-align: center;
  }

  .color-picker-container {
    display: none;
    position: absolute;
    right: 0;
    z-index: 1;
  }
}

.control-item.color:hover .color-picker-container {
  display: block;
}
</style>
