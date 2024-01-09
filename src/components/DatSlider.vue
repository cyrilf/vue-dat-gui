<script setup lang="ts">
import { computed, ref } from "vue";
import { clamp } from "../utils/Number";

interface Props {
  value: number;
  min: number;
  max: number;
  width?: number;
}

const props = withDefaults(defineProps<Props>(), {});
const emit = defineEmits<{
  updateState: [value: number];
}>();

const slider = ref<HTMLSpanElement | null>(null);

const bgWidth = computed(() =>
  clamp(((props.value - props.min) * 100) / (props.max - props.min), 0, 100)
);

const updateState = (pageX: number) => {
  if (slider.value) {
    const rect = slider.value.getBoundingClientRect();
    const x = pageX - rect.left;
    const width = rect.right - rect.left;
    const value = props.min + clamp(x / width, 0, 1) * (props.max - props.min);

    emit("updateState", value);
  }
};

const handleMouseMove = (event: MouseEvent) => {
  updateState(event.pageX);
};
const handleMouseUp = (event: MouseEvent) => {
  updateState(event.pageX);

  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("mouseup", handleMouseUp);
};

const handleMouseDown = (event: MouseEvent) => {
  updateState(event.pageX);

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
};
</script>

<template>
  <span
    ref="slider"
    class="slider"
    :style="{ width: `${width}px`, 'background-size': `${bgWidth}% 100%` }"
    @mousedown="handleMouseDown"
  />
</template>

<style lang="scss">
@import "../assets/main.scss";

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
