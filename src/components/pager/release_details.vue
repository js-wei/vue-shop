<template>
    <div class="release_details">
        <v-head :show="show" :isBack="isBack" :title="title"></v-head>
        <div class="mui-content" style="padding-top:2px;">
            <div class="mui-content-padded">
                <h4> {{article.title}}  <small v-show="article.sub_title">--- {{article.sub_title}}</small></h4>
                <address>
                    <p>集合地点 : {{article.address}}</p>
                    <p>集合时间 : {{article.date}}</p>
                    <p>注意事项 : {{article.note}}</p>
                    <p>报名进度 : {{article.count}}/{{article.sum}}(人)</p>
                </address>
                <div class="margin-top10"></div>
                <div class="contents" v-html="article.content"></div>
            </div>
        </div>
        <div class="mui-row toolbar">
            <div class="mui-col-sm-3 mui-col-xs-3 mui-text-center enshrine" :class="article.enshrine?'disabled':''">
                <div class="mui-icon mui-icon-star"></div>
                <p>收藏</p>
            </div>
            <div class="mui-col-sm-3 mui-col-xs-3 mui-text-center">
                <div class="mui-icon mui-icon-extra mui-icon-extra-share"></div>
                <p>分享</p>
            </div>
            <div class="mui-col-sm-3 mui-col-xs-3 mui-text-center phone-call" :telephone="article.telephone">
                <div class="mui-icon mui-icon-extra mui-icon-extra-custom"></div>
                <p>联系我们</p>
            </div>
            <div class="mui-col-sm-3 mui-col-xs-3 mui-text-center join-us" :class="article.count>=article.sum?'disabled':''">
                <div class="mui-icon mui-icon-plusempty"></div>
                <p>报名加入</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import "static/style/base";
    .release_details{
        height:auto;
        overflow:hidden;
        padding-bottom:50px;
        .mui-content{
            .mui-content-padded{
                .top10{
                    margin-top:10px;
                }
                h4{
                    font-weight:normal;
                    font-size:2rem;
                    small{
                        font-size:1.2rem;
                    }
                }
                address{
                    p{
                        margin-bottom:2px;
                    }
                }
            }
        }
        .toolbar{
            height:50px;
            overflow:hidden;
            background-color:nth($baseColor,3);
            color:nth($baseColor,1);
            position:fixed;
            bottom:0;
            width:100vw;
            div.mui-text-center{
                div.mui-icon{
                    margin-top:4px;
                }
                &.disabled{
                    background-color:lighten(nth($baseColor,3),15%);
                }
            }
            p{
                color:nth($baseColor,1);
            }
        }
    }
</style>
<script>
    import vHead from '../common/header.vue'
    import vFooter from '../common/footer.vue'

    export default{
        data(){
            return{
                show:true,
                isBack:true,
                title:'活动详情',
                current:'details',
                article:{
                    title:'苏州灵白线激情穿越',
                    sub_title:'挑战极限',
                    address:'木渎镇灵岩山',
                    date:'2017-10-30 12:00',
                    note:'无',
                    sum:1000,
                    count:990,
                    enshrine:0,
                    telephone:'13584866592',
                    content:`<p>这是图片放大预览示例，点击如下图片体验全屏预览功能</p>
                <p>
                    <img src="static/images/01.gif"/>
                </p>
                <p>图片全屏后，双击或双指缩放均可对图片进行放大、缩小操作，左右滑动可查看同组(data-preview-group相同的图片为一组)其它图片，点击会关闭预览</p>
                <p>
                    <img src="static/images/02.jpg"/>
                </p>
                <p>第三张图片，纯粹为了占位： </p>
                <p>
                    <img src="static/images/03.jpg"/>
                </p>`

                }
            }
        },
        components:{
            vHead,
            vFooter
        },
        methods:{

        },
        mounted(){
            let gallery = document.querySelector('.release_details'),
                header = document.querySelector('header');
            if(header && gallery){
                gallery.style.marginTop=header.clientHeight + "px";
            }

            let images = document.querySelectorAll('.mui-content-padded img');
            images.forEach((v,i,a)=>{
                v.setAttribute('data-preview-group',1);
                v.setAttribute('data-preview-src','');
                v.style.maxWidth='100%';
                v.style.height='auto';
            });
            mui.previewImage();

            let joinUs = document.querySelector('.join-us'),
                enshrine  = document.querySelector('.enshrine'),
                phoneCall = document.querySelector('.phone-call');

            //加入我们
            joinUs.addEventListener('tap',(e)=>{
                if(joinUs.classList.contains('disabled')){
                    mui.toast('活动已终止报名');
                    return;
                }
                //TODO 加入活动
                console.log('join us');
            });

            //收藏活动
            enshrine.addEventListener('tap',(e)=>{
                if(enshrine.classList.contains('disabled')){
                    mui.toast('活动已被收藏');
                    return;
                }
                //TODO 加入活动
                console.log('收藏活动');
            });

            //联系我们
            phoneCall.addEventListener('tap',(e)=>{
                let phone = phoneCall.getAttribute('telephone');
                if(!phone){
                    mui.toast('客服号码出错');
                    return;
                }
                //TODO 加入打电话
                mui.plusReady(function () {
                    mui.confirm('是否拨打 ' + phone + ' ？', '提示', ['取消', '拨打'], function(e) {
                        if (e.index) {
                            plus.device.dial(Phone, false);
                        }
                    });
                });
            });
        }
    }
</script>