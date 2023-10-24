<script setup>
import FlujoResiduosSolidosUrbanosCDMX from './../../../src/componentes/FlujoResiduosSolidosUrbanosCDMX.vue'

import flujo_residuos_solidos_urbanos_cdmx from './../public/flujo-residuios-solidos-urbanos-cdmx.json'
const datos = flujo_residuos_solidos_urbanos_cdmx
</script>

<template>
  <div>
    <h2>Básico</h2>
    <FlujoResiduosSolidosUrbanosCDMX :datos="datos" />
  </div>
</template>
