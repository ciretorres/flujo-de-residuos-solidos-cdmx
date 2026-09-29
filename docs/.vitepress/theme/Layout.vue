<script setup>
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const { Layout } = DefaultTheme

const route = useRoute()

const mostrarBanner = ref(true)

const estaEnRutaBase = computed(() => {
  return route.path === '/flujo-de-residuos-solidos-cdmx/'
})

function cerrarBanner() {
  mostrarBanner.value = false
}

function manejarTecla(event) {
  if (event.key === 'Escape' && mostrarBanner.value) {
    cerrarBanner()
  }
}

onMounted(() => {
  window.addEventListener('keydown', manejarTecla)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', manejarTecla)
})
</script>

<template>
  <Layout>
    <template #layout-top>
      <div v-if="estaEnRutaBase && mostrarBanner" class="top-banner">
        <button
          class="top-banner__close"
          type="button"
          aria-label="Cerrar aviso"
          title="Cerrar aviso"
          @click="cerrarBanner"
        >
          ×
        </button>

        <div class="top-banner__content">
          <p>
            This interactive visualization was developed in collaboration with
            <a
              href="https://www.facebook.com/patricia.g.lara.75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Patricia Galán Lara</b>
            </a>
            and the <b>Information Design team</b> from the Master’s program at UAM-Cuajimalpa.
          </p>

          <p>
            The diagram illustrates the daily
            <b>Flow of the Urban Solid Waste System in Mexico City (CDMX)</b>, based on the
            <a
              href="http://www.cms.sedema.cdmx.gob.mx/storage/app/media/IRS-2015-14dic-2016.compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inventario de Residuos Sólidos</a
            >
            published by Secretaría del Medio Ambiente (<a
              href="https://www.sedema.cdmx.gob.mx/programas/programa/residuos-solidos"
              target="_blank"
              rel="noopener noreferrer"
              ><b>SEDEMA</b> </a
            >) in 2016.
          </p>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style lang="css" scoped>
.top-banner {
  position: relative;
  z-index: 100;
  width: 100%;
  min-height: 36px;
  padding: 18px 56px 18px 24px;

  /* display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; */

  color: #ffffff;
  background: linear-gradient(90deg, #2563eb, #7c3aed);
  font-size: 16px;
  line-height: 20px;
  /* text-align: center; */
}

@media (max-width: 640px) {
  .top-banner {
    /* padding: 24px 24px; */
  }
}

.top-banner__content {
  max-width: 1250px;
  margin: 0 auto;
}

.top-banner p {
  margin: 0 0 10px;
}

.top-banner p:last-child {
  margin-bottom: 0;
}

.top-banner a {
  color: #ffffff;
  font-weight: 600;
  text-decoration: underline;
}

.top-banner a:hover {
  opacity: 0.8;
}

.top-banner__close {
  position: absolute;
  top: 12px;
  right: 18px;

  width: 32px;
  height: 32px;
  padding: 0;

  /* color: #78350f; */
  color: #ffffff;
  background: transparent;
  border: 0;
  border-radius: 4px;

  font-size: 28px;
  line-height: 28px;
  cursor: pointer;
}

.top-banner__close:hover {
  background: rgba(120, 53, 15, 0.12);
}

.top-banner__close:focus-visible {
  outline: 2px solid #92400e;
  outline-offset: 2px;
}
</style>
