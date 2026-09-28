// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { FlujoResiduosSolidosUrbanosCDMX } from './components'

export default {
  install: (Vue) => {
    Vue.component('FlujoResiduosSolidosUrbanosCDMX', FlujoResiduosSolidosUrbanosCDMX)
  },
}

export { FlujoResiduosSolidosUrbanosCDMX }
