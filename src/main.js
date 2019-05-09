import DatBoolean from './components/boolean.vue'
import DatButton from './components/button.vue'
import DatColor from './components/color.vue'
import DatFolder from './components/folder.vue'
import DatNumber from './components/number.vue'
import DatSelect from './components/select.vue'
import DatString from './components/string.vue'
import DatGui from './components/gui.vue'

const components = [
  DatBoolean,
  DatButton,
  DatColor,
  DatFolder,
  DatNumber,
  DatSelect,
  DatString,
  DatGui,
]

const VueDatGui = {
  install(Vue) {
    components.map(component => Vue.component(component.name, component))
  },
}
typeof window !== 'undefined' && window.Vue && window.Vue.use(VueDatGui)

export default VueDatGui
