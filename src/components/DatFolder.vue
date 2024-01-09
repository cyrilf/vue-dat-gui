<script setup lang="ts">
interface Props {
  label?: string;
  closed?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  closed: false,
});
const model = defineModel({ type: Boolean });
const handleClick = () => {
  model.value = !model.value;
};
</script>

<template>
  <li :class="['folder', { closed: model }]">
    <div ref="label" class="group">
      <div class="text" @click="handleClick">
        {{ label }}
      </div>
      <ul>
        <slot></slot>
      </ul>
    </div>
  </li>
</template>

<style lang="scss">
@import "../assets/main.scss";

.vue-dat-gui li.folder {
  .text {
    font-weight: bold;
    user-select: none;
    cursor: pointer;
    padding: 5px 5px 5px 16px;
    background: $folder-open;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  ul {
    margin-left: $nest-margin;
    width: calc(100% - #{$nest-margin});
  }

  &.closed {
    .title {
      background: $folder-closed;
    }
    ul {
      display: none;
    }
  }
}
</style>
