<template lang="html">
    <div class="index">
        <v-head :show="show" :isBack="isBack" :title="title"></v-head>
        <v-slider :slider="slider"></v-slider>
        <v-footer :menu="menu" :current="current"></v-footer>
    </div>
</template>
<style lang="scss" scoped>
    @import "./static/style/base";
</style>
<script>
    import vHead from '../common/header.vue'
    import vSlider from '../component/slider.vue'
    import vFooter from '../common/footer.vue'

    export default {
        data(){
            return{
                show:true,
                isBack:false,
                title:'首页',
                current:'index',
                slider:{
                    show:true,
                    loop:true,
                    title:true,
                    timer:4e3,
                    indicator:true,
                    images: [
                        {
                            title: '穿越灵白线--挑战自我极限',
                            href: 'http://baidu.com',
                            src: 'static/images/01.gif'
                        },
                        {
                            title: '大阳山森林水上世界--激情一夏',
                            href: 'http://baidu.com',
                            src: 'static/images/02.jpg'
                        },
                        {
                            title: '西藏日喀则远行--寻找心灵的归属',
                            href: 'http://baidu.com',
                            src: 'static/images/03.jpg'
                        }
                    ]
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
                        icon: 'mui-icon mui-icon-plus'
                    },
                    {
                        title: '我的',
                        href: 'personal',
                        icon: 'mui-icon-contact'
                    }
                ]
            }
        },
        components:{
            vHead,
            vSlider,
            vFooter,
        }
    }
</script>
