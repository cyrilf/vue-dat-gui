<script setup lang="ts">
interface Item {
  name: string;
  value: string;
}

interface Props {
  label?: string;
  items?: Item[];
}

withDefaults(defineProps<Props>(), {
  label: "",
  items: () => [],
});
const model = defineModel({ type: String, default: "" });
</script>

<template>
  <li class="control-item select">
    <label ref="label">
      <span class="label-text">{{ label }}</span>
      <div class="control">
        <select v-model="model" class="w-100">
          <option v-for="item in items" :key="item.value" :value="item.value">
            {{ item.name }}
          </option>
        </select>
      </div>
    </label>
  </li>
</template>
