<template>
    <div class="containers">
        <v-head :title="title"></v-head>
        <div class="personal">
            <div class="personal-title">
                <img src="/static/images/logo.png" alt="header">
                <div class="information" v-if="isLogin">
                    <div>魏巍</div>
                    <div>ID:1325565</div>
                    <div>今天之繁忙,之于明天之享福</div>
                </div>
                <div class="information" v-if="!isLogin">
                    <div>
                        <router-link to="/login">现在登陆</router-link>
                    </div>
                    <div>
                        <router-link to="/register">没有账号,现在注册</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    @import "./static/style/base";
    .personal{
        width:100vw;
        height:100vh;
        .personal-title{
            height:220px;
            width:100%;
            background-color:lighten(nth($baseColor,3),12%);
            text-align:center;
            img{
                margin-top:2.8rem;
                border-radius:50%;
            }
            .information{
                color:nth($baseColor,1);
                font-size:1.5rem;
            }
        }
    }
</style>
<script>
    import vHead from '../common/header.vue'
    export default {
        name: 'app',
        data(){
            return{
                title:'我的',
                isLogin:false
            }
        },
        components:{
            vHead
        },
        mounted(){
            const gallery = document.querySelector('.personal'),
                header = document.querySelector('header');
            if(header && gallery){
                gallery.style.marginTop=header.clientHeight - 2 + "px";
            }
        }
    }
</script>