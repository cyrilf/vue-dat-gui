<template>
  <li :class="['folder', {'closed': close}]">
    <div ref="label" class="group">
        <div class='text' @click="handleClick">
            {{label}}
        </div>
        <ul>
            <slot></slot>
        </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: 'DatFolder',
  props: {
    label: String,
    closed: Boolean,
  },
  data() {
    return {
      close: this.closed,
    }
  },
  methods: {
    handleClick() {
      this.close = !this.close
    },
  },
}
</script>

<style lang="scss">
@import "../assets/base.scss";

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
