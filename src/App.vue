<template>
    <div id="app">
        <router-view class="router-view"></router-view>
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
                allowBack:false,
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
            window.onpopstate = () => {
                if (this.allowBack) {    //    这个allowBack 是存在vuex里面的变量
                    history.go(1);
                }
            };
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        }
    }
</script>
