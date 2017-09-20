<template>
  <div id="app">
    <v-head :isBack='isBack' :title="title='首页'" :show="true"></v-head>
    <v-slider  :slider="slider"></v-slider>
    <v-loading :loading="loading" @click="closed()"></v-loading>
    <!--<v-login></v-login>-->
    <!--<v-register></v-register>-->
    <!--<v-forget></v-forget>-->
    <v-footer :menu="menu" :show="true"></v-footer>
  </div>
</template>
<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    import vHead from './components/common/header.vue'
    import vSlider from './components/component/slider.vue'
    import vFooter from './components/common/footer.vue'
    import vLoading from './components/component/loading.vue'
    import vLogin from './components/component/login.vue'
    import vRegister from './components/component/register.vue'
    import vForget from './components/component/forget.vue'
    import router from '../router.config'
    //Vue.use(VueRouter);
    //Vue.use(VueAxios, axios);
    Vue.prototype.$axios = axios;
    export default {
      name: 'app',
      data () {
        return {
          title:'活动',
	      isBack: false,
          loading:{
              show:false,
              type:1,
              msg:'努力加载中...',
              mask:true,
              isAnimation:false,
          },
	      menu: [
            {
              title: '首页',
              href: 'index.html',
              icon: 'mui-icon-home',
              active:1
            },
            {
              title: '发布',
              href: 'release.html',
              icon: 'mui-icon mui-icon-plusempty',
              active:0
            },
            {
              title: '我的',
              href: 'personal.html',
              icon: 'mui-icon-contact',
              active:0
            }
	      ],
          slider:{
              show:false,
              loop:true,
              title:true,
              timer:4e3,
              indicator:true,
              images: [
                  {
                      title: '穿越灵白线,挑战自我极限',
                      href: 'http://baidu.com',
                      src: '/static/images/01.gif'
                  },
                  {
                      title: '大阳山森林水上世界--激情一夏',
                      href: 'http://baidu.com',
                      src: '/static/images/02.jpg'
                  },
                  {
                      title: '西藏日喀则远行--寻找心灵的归属',
                      href: 'http://baidu.com',
                      src: '/static/images/03.jpg'
                  }
              ]
          }
        }
      },
      components:{
          vHead,
          vSlider,
          vLoading,
          vLogin,
          vForget,
          vRegister,
          vFooter
      },
      mounted(){

      }
    }
    const app = new Vue({
        //router
    }).$mount('#app');

</script>
<style lang="scss">
  #app{
    background-color: #fff;
  }
</style>
