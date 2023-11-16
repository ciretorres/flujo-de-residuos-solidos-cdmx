<script setup>
import flujo_residuos_solidos_urbanos_cdmx from './../public/data/flujo-residuios-solidos-urbanos-cdmx.json'
const datos = flujo_residuos_solidos_urbanos_cdmx
</script>

<template>
  <div>
    <FlujoResiduosSolidosUrbanosCDMX :datos="datos" />
  </div>
</template>
