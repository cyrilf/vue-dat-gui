<script setup lang="ts">
interface Props {
  label?: string;
}

withDefaults(defineProps<Props>(), {
  label: "",
});
const model = defineModel({ type: Boolean });
const handleChange = () => {
  model.value = !model.value;
};
</script>

<template>
  <li class="control-item boolean">
    <label ref="label">
      <span class="label-text">{{ label }}</span>
      <div class="control">
        <input type="checkbox" :checked="model" @change="handleChange" />
      </div>
    </label>
  </li>
</template>
