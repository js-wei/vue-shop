<template>
    <div id="app">
        <router-view class="router-view"></router-view>
    </div>
</template>
<style lang="less">
    @import "../node_modules/vue2-animate/src/vue2-animate.less";
    #app{
        height:auto;
        overflow:hidden;
        padding-bottom:2px;
        .router-view{
            height:auto;
            overflow:hidden;
            padding-bottom:2px;
        }
    }
</style>
<script>
    export default {
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
            }
        },
        components:{

        },
        methods:{

        },
        mounted(){
          
        },

    }
</script>
