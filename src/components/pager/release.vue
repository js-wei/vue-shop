<template>
    <div class="release">
        <v-head :show="show" :isBack="isBack" :title="title"></v-head>
        <v-footer :menu="menu" :current="current"></v-footer>
    </div>
</template>
<style lang="scss">
    @import "./static/style/base";
</style>
<script>
    import vHead from '../common/header.vue'
    import vFooter from '../common/footer.vue'
    export default {
        data(){
            return{
                show:true,
                isBack:false,
                title:'发布',
                current:'release',
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
            vFooter
        }
    }
</script>