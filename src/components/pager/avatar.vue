<template>
<div class="head">
  <v-head :isSlotRight="isSlotRight">
    <div slot="header-right">
      <button type="button" class="upload" @click="uploadCroppedImage">上传</button>
    </div>
  </v-head>
  <div class="croppa" @click="changeImage">
    <croppa v-model="myCroppa" placeholder="点击上传头像"
            accept=".jpeg,.png,.jpg"
            :height="height"
            :width="width"
            @move="fileMove">
      <img slot="initial" :src="initialImageUrl" />
    </croppa>
  </div>
  <div class="mui-input-group mui-text-center croppa-group">
    <button type="button" class="mui-btn mui-btn-danger" @click="rotate">逆时针旋转</button>
    <button type="button" class="mui-btn mui-btn-danger" @click="flipX">水平旋转</button>
    <button type="button" class="mui-btn mui-btn-danger" @click="flipY">垂直针旋转</button>
  </div>
</div>
</template>
<style lang="scss" scoped>
  @import "static/style/base";
  .head{
    width:100vw;
    overflow:hidden;
    background-color:nth($baseColor,2);
    .croppa{
        text-align:center;
        padding-top:5rem;
        height:100vh;
    }
    .croppa-group{
      position:absolute;
      top:62%;
      width:100vw;
      height:50px;
      background-color:nth($baseColor,2) !important;
      &:before,&:after{
        background-color:nth($baseColor,2) !important;
      }
      .mui-btn{
        margin-top:.5rem;
      }
    }
  }
</style>
<script>
import vHead from '../common/header.vue'
import Vue from 'vue'
import Croppa from 'vue-croppa'
Vue.use(Croppa);

export default {
  data() {
    return {
      isSlotRight: true,
      title: '头像上传',
      myCroppa: {},
      width:220,
      height:220,
      initialImageUrl:'',
      isChoose:false
    }
  },
  components: {
    vHead
  },
  methods: {
    uploadCroppedImage() {
      this.myCroppa.generateBlob((blob) => {
          //console.log(blob);
        // write code to upload the cropped image file (a file is a blob)
      }, 'image/jpeg', 0.8);// 80% compressed jpeg file
      console.log(this.myCroppa.generateDataUrl());
    },
    rotate(){
        this.myCroppa.rotate();
    },
    flipX(){
        this.myCroppa.flipX();
    },
    flipY(){
        this.myCroppa.flipY();
    },
    changeImage(){
        let self = this;
        if(!self.isChoose){
            mui.plusReady(function () {
                self.isChoose=true;
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
                            let c = plus.camera.getCamera();
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
                            break;
                        case 2:
                            plus.gallery.pick(function(path) {
                                path = path+ "?version=" + new Date().getTime();
                                self.initialImageUrl = path ;
                                mui.alert(self.initialImageUrl);
                            }, function(a) {}, {
                                filter: "image"
                            });
                            break;
                        default:
                            break;
                    }
                });
            });
        }
    },
    fileMove(){
      this.isChoose = false;
    }
  },
  mounted() {
    const gallery = document.querySelector('.head'),
      header = document.querySelector('header');
    if (header && gallery) {
      gallery.style.marginTop = header.clientHeight + "px";
    }
    document.querySelector('.upload').addEventListener('tap', (e) => {

    });
    document.querySelector('.croppa-container').style.width=this.width + 'px';
    document.querySelector('.croppa-container').style.height=this.height + 'px';
  }
}
</script>
