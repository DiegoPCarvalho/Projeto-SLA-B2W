import Vue from 'vue'
import App from './App.vue'
import BootstrapVue  from 'bootstrap-vue'
import router from './router'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//componentes

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')



