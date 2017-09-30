<template>
    <div class="feedback">
        <v-head :title="title" :isSlotRight="isSlotRight">
            <div slot="header-right">
                <button type="button" class="upload" @click="submit">提交</button>
            </div>
        </v-head>
        <div class="feedback-content">
            <textarea id="content" placeholder="必填,详细反馈" v-model="content"></textarea>
            <input type="text" placeholder="联系方式:QQ或者电话">
            <div class="feedback-photo" @click="changeImage">
                <i class="fa fa-2x fa-camera"></i>
                上传图片
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import "static/style/base";
    .feedback-content{
        text-align:center;
        textarea,input{
            width:95vw;
            font-size:1.5rem;
            color:lighten(nth($baseColor,2),60%);
            &::placeholder{
                font-size:1.2rem;
            }
        }
        textarea{
            margin-top:1.2rem;
            height:120px;
        }
        .feedback-photo{
            width:25vw;
            height:auto;
            background-color:lighten(nth($baseColor,2),60%);
            padding:6px 0;
            margin-left:12px;
            color:nth($baseColor,1);
            text-align:center;
            i{
                display:block;
            }
        }
    }
</style>
<script>
    import vHead from '../common/header.vue'

    export default {
        data(){
            return{
                title:'意见反馈',
                isSlotRight:true,
                content:''
            }
        },
        components:{
            vHead
        },
        methods:{
            submit(){

            },
            changeImage(){
                mui.plusReady(function () {
                    plus.nativeUI.actionSheet({
                        title: "修改用户头像",
                        cancel: "取消",
                        buttons: [{
                            title: "拍照"
                        }, {
                            title: "从手机相册选择"
                        }]
                    }, function(b) {
                        switch (b.index) {
                            case 0:
                                break;
                            case 1:
                                this.getImage(); /*拍照*/
                                break;
                            case 2:
                                this.galleryImg();/*打开相册*/
                                break;
                            default:
                                break;
                        }
                    });
                });
            },
            getImage() {
                var c = plus.camera.getCamera();
                c.captureImage(function(e) {
                    plus.io.resolveLocalFileSystemURL(e, function(entry) {
                        var s = entry.toLocalURL() + "?version=" + new Date().getTime();
                        mui.alert(s);
                    }, function(e) {
                        console.log("读取拍照文件错误：" + e.message);
                    });
                }, function(s) {
                    console.log("error" + s);
                }, {
                    filename: "_doc/head.png"
                });
            },
            galleryImg() {
                plus.gallery.pick(function(path) {
                    path = path+ "?version=" + new Date().getTime();
                    mui.alert(path);
                }, function(a) {}, {
                    filter: "image"
                })
            }
        },
        mounted(){
            const gallery = document.querySelector('.feedback'),
                header = document.querySelector('header');
            if (header && gallery) {
                gallery.style.marginTop = header.clientHeight + "px";
            }
        }
    }
</script>