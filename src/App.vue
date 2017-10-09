<template>
    <div id="app" @doubletap.stop="dblclick">
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
			dblclick(){
				alert('dblclick');
			}
        },
        mounted(){
            /*
            mui.plusReady(function(){
                plus.navigator.setStatusBarBackground("#F52F6C");
                //首页返回键处理
                let first = null;
                plus.key.addEventListener('backbutton', function() {
                    //首次按键，提示‘再按一次退出应用’
                    if (!first) {
                        first = new Date().getTime();
                        mui.toast('再按一次退出应用');
                        setTimeout(function() {
                            first = null;
                        }, 1000);
                    } else {
                        if (new Date().getTime() - first < 1000) {
                            plus.runtime.quit();
                        }
                    }
                }, false);
            });
             */
        }
    }
</script>
