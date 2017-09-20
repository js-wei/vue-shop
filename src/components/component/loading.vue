<template lang="html">
    <div class="loading" v-if="loading.show">
        <div class="loading-container">
            <span class="mui-icon mui-icon-spinner mui-spin" v-if="loading.type==2"></span>
            <span class="mui-icon mui-icon-spinner-cycle mui-spin" v-if="loading.type==1"></span>
            <span class="mui-icon mui-icon-loop" v-if="loading.type==3"></span>
            <p class="loading-title" :class="loading.isAnimation?'animation':''">{{loading.msg}}</p>
        </div>
        <div class="loading-mask" v-if="loading.mask"></div>
    </div>
</template>
<style lang="scss" scoped>
    @import "./static/style/base";
    .loading{
        position:absolute;
        top:40vh;
        left:40vw;
        text-align:center;
        .loading-container{
            width:100px;
            height:100px;
            border:1px solid nth($baseColor,5);
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            border-radius: 10px;
            .mui-icon{
                margin-top:1.5rem;
                color:nth($baseColor,4);
                -webkit-transform: translateZ(0);
                -ms-transform: translateZ(0);
                transform: translateZ(0);
                -webkit-animation: load8 1.1s infinite linear;
                animation: load8 1.1s infinite linear;
            }
            .loading-title{
                margin-top:.5rem;
                font-size:.8rem;
                color:nth($baseColor,4);
            }
            .loading-title.animation{
                position:relative;
                animation:myfirst 5s infinite linear;
                -moz-animation:myfirst 5s infinite linear; /* Firefox */
                -webkit-animation:myfirst 5s infinite linear; /* Safari and Chrome */
                -o-animation:myfirst 5s infinite linear; /* Opera */
            }
        }
    }
    .loading-mask{
        position: fixed;
        z-index: 998;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,.3);
    }
    @-webkit-keyframes load8{
        0%{
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100%{
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes load8{
        0%{
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100%{
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes myfirst {
        0%   {color:nth($baseColor,4);left:8px; top:0px;}
        50%  {color:blue;left:-8px; top:0px;}
        100% {color:nth($baseColor,4);left:8px; top:0px;}
    }
</style>
<script>
export default{
  data() {
    return {
      masker:null
    }
  },
  props: {
    loading:Object
  },
  methods:{
//      closed(callback){
//          callback.call(this,this.loading.show);
//          return this;
//      }
  }
}
</script>
