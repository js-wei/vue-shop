<template>
    <div id="app">
        <transition mode="out-in">
            <router-view class="router-view"></router-view>
        </transition>
    </div>
</template>
<style lang="less">
    @import "../node_modules/vue2-animate/src/vue2-animate.less";
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
            mui.plusReady(function(){
                plus.navigator.setStatusBarBackground("#F52F6C");
            });
        }
    }
</script>
