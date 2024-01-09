<script setup lang="ts">
interface Props {
  label?: string;
}

withDefaults(defineProps<Props>(), {
  label: "",
});
const emit = defineEmits<{
  click: [value: MouseEvent];
}>();
const handleClick = (event: MouseEvent) => emit("click", event);
</script>

<template>
  <li class="control-item button">
    <label class="w-100" ref="label" @click="handleClick">
      {{ label }}
    </label>
  </li>
</template>
