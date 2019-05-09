<template>
    <div ref="label" class="dg">
        <div class='title' @click="handleClick">
            {{title}}
        </div>
        <ul>
            <slot></slot>
        </ul>
    </div>
</template>

<script>
import liMixin from './mixin'

export default {
  name: 'DatFolder',
  props: {
    title: String,
    closed: Boolean,
  },
  data() {
    return {
      close: this.closed,
    }
  },
  computed: {
    liClassName() {
      if (this.close) return 'folder closed'
      return 'folder'
    },
  },
  mixins: [liMixin],
  methods: {
    handleClick() {
      this.close = !this.close
      const li = this.$refs.label.parentNode
      li.classList[this.close ? 'add' : 'remove']('closed')
    },
  },
  mounted() {
    this.checkParentNode()
  },
}
</script>

<style lang="scss">
@import "../assets/base.scss";

.vue-dat-gui li.folder {
  display: block;
  padding: 0;

  .title {
    font-weight: bold;
    user-select: none;
    display: block;
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
