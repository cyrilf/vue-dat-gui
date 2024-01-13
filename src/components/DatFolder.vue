<script setup lang="ts">
interface Props {
  label?: string;
}

withDefaults(defineProps<Props>(), {
  label: "",
});
const isOpen = defineModel<boolean>("open", { default: true });
const handleClick = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <li class="folder">
    <div ref="label" class="group">
      <div class="text" @click="handleClick">
        <div class="text--inner w-100">
          <span class="symbol">{{ isOpen ? "▼" : "►" }}</span>
          {{ label }}
        </div>
      </div>
      <ul v-show="isOpen">
        <slot></slot>
      </ul>
    </div>
  </li>
</template>

<style lang="css" scoped>
.folder {
  .text {
    background: var(--darker-background-color);
    font-weight: bold;
    height: var(--row-height);
    user-select: none;
    cursor: pointer;
    border-bottom: 1px solid var(--light-background-color);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .text--inner {
      position: absolute;
      left: 10px;
      display: inline-flex;
      align-items: center;
    }
    .symbol {
      font-size: 0.5rem;
      margin-right: 8px;
    }
  }

  ul {
    margin-left: var(--nest-margin);
    width: calc(100% - var(--nest-margin));
  }
}
</style>
