import SisdaiNavegacionGobMx from './navegacion-gob-mx/SisdaiNavegacionGobMx.vue'
import SisdaiNavegacionPrincipal from './navegacion-principal/SisdaiNavegacionPrincipal.vue'
import SisdaiPiePaginaGobMx from './pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue'
import SisdaiPiePaginaConahcyt from './pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue'
import SisdaiColapsableNavegacion from './colapsable-navegacion/SisdaiColapsableNavegacion.vue'
import SisdaiMenuLateral from './menu-lateral/SisdaiMenuLateral.vue'
import SisdaiIndiceDeContenido from './indice-de-contenido/SisdaiIndiceDeContenido.vue'
import FlujoResiduosSolidosUrbanosCDMX from './flujo-residuos-solidos-urbanos-cdmx/FlujoResiduosSolidosUrbanosCDMX.vue'


export default {
  install: Vue => {
    Vue.component('FlujoResiduosSolidosUrbanosCDMX', FlujoResiduosSolidosUrbanosCDMX)
  },
}

export {
    FlujoResiduosSolidosUrbanosCDMX,
}
