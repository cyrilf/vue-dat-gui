<script setup lang="ts">
import { computed } from "vue";

interface Props {
  openText?: string;
  closeText?: string;
  closePosition?: "top" | "bottom";
  closed?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  openText: "Open Controls",
  closeText: "Close Controls",
  closePosition: "bottom",
  closed: false,
});

const model = defineModel({ type: Boolean });
const title = computed<string>(() =>
  model.value ? props.openText : props.closeText
);
const handleClick = () => {
  model.value = !model.value;
};
</script>

<template>
  <div :class="['vue-dat-gui', { closed: model }]">
    <div class="group group--main">
      <div
        v-if="closePosition === 'top'"
        class="toggle-button"
        role="button"
        @click="handleClick"
      >
        {{ title }}
      </div>
      <ul>
        <slot></slot>
      </ul>
      <div
        v-if="closePosition === 'bottom'"
        class="toggle-button"
        role="button"
        @click="handleClick"
      >
        {{ title }}
      </div>
    </div>
  </div>
</template>

<style lang="css">
.vue-dat-gui {
  --color: #eee;
  --background-color: #1a1a1a;
  --light-background-color: #272727;
  --ligther-background-color: #3c3c3c;

  --number-color: #2fa1d6;
  --boolean-color: #806787;
  --string-color: #1ed36f;
  --button-color: #e61d5f;
  --select-color: #f4d450;

  --border-left-size: 5px;

  --nest-margin: 4px;
  --row-height: 27px;
  --z-index: 9000;
}
</style>

<style lang="css">
.vue-dat-gui {
  position: fixed;
  top: 0;
  right: 20px;
  width: 245px;
  font-size: 0.7rem;
  font-family: sans-serif;
  color: var(--color);
  z-index: var(--z-index);

  &.closed {
    ul {
      display: none;
    }
  }

  .toggle-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    cursor: pointer;
    background-color: var(--background-color);
    &:hover {
      background-color: var(--light-background-color);
    }
  }

  .group {
    overflow: hidden;
    ul {
      margin: 0;
      padding: 0;
    }
    background-color: var(--background-color);
    li:not(.folder) {
      height: var(--row-height);
      line-height: var(--row-height);
      overflow: hidden;
      padding: 0px 5px 0 10px;
      border-bottom: 1px solid var(--light-background-color);
    }

    &.group--main {
      > ul {
        max-height: 50vh;
        overflow-y: auto;
      }
    }
  }
  .control-item {
    border-left: var(--border-left-size) solid;

    &.boolean {
      border-left-color: var(--boolean-color);
      .control {
        text-align: center;
      }
    }
    &.button {
      border-left-color: var(--button-color);
    }
    &.number {
      border-left-color: var(--number-color);
    }
    &.select {
      border-left-color: var(--select-color);
    }
    &.string {
      border-left-color: var(--string-color);
    }
    &.color {
      border-left-color: var(--background-color);
    }

    &.boolean,
    &.button {
      &:hover {
        background: var(--light-background-color);
        cursor: pointer;
      }
    }

    label {
      display: flex;
    }
    .label-text {
      flex: 4;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .control {
      flex: 6;

      > input[type="text"],
      > input[type="number"] {
        background: var(--light-background-color);
        border: 1px solid var(--background-color);
        border-radius: 0;
        width: 100%;
        padding: 4px;
        margin: 0;
        outline: none;
        font-size: inherit;
        &::-ms-clear {
          display: none;
        }

        &:hover {
          background: var(--ligther-background-color);
        }
        &:focus {
          background: var(--ligther-background-color);
          color: var(--color);
        }
      }
      > input[type="text"] {
        color: var(--string-color);
      }
      > input[type="number"] {
        color: var(--number-color);
      }
    }
  }
}
</style>
