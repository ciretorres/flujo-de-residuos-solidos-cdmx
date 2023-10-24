<script setup>
import flujo_residuos_solidos_urbanos_cdmx from './../public/flujo-residuios-solidos-urbanos-cdmx.json'
const datos = flujo_residuos_solidos_urbanos_cdmx
</script>

<template>
  <div>
    <h1>Flujo de Residuos Sólidos Urbanos de la CDMX</h1>
    <FlujoResiduosSolidosUrbanosCDMX :datos="datos" />
  </div>
</template>
