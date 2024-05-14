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
const isDisabled = computed(() => props.disabled);
const checked = defineModel({ type: Boolean });
const handleChange = () => {
  checked.value = !checked.value;
};
</script>

<template>
  <li class="control-item boolean" :class="{ disabled: isDisabled }">
    <label ref="label">
      <span class="label-text">{{ label }}</span>
      <div class="control">
        <input
          type="checkbox"
          :checked="checked"
          @change="handleChange"
          :disabled="isDisabled"
        />
      </div>
    </label>
  </li>
</template>
