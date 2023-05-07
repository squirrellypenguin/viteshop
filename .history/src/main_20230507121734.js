import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'




/* import the fontawesome core */

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)


new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')


