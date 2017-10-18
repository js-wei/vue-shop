<template>
    <div class="release">
        <v-head :show="show" :isBack="isBack" :isSlotLeft="isSlotLeft" :isSlotRight="isSlotRight" :title="title">
            <div slot="header-left">
                <button type="button" @click="cancel">取消</button>
            </div>
            <div slot="header-right">
                <button type="button" class="upload" @click="submit">发布</button>
            </div>
        </v-head>
        <div class="release-content">
            <div class="mui-input-group">
                <div class="mui-input-row">
                    <label>活动名称：</label>
                    <input type="text" class="mui-input-clear" v-model="article.title" placeholder="活动名称">
                </div>
                <div class="mui-input-row icon">
                    <label>活动地点：</label>
                    <input type="text" class="mui-input-clear" v-model="article.address" placeholder="活动地点">
                    <span class="mui-icon mui-icon-location" @click="getLocation('address')"></span>
                </div>
                <div class="mui-input-row icon">
                    <label>集合地点：</label>
                    <input type="text" class="mui-input-clear" v-model="article.venue" placeholder="活动地点">
                    <span class="mui-icon mui-icon-location" @click="getLocation('venue')"></span>
                </div>
                <div class="mui-input-row numbox">
                    <label>参与人数：</label>
                    <div class="numbox-item">
                        <div class="mui-numbox" id="myNumbox" data-numbox-step='10' data-numbox-min='100' data-numbox-max='1000'>
                            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                            <input class="mui-numbox-input" type="number" v-model="article.sum"/>
                            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
                        </div>
                        <div class="tips">*参与人数在100-1000之间</div>
                    </div>
                </div>
                <div class="mui-input-row icon">
                    <label>活动时间：</label>
                    <input type="text" class="mui-input-clear" v-model="article.date" placeholder="活动时间">
                    <span class="mui-icon fa fa-calendar" @click="getNowFormatDate"></span>
                </div>
                <div class="mui-input-row" v-show="article.location">
                    <label>发布地点：</label>
                    <input type="text" class="mui-input-clear" v-model="article.location" placeholder="发布地点">
                </div>
                <div class="mui-input-row" v-show="isAuthor">
                    <label>发布人：</label>
                    <input type="text" class="mui-input-clear" v-model="article.author" placeholder="发布人">
                </div>
                <div class="mui-input-row photo" v-show="isPhoto">
                    <label>选择图片：</label>
                    <div class="image-list">
                        <ul class="image-item">
                            <li><img src="static/images/logo.png"></li>
                            <li><img src="static/images/logo.png"></li>
                            <li class="plus"><span class="mui-icon mui-icon-plusempty"></span></li>
                        </ul>
                    </div>
                </div>
                <div class="content">
                    <quill-editor ref="myQuillEditor"
                      :options="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)"
                      @change="onEditorChange($event)"
                      @click="onEditorFocus($event)">
                    </quill-editor>
                    <div class="limit">当前<span>{{nowLength}}</span>个字符，还可以输入<span>{{surplusLength}}</span>个字符。</div>
                    <div class="add-btn-group">
                        <span class="mui-badge" :class="(isLocation && type==0)?'mui-badge-primary':''" @click="getLocation">
                            <i class="fa fa-map-marker"></i>&nbsp;所在位置</span>
                        <!--<span class="mui-badge" :class="isPhoto?'mui-badge-primary':''" @click="getImage">-->
                            <!--<i class="fa fa-picture-o"></i>&nbsp;添加图片-->
                        <!--</span>-->
                        <span class="mui-badge" :class="isAuthor?'mui-badge-primary':''" @click="getAuthor">
                            <i class="fa fa-user"></i>&nbsp;发布人</span>
                    </div>
                </div>
            </div>
        </div>
        <v-loading :loading="loading"></v-loading>
        <v-modal :modal="modal" v-on:ok="yes" v-on:cancel="no">
            <div slot="modal-content" v-html="modal.content"></div>
        </v-modal>
        <v-footer :menu="menu" :current="current"></v-footer>
    </div>
