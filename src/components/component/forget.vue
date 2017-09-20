<template>
    <div class="forget" v-if="show">
        <img src="/static/images/logo.png" alt="">
        <!--获取验证码开始-->
        <div id="getCode" class="mui-page">
            <div class="mui-navbar-inner mui-bar mui-bar-nav" >
                <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left zak-header-item">
                    <span class="mui-icon mui-icon-left-nav"></span>
                </button>
                <h1 class="mui-title zak-header-item">找回密码</h1>
                <a class="mui-btn zak-header-item mui-btn-blue mui-btn-link mui-pull-right next">下一步</a>
            </div>
            <div class="mui-page-content">
                <form class="mui-input-group" autocomplete="off">
                    <div class="mui-input-row">
                        <input id='account' type="tel" class="mui-input-clear mui-input" placeholder="请输入手机号">
                    </div>
                    <div class="mui-input-row">
                        <input id='code' type="number" maxlength="6" class="mui-input-clear mui-input" placeholder="请输入验证码">
                    </div>
                </form>
                <div class="mui-content-padded">
                    <button id='sendVerify' class="mui-btn mui-btn-block mui-btn-primary">获取验证码</button>
                </div>
            </div>
        </div>
        <!--获取验证码结束-->
        <!--修改密码开始-->
        <div id="password" class="mui-page hide">
            <div class="mui-navbar-inner mui-bar mui-bar-nav" >
                <button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left zak-header-item">
                    <span class="mui-icon mui-icon-left-nav"></span>
                </button>
                <h1 class="mui-title zak-header-item">找回密码</h1>
                <a class="mui-btn zak-header-item mui-btn-blue mui-btn-link mui-pull-right save">保存</a>
            </div>
            <div class="mui-page-content">
                <form class="mui-input-group" autocomplete="off">
                    <div class="mui-input-row">
                        <input id='new_password' type="password" class="mui-input-clear mui-input" placeholder="请输入新密码">
                    </div>
                    <div class="mui-input-row">
                        <input id='comfr_password' type="password" class="mui-input-clear mui-input" placeholder="请再次输入新密码">
                    </div>
                </form>
            </div>
        </div>
        <!--修改密码结束-->
    </div>
</template>
<style lang="scss" scoped>
    @import "static/style/base";
    .forget{
        margin-top:80px;
        text-align:center;
        img{
            width:4rem;
            padding-bottom:2rem;
        }
        form:before,form:after{
            background-color: #fff;
        }
        .mui-input-group{
            width:90%;
            margin:0 auto;
            .mui-input-row{
                margin-top:1.2rem;
            }
        }
        .mui-content-padded{
            margin-top:3rem;
        }
    }
</style>
<script>

    export default {
        props:{
            show:{
                type:Boolean,
                default:true
            }
        },
        created(){

        },
        mounted(){

        }
    }

</script>