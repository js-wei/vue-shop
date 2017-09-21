import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import routers from './router.config'
import stores from './store/store.js'

Vue.use(VueAxios,axios);
Vue.use(VueRouter);
Vue.prototype.$axios = axios;
const router=new VueRouter({
    mode: 'history', //切换路径模式，变成history模式
    scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routers,
    hashbang:true
});

new Vue({
    el: '#app',
    router,
    store:stores,
    render: h => h(App)
});