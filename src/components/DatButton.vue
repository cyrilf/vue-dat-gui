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

const emit = defineEmits<{
  click: [value: MouseEvent];
}>();
const handleClick = (event: MouseEvent) => {
  if (isDisabled.value) return;
  emit("click", event);
};
</script>

<template>
  <li class="control-item button" :class="{ disabled: isDisabled }">
    <label class="w-100" ref="label" @click="handleClick">
      {{ label }}
    </label>
  </li>
</template>
