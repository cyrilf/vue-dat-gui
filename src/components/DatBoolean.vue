<script setup lang="ts">
interface Props {
  label?: string;
}

withDefaults(defineProps<Props>(), {
  label: "",
});
const checked = defineModel({ type: Boolean });
const handleChange = () => {
  checked.value = !checked.value;
};
</script>

<template>
  <li class="control-item boolean">
    <label ref="label">
      <span class="label-text">{{ label }}</span>
      <div class="control">
        <input type="checkbox" :checked="checked" @change="handleChange" />
      </div>
    </label>
  </li>
</template>
