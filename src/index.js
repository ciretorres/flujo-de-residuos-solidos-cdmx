import { FlujoResiduosSolidosUrbanosCDMX, SisdaiGraficas } from './componentes'

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
