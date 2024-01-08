<script setup lang="ts">
import { ref } from "vue";
const bool = ref(true);
</script>
<template>
  <DatBoolean label="Try to check me" v-model="bool" />
</template>
