import Vue from 'vue'
import App from './vue/App.vue'

// VueMaterial: http://vuematerial.io/#/getting-started
var VueMaterial = require('vue-material')
Vue.use(VueMaterial)

new Vue({
  el: '#app',
  render: h => h(App)
})
