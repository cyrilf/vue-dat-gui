<script setup lang="ts">
interface Props {
  label?: string;
  closed?: boolean;
}

withDefaults(defineProps<Props>(), {
  label: "",
  closed: false,
});
const isClosed = defineModel({ type: Boolean });
const handleClick = () => {
  isClosed.value = !isClosed.value;
};
</script>

<template>
  <li :class="['folder', { closed: isClosed }]">
    <div ref="label" class="group">
      <div class="text" @click="handleClick">
        <div class="symbol">{{ isClosed ? "▼" : "▲" }} {{ label }}</div>
      </div>
      <ul>
        <slot></slot>
      </ul>
    </div>
  </li>
</template>

<style lang="css" scoped>
.folder {
  .text {
    font-weight: bold;
    height: var(--row-height);
    user-select: none;
    cursor: pointer;
    border-bottom: 1px solid var(--light-background-color);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .symbol {
      position: absolute;
      left: 10px;
    }
  }

  ul {
    margin-left: var(--nest-margin);
    width: calc(100% - var(--nest-margin));
  }

  &.closed {
    ul {
      display: none;
    }
  }
}
</style>
