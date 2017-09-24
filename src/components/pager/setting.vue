<template lang="html">
    <div class="setting">
        <v-head :title="title"></v-head>
        <div class="toolbar" v-if="isLogin">
            <div class="function">
                <router-link to="/edit">
                    <div class="toolbar-left">
                        编辑资料
                    </div>
                    <div class="toolbar-right">
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </router-link>
            </div>
            <div class="function border-top">
                <a href="">
                    <div class="toolbar-left">
                        账号和隐私
                    </div>
                    <div class="toolbar-right">
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </a>
            </div>
            <div class="function border-top">
                <a href="">
                    <div class="toolbar-left">
                        黑名单
                    </div>
                    <div class="toolbar-right">
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </a>
            </div>
            <!--<div class="function margin-top">-->
                <!--<a href="javascript:;">-->
                    <!--<div class="toolbar-left">-->
                        <!--字体大小-->
                    <!--</div>-->
                    <!--<div class="toolbar-right">-->
                       <!--中-->
                    <!--</div>-->
                <!--</a>-->
            <!--</div>-->
            <div class="function margin-top">
                <a href="javascript:;">
                    <div class="toolbar-left">
                        列表显示摘要
                    </div>
                    <div class="toolbar-right">
                       <div class="mui-switch mui-switch-mini" id="zhaiSwitch">
                          <div class="mui-switch-handle"></div>
                       </div>
                    </div>
                </a>
            </div>
            <div class="function border-top">
                <a href="javascript:;">
                    <div class="toolbar-left">
                        非WIFI提醒
                    </div>
                    <div class="toolbar-right">
                       <div class="mui-switch mui-switch-mini" id="wifiSwitch">
                          <div class="mui-switch-handle"></div>
                       </div>
                    </div>
                </a>
            </div>
            <div class="function border-top">
                <a href="javascript:;">
                    <div class="toolbar-left">
                        推送通知
                    </div>
                    <div class="toolbar-right">
                        <div class="mui-switch mui-switch-mini mui-active" id="notifySwitch">
                          <div class="mui-switch-handle"></div>
                       </div>
                    </div>
                </a>
            </div>
            <div class="function border-top">
                <a href="javascript:;">
                    <div class="toolbar-left">
                        版本
                    </div>
                    <div class="toolbar-right">
                        1.0.0
                    </div>
                </a>
            </div>
            <div class="function margin-top10">
                <button class="mui-btn mui-btn-block logout">退出登录</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "./static/style/base";
    .setting{
        .toolbar{
            width:100vw;
            height:60px;
            line-height:60px;
            margin-top:.8rem;
            text-align:center;
            .function{
                width:100vw;
                height:100%;
                background-color:nth($baseColor,1);
                a{
                    font-size:1.8rem;
                    color:nth($baseColor,2);
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
                        .mui-switch{
                            margin-top:12px;
                            margin-left:40px;
                        }
                    }
                }
                &.margin-top{
                    margin-top:.8rem;
                }
                &.margin-top10{
                    margin-top:2rem;
                }
                &.border-top{
                    border-top:.1rem solid lighten(nth($baseColor,2),89%);
                }
            }
        }
    }
</style>

<script>
    import vHead from '../common/header.vue'
    export  default {
        data(){
            return{
                title:'设置',
                isLogin:true,
                show:false
            }
        },
        components:{
            vHead
        },
        mounted(){
            const gallery = document.querySelector('.setting'),
                header = document.querySelector('header');
            if(header && gallery){
                gallery.style.marginTop=header.clientHeight + 10 + "px";
            }
            mui('.mui-switch')['switch']();
            //摘要显示
            document.getElementById("zhaiSwitch").addEventListener('toggle',(e)=>{
                e.preventDefault();
                let isActive = e.detail.isActive;

            });
            //WIFI提醒
            document.getElementById("wifiSwitch").addEventListener('toggle',(e)=>{
                e.preventDefault();
                let isActive = e.detail.isActive;

            });
            //通知
            document.getElementById("notifySwitch").addEventListener('toggle',(e)=>{
                e.preventDefault();
                let isActive = e.detail.isActive;

            });
            document.querySelector('.logout').addEventListener('tap',(e) =>{
               e.preventDefault();
               mui.confirm('您确定要退出登录','友情提示',['取消','退出'],(e)=>{
                   console.log(e.index);
               },'div');
            });
        }
    }
</script>