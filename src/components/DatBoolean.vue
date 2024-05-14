<script setup lang="ts">
import { computed } from "vue";

interface Props {
  label?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  disabled: false,
});
const watchDisabled = computed(() => {
  return props.disabled;
});
const checked = defineModel({ type: Boolean });
const handleChange = () => {
  if (watchDisabled.value) {
    return;
  }
  checked.value = !checked.value;
};
</script>

<template>
  <li class="control-item boolean" :class="{ disabled: watchDisabled }">
    <label ref="label">
      <span class="label-text">{{ label }}</span>
      <div class="control">
        <input
          type="checkbox"
          :checked="checked"
          @change="handleChange"
          :disabled="watchDisabled"
        />
      </div>
    </label>
  </li>
</template>
