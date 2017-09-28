/**
 * @Author: 魏巍
 * @Date:   2017-09-19T13:33:14+08:00
 * @Email:  js_weiwei_100@hotmail.com
 * @Filename: main.js
 * @Last modified by:   魏巍
 * @Last modified time: 2017-09-25T11:47:44+08:00
 */


import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import filters from './filters'
import jsonp from 'jsonp'

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

Vue.prototype.$axios=axios;
Vue.prototype.$jsonp = jsonp;

let router = new VueRouter({
	routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