</template>
<style lang="scss">
    @import "./static/style/base";
    .release{
        height:100vh;
        background-color: #fff;
        .release-content{
            padding-bottom:50px;
            .mui-input-group{
                height:auto;
                overflow:hidden;
                padding-bottom:10px;
                &:after{
                    background-color: #fff;
                }
                .mui-input-row{
                    height:50px;
                    line-height:50px;
                    label{
                        padding-top:2rem;
                        width:34%;
                        font-size:1.5rem;
                    }
                    input{
                        padding-top:2.5rem;
                        width:66%;
                        font-size:1.5rem;
                        &::placeholder{
                          font-size:1.5rem;
                        }
                    }
                    &.icon{
                        height:50px;
                        width:100%;
                        position:relative;
                        .mui-icon{
                            position:absolute;
                            right:10px;
                            top:20px;
                            font-size:1.5rem;
                            color:lighten(nth($baseColor,2),40%);
                        }
                    }
                    &.numbox{
                        height:70px;
                        line-height:70px;
                        label{
                            display:block;
                            float:left;
                        }
                        .numbox-item{
                            position: relative;
                            width: 66%;
                            height:100%;
                            float: left;
                            left:-10px;
                            text-align:left;
                            .mui-numbox{
                                margin-top:8px;
                                float:left;
                            }
                            .tips{
                                position:absolute;
                                bottom:0;
                                left:6px;
                                font-size:.5rem;
                                color:nth($baseColor,3);
                                height:25px;
                                line-height:25px;
                            }
                        }
                    }
                    &.photo{
                        height:auto;
                        overflow:hidden;
                        padding-bottom:5px;
                        .image-list{
                            padding-top:10px;
                            width:70%;
                            float: right;
                            .image-item{
                                li{
                                    list-style:none;
                                    float: left;
                                    margin-right:7px;
                                    margin-top:5px;
                                    img{
                                        width:50px;
                                    }
                                    &.plus{
                                        span{
                                            display:inline-block;
                                            width:50px;
                                            height:50px;
                                            text-align: center;
                                            line-height:50px;
                                            font-size:4.5rem;
                                            color: lighten(nth($baseColor,2),70%);
                                            border:1px solid lighten(nth($baseColor,2),70%);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .content{
                    width:95vw;
                    margin:10px auto;
                    margin-left: 14px;
                    #editor{
                        border:1px solid lighten(nth($baseColor,2),80%);
                        height:60vh;
                    }
                    .limit{
                        text-align:right;
                        font-size:.5rem;
                        color:lighten(nth($baseColor,2),70%);
                    }
                    .add-btn-group{
                        margin-top:5px;
                    }
                }
            }
        }
    }
    .quill-editor{
        width:95vw;
    }
    .ql-container{
        height:220px;
        padding-bottom:7px;
    }
    .ql-toolbar.ql-snow .ql-formats{
        margin-right:1px;
        button{
            width:25px;
        }
    }
</style>
<script>
    import vHead from '../common/header.vue'
    import vFooter from '../common/footer.vue'
    import Vue from 'vue'
    import VueQuillEditor from 'vue-quill-editor'
    import vLoading from '../component/loading.vue'
    import vModal from '../component/dialog.vue'


    Vue.use(VueQuillEditor);

    export default {
        data(){
            return{
                loading:{
                    show:false,
                    type:2,
                    msg:'正在上传...',
                    mask:true,
                    isAnimation:true
                },
                modal:{
                    show:false,
                    isHeader:true,
                    title:'友情提示',
                    isFooter:true,
                    yes:'确定',
                    cancel:'取消',
                    content:''
                },
                show:true,
                isBack:false,
                title:'发布',
                current:'release',
                isSlotLeft:true,
                isSlotRight:true,
                isLocation:false,
                isPhoto:false,
                isAuthor:false,
                nowLength:0,
                surplusSum:2000,
                surplusLength:0,
                type:0,
                article:{
                    title:'',
                    sum:100,
                    address:'',
                    photos:'',
                    author:'',
                    content:'',
                    location:'',
                    venue:'',
                    date:'',
                },
                uploadUrl:'http://localhost/test/upload.php',
                fileName:'upload_file',
                editorOption:{
                    debug: 'none',
                    modules: {
                        toolbar:[
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote', 'code-block'],
                            [{ 'header': 1 }, { 'header': 2 }],
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            [{ 'align': [] },'image'],
                        ]
                    },
                    placeholder: '请填写活动内容...',
                    readOnly: false,
                    theme: 'snow'
                },
                content:'',
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
            vFooter,
            vLoading,
            vModal
        },
        methods:{
            getNowFormatDate() {
                let date = new Date(),
                 seperator1 = "-",
                 seperator2 = ":",
                 month = date.getMonth() + 1,
                 strDate = date.getDate(),
                 hours = date.getHours(),
                 minutes = date.getMinutes(),
                 seconds = date.getSeconds();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                if(hours >= 0 && hours <= 9){
                    hours = "0" + hours;
                }
                if (minutes >= 0 && minutes <= 9) {
                    minutes = "0" + minutes;
                }
                if (seconds >= 0 && seconds <= 9) {
                    seconds = "0" + seconds;
                }

                let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                    + " " + hours + seperator2 + minutes
                    + seperator2 + seconds;
                //return currentdate;
                this.article.date = currentdate;
            },
            yes(e){

            },
            no(e){

            },
            submit(){
                this.article.content = this.editor.container.firstChild.innerHTML;
                mui.alert(JSON.stringify(this.article));
            },
            cancel(){
                this.$router.go(-1);
            },
            onEditorBlur(editor) {

            },
            onEditorFocus(editor) {
                editor.enable(true);
            },
            onEditorReady(editor) {

            },
            onEditorChange({ editor, html, text }) {
                this.content = html;
                let textLength = this.nowLength = html.length;
                if (textLength > this.surplusSum) {
                    //editor.enable(false);
                }
            },
            getLocation(type=''){
                this.isLocation=!this.isLocation;
                let self = this;
                if(this.isLocation){
                    mui.plusReady(function () {
                        plus.nativeUI.showWaiting("定位中...");
                        plus.geolocation.getCurrentPosition(function(p){
                            let params={
                                ak: 'xooZZG25yNjbmCFGytrRyor0',
                                callback: 'renderReverse',
                                output: 'json',
                                location: p.coords.latitude+","+p.coords.longitude,
                                coordtype: p.coordsType+'ll',
                                pois:0
                            };
                            mui.ajax("http://api.map.baidu.com/geocoder/v2/", {
                                data:params,
                                dataType: 'json',
                                type: 'post',
                                timeout:1e4,
                                success: function(data) {
                                    plus.nativeUI.closeWaiting();
                                    data = data.result;
                                    switch (type) {
                                      case 'address':
                                        self.article.address=data.formatted_address;
                                        self.type=0;
                                        break;
                                      case 'venue':
                                        self.article.venue=data.formatted_address;
                                        self.type=1;
                                        break;
                                      default:
                                      	self.type=2;
                                        self.article.location=data.formatted_address;
                                    }
                                },
                                error: function(xhr, type, error) {
                                    plus.nativeUI.closeWaiting();
                                    mui.alert('获取位置信息超时');
                                }
                            });
                        }, function ( e ) {
                            plus.nativeUI.closeWaiting();
                            mui.alert('请打开定位服务');
                        },{geocode:true});
                    });
                }else{
                  switch (type) {
                    case 'address':
                      self.article.address='';
                      break;
                    case 'venue':
                      self.article.venue='';
                      break;
                    default:
                      self.article.location='';
                  }
                }
            },
            getImage(){
                this.isPhoto=!this.isPhoto;
            },
            getAuthor(){
                this.isAuthor=!this.isAuthor;
            },
            /*选择上传图片切换*/
            onFileChange(e){
                let self=this;
                let fileInput=e.target;
                if(fileInput.files.length==0){
                    return
                }
                this.editor.focus();
                if(fileInput.files[0].size>1024*1024*100){

                }
                let data=new FormData;
                data.append(this.fileName,fileInput.files[0]);
                this.loading.show=true;
                this.$axios.post(this.uploadUrl,data).then(function(res){
                    if(res.data) {
                        self.editor.insertEmbed(self.editor.getSelection().index, 'image', res.data.url);
                    }
                }).catch(function(error) {
                    self.loading.show=false;
                    self.modal.show=true;
                    self.modal.content='错误的请求';
                });
            },
            /*点击上传图片按钮*/
            imgClick(state) {
                let self=this,
                    range = self.editor.getSelection();

                if(state){
                    if(!this.uploadUrl){
                        console.log('no editor uploadUrl');
                        return;
                    }
                    /*内存创建input file*/
//                    let input=document.createElement('input');
//                    input.type='file';
//                    input.name=this.fileName;
//                    input.accept='image/jpeg,image/png,image/jpg,image/gif';
//                    input.onchange=this.onFileChange;
//                    input.click();

                    mui.plusReady(function () {
                        plus.nativeUI.actionSheet({
                            title: "选择图片",
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
                                            let s = entry.toLocalURL() + "?version=" + new Date().getTime();
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
                                        plus.zip.compressImage({
                                            src: path,
                                            dst: "_doc/" + path,
                                            overwrite: true,
                                            quality: 50
                                        }, function(e) {
                                            let imagePath = e.target;
                                            self.editor.insertEmbed(range.index,'image','http://4493bz.1985t.com/uploads/allimg/160414/3-160414162642.jpg');
                                        }, function(err) {
                                            mui.alert("压缩失败：" + err.message);
                                        });
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
            }
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        },
        mounted(){
            const gallery = document.querySelector('.release'),
                header = document.querySelector('header');
            if(header && gallery){
                gallery.style.marginTop=header.clientHeight + "px";
            }
            this.$refs.myQuillEditor.quill.getModule('toolbar').addHandler('image', this.imgClick);
            this.surplusLength = this.surplusSum;
            mui('#myNumbox').numbox()
        }
    }
</script>
