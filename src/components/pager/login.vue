<template>
    <div class="register">
        <img src="/static/images/logo.png" alt="">
        <form class="mui-input-group" autocomplete="off">
            <div class="mui-input-row">
                <label>手机号</label>
                <input type="text" class="mui-input-clear phone" name="phone" placeholder="请输入手机">
            </div>
            <div class="mui-input-row">
                <label>密&nbsp;&nbsp;&nbsp;码</label>
                <input type="password" class="mui-input-password password" name="password" placeholder="请输入密码">
            </div>
            <div class="mui-input-row del-line right">
                <a href="">忘记密码?</a>
            </div>
            <div class="mui-button-row">
                <button type="button" class="mui-btn mui-btn-block mui-btn-login" @click="login" >登陆账号</button>
            </div>
            <div class="mui-input-row del-line">
                <router-link to="/register">注册新号</router-link>
            </div>
            <div class="mui-input-row del-line">
                <span class="line line-left"></span>
                <span class="title">其他账号登陆</span>
                <span class="line line-right"></span>
            </div>
            <div class="third">
                <img src="/static/images/wechat.png" alt="">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            login(){
                let phone = document.querySelector('.phone').value,
                    password = document.querySelector('.password').value;
                if(!phone){
                    mui.toast('请输入手机号');
                    return '';
                }
                if(!/^1[3|4|5|7|8][0-9]{9}$/.test(phone)){
                    mui.toast('请输入正确的手机号');
                    return '';
                }
                if(!password){
                    mui.toast('请输入密码');
                    return '';
                }
                this.axios.post('/login',{phone:phone,password:password}).then(response=> {
                    response = response.data;
                   
                }).catch(error=> console.log(error));
            }
        },
        mounted() {
            const gallery = document.querySelector('.register'),
                header = document.querySelector('header');
            if(header && gallery){
                gallery.style.marginTop=header.clientHeight + "px";
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "static/style/base";
    form:after{
        background-color: #fff;
    }
    .register{
        padding-top:5rem;
        text-align:center;
        img{
            width:4rem;
            padding-bottom:2rem;
        }
        .mui-input-group{
            width:90%;
            margin:0 auto;
            height:auto;
            overflow:hidden;
            padding-bottom:2rem;
            &:before{
                background-color: #fff;
            }
            .mui-input-row{
                margin-top:.8rem;
                position:relative;
                .line{
                    position:absolute;
                    border-bottom: 0.1rem solid #e4e4e8;
                    display:inline-block;
                    width:38%;
                    top:.8rem;
                    &.line-left{
                        left:0;
                    }
                    &.line-right{
                        right:0;
                    }
                }
                .title{
                    vertical-align: middle;
                    font-size:1rem;
                    color: #b3b3b3;
                }
                label{
                    width:25%;
                }
                input{
                    width:70%;
                }
            }
            .mui-button-row{
                margin-bottom:2rem;
                margin-top:1rem;
                button{
                    background-color:nth($baseColor,3);
                    color:nth($baseColor,1);
                    border: 1px solid nth($baseColor,3);
                }
            }
            .mui-input-row.del-line{
                a{
                    color:nth($baseColor,5);
                }
                &:after{
                    background-color: #fff;
                }
            }
            .mui-input-row.del-line.right{
                text-align:right;
            }
            .third{
                img{
                    height:6rem;
                }
            }
        }
    }
</style>