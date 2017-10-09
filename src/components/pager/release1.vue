<template>
    <div class="release">
        <v-head :show="show" :isBack="isBack" :isSlotLeft="isSlotLeft" :isSlotRight="isSlotRight" :title="title">
            <div slot="header-left">
                <button type="button" @click="cancel">取消</button>
            </div>
            <div slot="header-right">
                <button type="button" class="upload" @click="submit">提交</button>
            </div>
        </v-head>
        <div class="release-content">
            <div class="mui-input-group">
                <div class="mui-input-row">
                    <label>活动名称：</label>
                    <input type="text" class="mui-input-clear" placeholder="活动名称">
                </div>
                <div class="mui-input-row">
                    <label>活动地点：</label>
                    <input type="text" class="mui-input-clear" placeholder="活动地点">
                </div>
                <div class="mui-input-row numbox">
                    <label>参与人数：</label>
                    <div class="numbox-item">
                        <div class="mui-numbox" data-numbox-step='10' data-numbox-min='100' data-numbox-max='1000'>
                            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                            <input class="mui-numbox-input" type="number" value="100"/>
                            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
                        </div>
                        <div class="tips">*参与人数在100-1000之间</div>
                    </div>
                </div>
                <div class="mui-input-row">
                    <label>活动时间：</label>
                    <input type="text" class="mui-input-clear" placeholder="活动时间">
                </div>
                <div class="mui-input-row" v-show="isLocation">
                    <label>发布地点：</label>
                    <input type="text" class="mui-input-clear" v-model="location" placeholder="发布地点">
                </div>
                <div class="mui-input-row" v-show="isAuthor">
                    <label>发布人：</label>
                    <input type="text" class="mui-input-clear" v-model="author" placeholder="发布人">
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
                    <!-- bidirectional data binding（双向数据绑定） -->
                    <quill-editor ref="myQuillEditor"
                                  :options="editorOption"
                                  @blur="onEditorBlur($event)"
                                  @focus="onEditorFocus($event)"
                                  @ready="onEditorReady($event)"
                                  @change="onEditorChange($event)">
                    </quill-editor>
                    <div class="add-btn-group">
                        <span class="mui-badge" :class="isLocation?'mui-badge-primary':''" @click="getLocation">
                            <i class="fa fa-map-marker"></i>&nbsp;所在位置</span>
                        <span class="mui-badge" :class="isPhoto?'mui-badge-primary':''" @click="getImage">
                            <i class="fa fa-picture-o"></i>&nbsp;添加图片
                        </span>
                        <span class="mui-badge" :class="isAuthor?'mui-badge-primary':''" @click="getAuthor">
                            <i class="fa fa-user"></i>&nbsp;发布人</span>
                    </div>
                </div>
            </div>
        </div>
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
                        width:30%;
                        font-size:1rem;
                    }
                    input{
                        padding-top:2.5rem;
                        width:70%;
                        font-size:1.2rem;
                    }
                    &.numbox{
                        height:70px;
                        line-height:70px;
                        position: relative;
                        .numbox-item{
                            width:70%;
                            float: left;
                            .mui-numbox{
                                position:absolute;
                                top:.5rem;
                            }
                            .tips{
                                position:absolute;
                                bottom:-25%;
                                font-size:.5rem;
                                color:nth($baseColor,3);
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
                    width:92vw;
                    margin:10px auto;
                    #editor{
                        border:1px solid lighten(nth($baseColor,2),80%);
                        height:60vh;
                    }
                    .add-btn-group{
                        margin-top:5px;
                    }
                }
            }
        }
    }
    .ql-container{
        height:220px;
        padding-bottom:8px;
    }
    .ql-toolbar.ql-snow .ql-formats{
        margin-right:10px;
    }
</style>
<script>
    import vHead from '../common/header.vue'
    import vFooter from '../common/footer.vue'
    import Vue from 'vue'
    import VueQuillEditor from 'vue-quill-editor'
    Vue.use(VueQuillEditor);

    export default {
        data(){
            return{
                show:true,
                isBack:false,
                title:'发布',
                current:'release',
                isSlotLeft:true,
                isSlotRight:true,
                isLocation:false,
                isPhoto:false,
                isAuthor:false,
                location:'',
                photos:'',
                author:'',
                value:{
                    type:String
                },
                /*上传图片的地址*/
                uploadUrl:{
                    type:String,
                    default:'http://localhost/test/upload.php'
                },
                /*上传图片的file控件name*/
                fileName:{
                    type:String,
                    default: 'upload_file'
                },
                editorOption:{
                    debug: 'none',
                    modules: {
//                        toolbar:[
//                            ['bold', 'italic', 'underline', 'strike'],
//                            ['blockquote', 'code-block'],
//                            [{ 'header': 1 }, { 'header': 2 }],
//                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//                            [{ 'align': [] }],
//
//                        ]
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
            vFooter
        },
        methods:{
            submit(){

            },
            cancel(){
                this.$router.go(-1);
            },
            onEditorBlur(editor) {

            },
            onEditorFocus(editor) {

            },
            onEditorReady(editor) {

            },
            onEditorChange({ editor, html, text }) {
                console.log('editor change!', editor, html, text);
                this.content = html;
            },
            getLocation(){
                this.isLocation=!this.isLocation;
                mui.plusReady(function () {
                    //定位
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
                            timeout: 10000,
                            success: function(data) {
                                mui.alert(JSON.stringify(data));
                                data = data.result;
                                this.location=data.addressComponent.district;
                            },
                            error: function(xhr, type, errorThrown) {
                                mui.alert(JSON.stringify(errorThrown));
                            }
                        });
                    }, function ( e ) {
                        console.log(e.message);
                    },{geocode:true});
                });
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
                    this.$alert('图片不能大于600KB', '图片尺寸过大', {
                        confirmButtonText: '确定',
                        type: 'warning',
                    });
                }
                let data=new FormData;
                data.append(this.fileName,fileInput.files[0]);
                this.axios.post(this.uploadUrl,data).then(function(res){
                    if(res.data) {
                        self.editor.insertEmbed(self.editor.getSelection().index, 'image', res.data.url);
                    }
                })
            },
            /*点击上传图片按钮*/
            imgClick() {
                if(!this.uploadUrl){
                    console.log('no editor uploadUrl');
                    return;
                }
                /*内存创建input file*/
                let input=document.createElement('input');
                input.type='file';
                input.name=this.fileName;
                input.accept='image/jpeg,image/png,image/jpg,image/gif';
                input.onchange=this.onFileChange;
                input.click()
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
        }
    }
</script>