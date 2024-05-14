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
const string = defineModel({ type: String, default: "" });
</script>

<template>
  <li class="control-item string" :class="{ disabled: watchDisabled }">
    <label ref="label">
      <span class="label-text">{{ label }}</span>
      <div class="control">
        <input type="text" v-model="string" :disabled="watchDisabled" />
      </div>
    </label>
  </li>
</template>
