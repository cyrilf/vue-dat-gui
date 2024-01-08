<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <div class="flex align-content-center flex-wrap counter">
    <label class="flex align-items-center justify-content-center"
      >Counter:</label
    >
    <button
      icon="pi pi-plus"
      class="p-button-sm flex align-items-center justify-content-center"
      @click="count++"
    ></button>
    <span class="flex align-items-center justify-content-center count">{{
      count
    }}</span>
    <button
      icon="pi pi-minus"
      class="p-button-sm flex align-items-center justify-content-center"
      @click="count--"
    ></button>
  </div>
</template>

<style lang="scss" scoped>
.counter {
  label {
    padding-right: 10px;
    font-weight: bold;
  }
  .count {
    padding: 0 10px;
  }
}
</style>
