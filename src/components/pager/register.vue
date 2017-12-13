<template>
    <div class="register">
        <img src="/static/images/logo.png" alt="">
        <form class="mui-input-group" autocomplete="off">
            <div class="mui-input-row">
                <label>手机号</label>
                <input type="text" class="mui-input-clear phone" name="phone" placeholder="请输入手机">
            </div>
            <div class="mui-input-row verify">
                <label>验证码</label>
                <input type="text" class="mui-input-clear phone" name="phone" placeholder="输入验证码">
                <a href="javascript:;" class="mui-btn mui-btn-danger mui-send-message" 
                    @click.stop="sendMessageCode">获取验证码</a>
            </div>
            <div class="mui-input-row">
                <label>密&nbsp;&nbsp;&nbsp;码</label>
                <input type="password" class="mui-input-password password" name="password" placeholder="请输入密码">
            </div>
            <div class="mui-button-row">
                <button type="button" class="mui-btn mui-btn-block mui-btn-primary" @click="login" >注册新账号</button>
            </div>
            <div class="mui-input-row del-line">
                <router-link to="/login">登陆</router-link>
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
        <v-loading :loading="loading"></v-loading>
    </div>
</template>
<script>
    import vLoading from '../component/loading.vue'
    export default {
        data(){
            return{
                countdown:60,
                loading:{
                    show:false,
                    type:1,
                    msg:'正在请求...',
                    isAnimation:true
                }
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
            
            },
            sendMessageCode(){
                let phone = document.querySelector('.phone').value;
                if(!phone){
                    mui.toast('请输入手机号');
                    return '';
                }
                if(!/^1[3|4|5|7|8][0-9]{9}$/.test(phone)){
                    mui.toast('请输入正确的手机号');
                    return '';
                }
                if(this.countdown==60){
                    this.settime();
                    this.axios.post('/send_message',{tel:phone}).then(response=> {
                        this.loading.show=false;
                        response = response.data;
                        if(response.status){
                            mui.toast(response.msg);
                        }
                    }).catch(error=>console.log(error));
                }
                
            },
            settime(){
               let val = document.querySelector('.mui-send-message');
               if(this.countdown==60){
                   this.loading.show=true;
               }
               if (this.countdown == 0) { 
                    val.removeAttribute("disabled");    
                    val.innerHTML="获取验证码"; 
                    this.countdown = 60; 
                    clearTimeout(t);
                    return;
                } else { 
                    val.setAttribute("disabled", true); 
                    val.innerHTML="重新发送(" + this.countdown + "s)"; 
                    this.countdown--; 
                } 
                let t = setTimeout(()=>{ 
                    this.settime(val);
                },1000) 
            }
        },
        components:{
            vLoading
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
                margin-top:1.2rem;
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
                margin-bottom:2.1rem;
                margin-top:2rem;
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
            .mui-input-row.verify{
                position:relative;
                a{
                    position:absolute;
                    width:100px;
                    top:0;
                    right:0;
                    text-align:center;
                    width: 115px;
                    &:active{
                        color:#fff;
                    }
                }
            }
            .third{
                img{
                    height:6rem;
                }
            }
        }
    }
</style>