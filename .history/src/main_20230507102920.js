import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
/* import the fontawesome core */

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyABHQe7J6OOFzhEhAabIcasklxhDP_kfr0',
    libraries: 'places',
  }
});




new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')


