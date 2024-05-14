<script setup lang="ts">
import { computed } from "vue";

interface Item {
  name: string;
  value: string;
}

interface Props {
  label?: string;
  items?: Item[] | string[] | number[];
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  items: () => [],
  disabled: false,
});
const isDisabled = computed(() => props.disabled);
const selected = defineModel({ type: String, default: "" });
const localItems = computed(() =>
  props.items.map((item) =>
    typeof item === "object"
      ? item
      : { name: (item || "").toString(), value: item }
  )
);
</script>

<template>
  <li class="control-item select" :class="{ disabled: isDisabled }">
    <label ref="label">
      <span class="label-text">{{ label }}</span>
      <div class="control">
        <select v-model="selected" class="w-100" :disabled="isDisabled">
          <option
            v-for="item in localItems"
            :key="item.value"
            :value="item.value"
          >
            {{ item.name }}
          </option>
        </select>
      </div>
    </label>
  </li>
</template>
