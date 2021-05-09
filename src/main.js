import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue Multiselect
import 'vue-multiselect/dist/vue-multiselect.min.css'

import {
  AlertPlugin,
  BootstrapVue
} from 'bootstrap-vue'

// My Styles
import '@/assets/styles/bootstrap.min.css'

Vue.config.productionTip = false

// Bootstrap
Vue.use(AlertPlugin);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
