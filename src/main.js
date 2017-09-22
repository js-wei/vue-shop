import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'

Vue.use(VueRouter)

let router = new VueRouter({
	routes
}); 

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})