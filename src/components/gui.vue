<template>
  <div :class="['vue-dat-gui', {'closed': isClosed}]">
    <div class="group group--main">
      <div v-if="closePosition === 'top'" class="toggle-button" @click="toggleOpen">{{title}}</div>
      <ul>
        <slot></slot>
      </ul>
      <div v-if="closePosition === 'bottom'" class="toggle-button" @click="toggleOpen">
        {{title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatGui',
  props: {
    openText: {
      type: String,
      default: 'Open Controls',
    },
    closeText: {
      type: String,
      default: 'Close Controls',
    },
    // define the position of the close button in the menu
    closePosition: {
      type: String,
      default: 'bottom',
    },
    closed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isClosed: this.closed,
    }
  },
  computed: {
    title() {
      return this.isClosed ? this.openText : this.closeText
    },
  },
  methods: {
    toggleOpen() {
      this.isClosed = !this.isClosed
    },
  },
}
</script>

<style lang="scss">
@import "../assets/base.scss";

.vue-dat-gui {
  position: fixed;
  top: 0;
  right: 20px;
  width: 245px;
  font-size: 12px;
  font-family: sans-serif;
  color: $color;

  &.closed {
    ul {
      display: none;
    }
  }

  .toggle-button {
    text-align: center;
    line-height: $button-height - 1;
    height: $button-height;
    cursor: pointer;
    background-color: $background-color;
    &:hover {
      background-color: lighten($background-color, $hover-lighten);
    }
  }

  .group {
    overflow: hidden;
    ul {
      margin: 0;
      padding: 0;
    }
    li:not(.folder) {
      cursor: auto;
      height: $row-height;
      line-height: $row-height;
      overflow: hidden;
      padding: 0 4px 0 5px;
      border-bottom: 1px solid $border-color;
    }
    &.group--main {
      > ul {
        max-height: 50vh;
        overflow-y: auto;

        &::-webkit-scrollbar {
          width: 5px;
          background: $background-color;
        }
        &::-webkit-scrollbar-corner {
          height: 0;
          display: none;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 5px;
          background: lighten($background-color, 30%);
        }
      }
    }
  }

  .control-item {
    background-color: $background-color;
    border-left: $border-left-size solid;

    &.boolean {
      border-left-color: $boolean-color;
      .control { text-align: center; }
    }
    &.button {
      border-left-color: $button-color;
    }
    &.number {
      border-left-color: $number-color;
    }
    &.select {
      border-left-color: $select-color;
    }
    &.string {
      border-left-color: $string-color;
    }
    &.color {
      border-left-color: $background-color;
    }

    &.boolean, &.button {
      &:hover {
        background: #111;
      }
      label {
        cursor: pointer;
      }
    }

    label {
      display: flex;
      padding: 0 0 0 5px;
    }
    .label-text {
      width: 40%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
    }

    .control {
      float: left;
      width: 60%;

      > input[type="text"], > input[type="number"] {
        background: $input-background-color;
        border: 1px solid $background-color;
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
          background: lighten($input-background-color, $hover-lighten);
        }
        &:focus {
          background: lighten($input-background-color, $active-lighten);
          color: #fff;
        }
      }
      > input[type="text"] {
        color: $string-color;
      }
      > input[type="number"] {
        color: $number-color;
      }
    }
    .control:hover .selector,
    .selector.drag {
      display: block;
    }
  }
}
</style>
