// import 'ol/ol.css'
// import 'sisdai-css'

import { FlujoResiduosSolidosUrbanosCDMX } from './componentes'

// export default {
//   install: Vue => {
//     Vue.component('FlujoResiduosSolidosUrbanosCDMX', FlujoResiduosSolidosUrbanosCDMX)
//   },
// }

const plugin = {
    install: function (Vue) {
      Vue.use(FlujoResiduosSolidosUrbanosCDMX)
    },
}
  

export {
    FlujoResiduosSolidosUrbanosCDMX,
}
