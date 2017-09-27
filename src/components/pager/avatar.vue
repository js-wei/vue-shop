<template>
<div class="head">
  <v-head :isSlotRight="isSlotRight">
    <div slot="header-right">
      <button type="button" class="upload" @click="uploadCroppedImage">上传</button>
    </div>
  </v-head>
  <div class="croppa">
    <croppa v-model="myCroppa" placeholder="点击上传头像" :initial-image="initialImage"  :height="height" :width="width">
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
    height:93.2vh;
    width:100vw;
    background-color:nth($baseColor,2);
    .croppa{
        text-align:center;
      padding-top:5rem;
    }
    .croppa-group{
      position:absolute;
      top:50%;
      width:100vw;
      height:50px;
      background-color:nth($baseColor,2);
      &:before,&:after{
        background-color:nth($baseColor,2);
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
      initialImage:''
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
    appendByCamera(){ //拍照添加文件
        plus.camera.getCamera().captureImage(function(e){
            console.log(e);
            plus.io.resolveLocalFileSystemURL(e, function(entry) {
              var path = entry.toLocalURL();
              console.log(path);
            }, function(e) {
                mui.toast("读取拍照文件错误：" + e.message);
            });
        });
    },
    appendByGallery(){//从相册添加文件
        plus.gallery.pick(function(path){
          console.log(path);
        });
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
    mui.plusReady(function() {
      plus.nativeUI.actionSheet({cancel:"取消",buttons:[
          {title:"拍照"},
          {title:"从相册中选择"}
      ]}, function(e){//1 是拍照  2 从相册中选择
          switch(e.index){
              case 1:this.appendByCamera();break;
              case 2:this.appendByGallery();break;
          }
      });
    });
  }
}
</script>
