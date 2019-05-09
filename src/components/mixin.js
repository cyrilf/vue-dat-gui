export default {
  data: () => ({ listElement: null }),
  methods: {
    checkParentNode() {
      const { liClassName } = this
      const dom = this.$refs.label
      const node = dom.parentNode
      if (node && node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName === 'LI') {
          node.classList.add(liClassName)
          this.listElement = node
        } else {
          const listElement = document.createElement('li')
          listElement.className = liClassName
          node.insertBefore(listElement, dom)
          node.removeChild(dom)
          listElement.appendChild(dom)
          this.listElement = listElement
        }
      }
    },
  },
}
