import DefaultTheme from 'vitepress/theme'
import DemoContainer from '../components/DemoContainer.vue'
import VueDatGui from 'vue-dat-gui'

import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueDatGui)
    app.component('DemoContainer', DemoContainer)
  }
}
