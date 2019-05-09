<template>
  <div :class="['vue-dat-gui',{'closed': status}]">
    <div class="dg main">
      <ul>
        <slot></slot>
      </ul>
      <div class='close-button' @click="handleClick">
        {{title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatGui',
  data() {
    return {
      status: this.closed,
    }
  },
  computed: {
    title() {
      return this.status ? this.openText : this.closeText
    },
  },
  props: {
    openText: {
      type: String,
      default: 'Close Controls',
    },
    closeText: {
      type: String,
      default: 'Open Controls',
    },
    closed: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.status = !this.status
    },
  },
}
</script>

<style lang="scss">
@import "../assets/base.scss";

.vue-dat-gui {
  position: fixed;
  right: 16px;
  top: 0;
  width: 240px;
  font-size: 12px;
  font-family: "Lucida Grande", sans-serif;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  &.closed {
    ul {
      display: none;
    }
  }

  .close-button {
    border: 0;
    line-height: $button-height - 1;
    height: $button-height;
    cursor: pointer;
    text-align: center;
    background-color: #000;
    &:hover {
      background-color: #111;
    }
  }
  .dg {
    margin: 0;
    padding: 0;
    color: #eee;
    overflow: hidden;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 100%;
      clear: both;
    }
    li:not(.folder) {
      cursor: auto;
      height: $row-height;
      line-height: $row-height;
      overflow: hidden;
      padding: 0 4px 0 5px;
      border-bottom: 1px solid $border-color;
    }
    &.main {
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
  .cr {
    display: block;
    background-color: $background-color;
    user-select: none;
    label {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      padding: 0 0 0 5px;
    }
    .label-text {
      width: 40%;
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      user-select: none;
      text-align: left;
    }
    input[type="text"],
    input[type="number"] {
      background: $input-color;
      border: 1px solid $background-color;
      border-radius: 0;
      padding: 4px;
      margin: 0;
      outline: none;
      font-size: inherit;
      &::-ms-clear {
        display: none;
      }
    }
  }
  .c {
    float: left;
    width: 60%;
  }
  .c:hover .selector,
  .selector.drag {
    display: block;
  }
}
</style>
