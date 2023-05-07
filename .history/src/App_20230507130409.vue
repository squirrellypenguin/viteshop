<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import '@/scss/app.scss'

export default {
  computed: {
    layout() {
      return `layout-${this.$route.meta.layout || 'default'}`
    }
  }
}
</script>
<style>
@font-face {
  font-family: "art";
  src: local("art"),
   url(./assets/art.otf) format("opentype");
}
</style>