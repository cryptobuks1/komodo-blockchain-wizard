import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueFormGenerator from "vue-form-generator";
Vue.use(VueFormGenerator);
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
