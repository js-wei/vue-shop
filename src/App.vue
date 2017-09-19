<template>
  <div id="app">
    <v-head></v-head>
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
