<template lang="html">
    <div class="containers">
        <v-head :title="title"></v-head>
        <div class="personal">
            <div class="personal-title">
                <img src="static/images/logo.png" alt="header">
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
                <div class="function" v-if="isLogin">
                    <div class="item">
                        <div>100</div>
                        <div>动态</div>
                    </div>
                    <div class="item">
                        <div>10</div>
                        <div>关注</div>
                    </div>
                    <div class="item">
                        <div>2</div>
                        <div>粉丝</div>
                    </div>
                </div>
            </div>
            <div class="collection">
                <div class="function" v-if="isLogin">
                    <div class="item">
                        <router-link to="/index">
                            <span class="mui-icon mui-icon-paperclip yellow"></span>
                            <span>预定</span>
                        </router-link>
                    </div>
                    <div class="item">
                        <router-link to="/release">
                            <span class="mui-icon mui-icon-plus pink"></span>
                            <span>发布</span>
                        </router-link>
                    </div>
                    <div class="item">
                       <router-link to="/index">
                           <span class="mui-icon mui-icon-personadd red"></span>
                           <span>参与</span>
                       </router-link>
                    </div>
                </div>
            </div>
            <div class="toolbar" v-if="isLogin">
                <div class="function">
                    <router-link to="/message">
                        <div class="toolbar-left">
                            消息通知
                        </div>
                        <div class="toolbar-right">
                            <span class="mui-icon mui-icon-arrowright"></span>
                        </div>
                     </router-link>
                </div>
                <div class="function margin-top">
                    <router-link to="/release">
                        <div class="toolbar-left">
                            我要发布
                        </div>
                        <div class="toolbar-right">
                            <span class="mui-icon mui-icon-arrowright"></span>
                        </div>
                    </router-link>
                </div>
                <div class="function border-top">
                    <router-link to="/my_release">
                        <div class="toolbar-left">
                            我的发布
                        </div>
                        <div class="toolbar-right">
                            <span class="mui-icon mui-icon-arrowright"></span>
                        </div>
                    </router-link>
                </div>
                <div class="function margin-top">
                    <router-link to="/feedback">
                        <div class="toolbar-left">
                            用户反馈
                        </div>
                        <div class="toolbar-right">
                            <span class="mui-icon mui-icon-arrowright"></span>
                        </div>
                    </router-link>
                </div>
                <div class="function margin-top">
                   <router-link to="/setting">
                        <div class="toolbar-left">
                            系统设置
                        </div>
                        <div class="toolbar-right">
                            <span class="mui-icon mui-icon-arrowright"></span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="margin-top15">&nbsp;</div>
        <v-footer :menu="menu" :current="current"></v-footer>
    </div>
</template>
<script>
    import vHead from '../common/header.vue'
    import vFooter from '../common/footer.vue'
    export default {
        name: 'app',
        data(){
            return{
                title:'我的',
                isLogin:false,
                current:'personal',
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
<style lang="scss">
    @import "./static/style/base";
    .personal{
        width:100vw;
        //height:100vh;
        padding-bottom:30px;
        .personal-title{
            height:200px;
            width:100%;
            background-color:lighten(nth($baseColor,3),12%);
            text-align:center;
            img{
                margin-top:1.3rem;
                border-radius:50%;
                width:4rem;
            }
            .information{
                color:nth($baseColor,1);
                font-size:1.5rem;
                a{
                    color:nth($baseColor,1);
                }
            }
            .function{
                width:100vw;
                div.item{
                    width:33%;
                    float: left;
                    margin-top:.8rem;
                    color:nth($baseColor,1);
                    border-right:1px solid nth($baseColor,1);
                    font-size:1.5rem;
                }
                div.item:nth-of-type(3){
                    border:none;
                }
            }
        }
        .collection{
            width:100vw;
            height:80px;
            margin-top:.8rem;
            text-align:center;
            background-color:nth($baseColor,1);
            .function{
                .item{
                    margin-top:1.2rem;
                    width:33%;
                    height:100%;
                    float: left;
                    a{
                        color:lighten( nth($baseColor,2),50%);
                        span{
                            display:block;
                            width:100%;
                            font-size:1.5rem;
                            &.mui-icon{
                                font-size:3.5rem;
                            }
                            &.yellow{
                                color:greenyellow;
                            }
                            &.pink{
                                color:deeppink;
                            }
                            &.red{
                                color:darkred;
                            }
                        }
                    }
                }
            }
        }
        .toolbar{
            width:100vw;
            margin-top:.8rem;
            text-align:center;
            height:auto;
            overflow-x:hidden;
            overflow-y:scroll;
            .function{
                width:100vw;
                height:50px;
                line-height:50px;
                background-color:nth($baseColor,1);
                a{
                    font-size:1.5rem;
                    color:lighten( nth($baseColor,2),50%);
                    .toolbar-left{
                        width:70%;
                        float: left;
                        text-align:left;
                        margin-left:1rem;
                    }
                    .toolbar-right{
                        width:20%;
                        float: right;
                        text-align:right;
                        margin-right:1rem;
                    }
                }
                &.margin-top{
                    margin-top:.8rem;
                }
                &.border-top{
                    border-top:.1rem solid lighten(nth($baseColor,2),89%);
                }
            }
        }
    }
</style>