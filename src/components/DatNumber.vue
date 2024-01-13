<script setup lang="ts">
import { computed } from "vue";
import NumberSlider from "@/components/private/NumberSlider.vue";

import { clamp } from "@/utils/Number";

interface Props {
  label?: string;
  showSlider?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  showSlider: true,
});
const number = defineModel<number>({ required: true });
let minValue =
  typeof props.min === "number" ? props.min : Number.NEGATIVE_INFINITY;
let maxValue =
  typeof props.max === "number" ? props.max : Number.POSITIVE_INFINITY;
if (minValue > maxValue) {
  [minValue, maxValue] = [maxValue, minValue];
}

const hasSlider = computed(
  () =>
    props.showSlider && Number.isFinite(minValue) && Number.isFinite(maxValue)
);

const stepValue = computed(() => {
  if (props.step) {
    return props.step;
  }

  const val = maxValue - minValue;
  return 10 ** Math.floor(Math.log(Math.abs(val)) / Math.LN10) / 10;
});

const sanitizeNumber = (rawNumber: number) => {
  let safeNumber = clamp(rawNumber, minValue, maxValue);
  if (stepValue.value !== 0 && Number.isFinite(stepValue.value)) {
    safeNumber = Math.round(safeNumber / stepValue.value) * stepValue.value;
  }
  number.value = safeNumber;
};

const handleChange = (event: Event) => {
  sanitizeNumber(Number((event.target as HTMLInputElement).value));
};
</script>

<template>
  <li class="control-item number">
    <label ref="label">
      <span class="label-text">{{ label }}</span>
      <div class="control">
        <NumberSlider
          v-show="hasSlider"
          :min="minValue"
          :max="maxValue"
          :value="number"
          @updateState="sanitizeNumber"
        >
        </NumberSlider>
        <input
          type="number"
          ref="input"
          class="input"
          :min="minValue"
          :max="maxValue"
          :step="stepValue"
          :value="number"
          @input="handleChange"
        />
      </div>
    </label>
  </li>
</template>

<style lang="css" scoped>
.control-item.number {
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
    appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
