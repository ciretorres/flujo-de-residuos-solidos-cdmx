// import 'ol/ol.css'
// import 'sisdai-css'

// import { FlujoResiduosSolidosUrbanosCDMX } from './componentes/flujo-residuos-solidos-urbanos-cdmx'
import FlujoResiduosSolidosUrbanosCDMX from './componentes/FlujoResiduosSolidosUrbanosCDMX.vue'

export default {
  install: Vue => {
    Vue.component(
      'FlujoResiduosSolidosUrbanosCDMX',
      FlujoResiduosSolidosUrbanosCDMX
    )
  },
}

// const plugin = {
//   install: function (Vue) {
//     Vue.use(FlujoResiduosSolidosUrbanosCDMX)
//   },
// }

// export default plugin

export { FlujoResiduosSolidosUrbanosCDMX }
