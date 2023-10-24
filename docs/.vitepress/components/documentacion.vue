<script setup>
import { onMounted } from 'vue'

const base_uri = document
  .querySelector('html')
  .baseURI.includes('/markdown-examples.html')
onMounted(() => {
  const aside = document.querySelector('div.aside')
  // console.log('base_uri', base_uri)
  // console.log('aside', aside)
  if (base_uri) {
    aside.style.display = 'block'
  }
})
</script>

<template></template>
