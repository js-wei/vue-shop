<template>
    <div id="app">
        <!-- 路由匹配到的组件将渲染在这里 -->
        <keep-alive>
            <router-view class="router-view"></router-view>
        </keep-alive>
        <v-footer :menu="menu" :current="current"></v-footer>
    </div>
</template>
<script>
    import vHead from './components/common/header.vue'
    import vFooter from './components/common/footer.vue'
    //    import vSlider from './components/component/slider.vue'
    //    import vLoading from './components/component/loading.vue'
    //    import vLogin from './components/component/login.vue'
    //    import vRegister from './components/component/register.vue'
    //    import vForget from './components/component/forget.vue'
    export default {
        name: 'app',
        data () {
            return {
                title:'活动',
                isBack: false,
                show:true,
                current:'index',
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
                        href: 'index',
                        icon: 'mui-icon-home'
                    },
                    {
                        title: '发布',
                        href: 'release',
                        icon: 'mui-icon mui-icon-plusempty'
                    },
                    {
                        title: '我的',
                        href: 'personal',
                        icon: 'mui-icon-contact',
                        click:function () {
                            alert(1);
                        }
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
            vFooter
        },
        methods:{
        },
        watch : {
            '$route' (to, from) {
                let path=to.path.substring(1);
                this.current = path;
            }
        },
        mounted(){
        }
    }
</script>
<style lang="scss">
    #app{
        background-color: #fff;
    }
</style>