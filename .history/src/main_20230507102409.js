import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'
import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

/* import the fontawesome core */

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyABHQe7J6OOFzhEhAabIcasklxhDP_kfr0',
    libraries: 'places',
  }
});