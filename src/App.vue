<template>
  <div id="app">
    <v-head :isBack='isBack'></v-head>
    <v-footer></v-footer>
  </div>
</template>

<script>
    import vHead from './components/common/header.vue';
    import vFooter from './components/common/footer.vue';
    export default {
      name: 'app',
      data () {
        return {
	      isBack: false,
	      barlist: [{
		title: '首页',
		href: 'index.html',
		icon: 'icon-homebig'
	      }, {
		title: '发布',
		href: 'release.html',
		icon: 'icon-fabu'
	      }, {
		title: '我的',
		href: 'personal.html',
		icon: 'icon-yonghu'
	      }]
        }
      },
      components:{
          vHead,
          vFooter
      }
    }
</script>
<style lang="scss">

</style>
