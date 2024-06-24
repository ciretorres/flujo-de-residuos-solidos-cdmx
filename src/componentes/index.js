import { FlujoResiduosSolidosUrbanosCDMX } from './flujo-residuos-solidos-urbanos-cdmx'
import { SisdaiGraficas } from './sisdai-graficas'

export default {
  install: Vue => {
    Vue.component(
      'FlujoResiduosSolidosUrbanosCDMX',
      FlujoResiduosSolidosUrbanosCDMX
    )
    Vue.component('SisdaiGraficas', SisdaiGraficas)
  },
}

export { FlujoResiduosSolidosUrbanosCDMX, SisdaiGraficas }
