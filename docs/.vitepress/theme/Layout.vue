<script setup>
import LayoutVitePress from 'vitepress/dist/client/theme-default/Layout.vue'
import { onMounted, ref } from 'vue'

const alerta = ref(true)
// let base_uri = document
//   .querySelector('html')
//   .baseURI.includes('/markdown-examples.html')

onMounted(() => {
  document.addEventListener('keyup', function (e) {
    if (e.key === 'Escape') {
      alerta.value = false
    }
  })
  // const buton = document.querySelector('a.VPLink.link.VPNavBarMenuLink')
  // // console.log('base_uri', base_uri)
  // // console.log('aside', aside)
  // // console.log('buton', buton)
  // buton.addEventListener(
  //   'click',
  //   function () {
  //     // console.log(this) // Expected Value: 'Data'
  //     let aside = document.querySelector('div.aside')
  //     base_uri = document
  //       .querySelector('html')
  //       .baseURI.includes('/markdown-examples.html')

  //     let container = document.querySelector('div.container')
  //     // console.log('container', container)

  //     if (base_uri) {
  //       // alerta.value = false
  //     } else {
  //       aside.style.display = 'none'
  //       // container.style.maxWidth = 'none'
  //       // console.log('aquí')
  //     }
  //   }
  //   // .bind('hay')
  // )
  // if (base_uri) {
  //   alerta.value = false
  // }
})
</script>

<template>
  <!-- <h1>Layout</h1> -->
  <div
    v-if="alerta"
    class="alerta-info"
  >
    <p>
      This Interactive visual interface was made in contribution with
      <a
        href="https://www.facebook.com/patricia.g.lara.75"
        target="_blank"
        rel="noopener noreferrer"
        ><b>Patricia Galán Lara</b></a
      >
      and the <b>Information Design's</b> team at the Master in UAM-Cuajimalpa.
    </p>
    <p>
      The diagram shows the flow of a daily
      <b>Urban Solid Waste system at Mexico City (CDMX)</b>, according to
      <a
        href="http://www.cms.sedema.cdmx.gob.mx/storage/app/media/IRS-2015-14dic-2016.compressed.pdf"
        target="_blank"
        rel="noopener noreferrer"
        >Inventario de Residuos Sólidos</a
      >, published by Secretaría del Medio Ambiente,
      <a
        href="https://www.sedema.cdmx.gob.mx/programas/programa/residuos-%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20solidos"
        target="_blank"
        rel="noopener noreferrer"
        >(<b>SEDEMA</b></a
      >) in 2016.
    </p>
    <div style="block; text-align: end;">
      <button @click="alerta = !alerta">cerrar</button>
    </div>
  </div>

  <LayoutVitePress />

  <div class="layout">
    <!-- <Content /> -->
  </div>
</template>

<style>
.alerta-info {
  /* width: 100%; */
  /* min-height: 0.5vh; */
  color: #fff;
  /* background: rgba(235, 235, 245, 0.95); */
  /* background: #1b1b1f9a; */
  /* background: var(--vp-custom-block-info-bg); */
  /* background: var(--vp-custom-block-tip-bg); */
  background: #272843;
  /* background: var(--vp-custom-block-warning-bg); */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 91;
  padding: 46px 64px 32px;
  @media screen and (max-width: 768px) {
    height: auto%;
    padding: 32px 64px;
    background: #272843;
  }
}
/* @media screen and (min-width: 768px) {
  .alerta-info {
    height: 100%;
  }
} */
.alerta-info button {
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 2px 12px;
}
.alerta-info:hover button {
  font-weight: bold;
}
html.mac
  body
  div#app
  div.Layout
  div#VPContent.VPContent
  div.VPDoc.has-aside
  div.container
  div.aside {
  /* display: none; */
}
html.mac
  body
  div#app
  div.Layout
  div#VPContent.VPContent
  div.VPDoc.has-aside
  div.container
  div.content
  div.content-container {
  /* max-width: 992px; */
}
html.mac
  body
  div#app
  div.Layout
  div#VPContent.VPContent
  div.VPDoc.has-aside
  div.container
  div.content {
  /* max-width: 992px;
  padding: 0; */
}
html.mac
  body
  div#app
  div.Layout
  div#VPContent.VPContent
  div.VPDoc.has-aside
  div.container
  div.content
  div.content-container
  div.VPDocOutlineDropdown {
  /* display: none; */
}
</style>
