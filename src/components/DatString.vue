<script setup lang="ts">
interface Props {
  label?: string;
}

withDefaults(defineProps<Props>(), {
  label: "",
});
const string = defineModel({ type: String, default: "" });
</script>

<template>
  <li class="control-item string">
    <label ref="label">
      <span class="label-text">{{ label }}</span>
      <div class="control">
        <input type="text" v-model="string" />
      </div>
    </label>
  </li>
</template>
