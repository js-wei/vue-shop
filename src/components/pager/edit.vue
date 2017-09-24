<template>
    <div class="edit">
        <v-head :title="title"></v-head>
        <div class="toolbar" v-if="isLogin">
            <div class="function">
                <a href="jajascript:;">
                    <div class="toolbar-left">
                        头像
                    </div>
                    <div class="toolbar-right">
                        <img src="/static/images/logo.png" alt="">
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </a>
            </div>
            <div class="function border-top">
                <a href="javascript:;">
                    <div class="toolbar-left">
                        用户名
                    </div>
                    <div class="toolbar-right">
                        漫天飘雪浓浓情
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </a>
            </div>
            <div class="function border-top">
                <a href="">
                    <div class="toolbar-left">
                        介绍
                    </div>
                    <div class="toolbar-right">
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </a>
            </div>
            <div class="function margin-top">
                <a href="javascript:;">
                    <div class="toolbar-left">
                        性别
                    </div>
                    <div class="toolbar-right">
                        男
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </a>
            </div>
            <div class="function border-top">
                <a href="javascript:;">
                    <div class="toolbar-left">
                        生日
                    </div>
                    <div class="toolbar-right">
                        1988-4-14
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </a>
            </div>
            <div class="function border-top">
                <a href="javascript:;">
                    <div class="toolbar-left">
                        地区
                    </div>
                    <div class="toolbar-right">
                       江苏省苏州市
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import "./static/style/base";
    .edit{
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
                        width:50%;
                        float: left;
                        text-align:left;
                        margin-left:1rem;
                    }
                    .toolbar-right{
                        width:40%;
                        float: right;
                        text-align:right;
                        margin-right:1rem;
                        img{
                            height:30px;
                            border-radius:50%;
                            vertical-align:middle;
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
    export default {
        data(){
            return{
                title:'编辑资料',
                isLogin:true
            }
        },
        components:{
            vHead
        },
        mounted(){
            const gallery = document.querySelector('.edit'),
                header = document.querySelector('header');
            if(header && gallery){
                gallery.style.marginTop=header.clientHeight + 10 + "px";
            }
        }
    }
</script>