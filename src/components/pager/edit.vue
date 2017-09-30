<template lang="html">
    <div class="edit">
        <v-head :title="title"></v-head>
        <div class="toolbar" v-if="isLogin">
            <div class="function">
                <router-link to="/avatar">
                    <div class="toolbar-left">
                        头像
                    </div>
                    <div class="toolbar-right">
                        <img src="static/images/logo.png" alt="">
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </router-link>
            </div>
            <div class="function border-top">
                <a href="javascrit:;" @click="editor('nickname')">
                    <div class="toolbar-left">
                        用户名
                    </div>
                    <div class="toolbar-right">
                        漫天飘雪浓浓情
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </a>
                <!--<router-link to="/information/12/2"></router-link>-->
            </div>
            <div class="function border-top auto">
                  <a href="javascript:;" @click="editor('information')">
                    <div class="toolbar-left">
                       个性签名
                    </div>
                    <div class="toolbar-right">
                      <p>聪明的人总是会创造机会,而懒惰的人则会抱怨总是没有机会.</p>
                      <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                  </a>
                <!--<router-link to="/information/12/1"></router-link>-->
            </div>
            <div class="function margin-top">
                <a href="javascript:;" class="chocie-sex">
                    <div class="toolbar-left">
                        性别
                    </div>
                    <div class="toolbar-right">
                        <span id="sex">男</span>
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </a>
            </div>
            <div class="function border-top">
                <a href="javascript:;" class="dtpicker" data-options='{"type":"date","beginYear":1970,"endYear":2250}'>
                    <div class="toolbar-left">
                        生日
                    </div>
                    <div class="toolbar-right">
                        <span id="date">1988-4-14</span>
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </a>
            </div>
            <div class="function border-top">
                <a href="javascript:;" id="showCityPicker">
                    <div class="toolbar-left">
                        地区
                    </div>
                    <div class="toolbar-right">
                       <span id="area">江苏省,苏州市</span>
                       <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </a>
            </div>
        </div>
        <v-modal :modal="modal" v-on:ok="yes" v-on:cancel="no">
            <div slot="modal-content">
                <div class="edit-content-item">
                    <h5 v-html="'请输入'+tips"></h5>
                    <textarea :placeholder="'请输入'+tips" :class="name" v-model="content"></textarea>
                    <div class="mui-row btn">
                        <p class="mui-col-sm-6" v-html="'您还可以输入'+count+'个字符'"></p>
                        <div class="mui-col-sm-6 btn-group">
                            <button type="button" class="mui-btn mui-btn-mini cancel" @click="no">取消</button>
                            <button type="button" class="mui-btn mui-btn-mini yes" @click="yes">确定</button>
                        </div>
                    </div>
                </div>
            </div>
        </v-modal>
    </div>
</template>
<style lang="scss" scoped>
    @import "static/style/base";
    .edit{
        height:100vh;
        position:relative;
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
                    font-size:1.5rem;
                    color:lighten( nth($baseColor,2),50%);
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
                        color:lighten( nth($baseColor,2),50%);
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
                &.auto{
                    height:auto;
                    overflow:hidden;
                    padding-bottom:2px;
                    width:100vw;
                    position: relative;
                    .toolbar-left{
                        width:18%;
                        height:auto;
                    }
                    .toolbar-right{
                        width:82%;
                        p{
                            line-height:1.5rem;
                            width:70%;
                            position:absolute;
                            top:10px;
                            left:20%;
                            text-align:left;
                        }
                        span{
                            position:absolute;
                            top:15px;
                            right:12px;
                        }
                    }
                }
            }
        }
    }
    .edit-content-item{
        text-align:center;
        position:relative;
        h5{
            margin-bottom:10px;
        }
        textarea{
            margin-bottom:10px;
            &::placeholder{
                font-size:1.2rem;
            }
        }
        p{
            font-size:.8rem;
            height:2rem;
            line-height:2rem;
            text-align:left;
        }
        .btn-group{
            position:absolute;
            top:73%;
            right:-20px;
            .cancel{

            }
            .yes{
                background-color:nth($baseColor,3);
                color:nth($baseColor,1);
                border-color:nth($baseColor,3);
            }
        }
    }
</style>
<script>
    import vHead from '../common/header.vue'
    import '../../../static/javascript/mui.picker.min.js'
    import '../../../static/javascript/mui.poppicker.js'
    import cityData from '../../../static/javascript/city.data.js'
    import vModal from '../component/dialog.vue'

    export default {
        data(){
            return{
                title:'编辑资料',
                isLogin:true,
                content:'',
                count:0,
                sums:0,
                tips:'',
                placeholder:'',
                name:'',
                modal:{
                    show:false,
                    isHeader:false,
                    isFooter:false,
                    title:'',
                    yes:'确定',
                    cancel:'取消',
                    position:'bottom',
                    width:'100%',
                    height:'200px'
                }
            }
        },
        components:{
            vHead,
            vModal
        },
        methods:{
            yes(){
                //this.content='';
                if(this.content==''){
                    mui.toast('请填写'+this.tips);
                    return false;
                }
                if(this.content.length>this.sums){
                    mui.toast(this.tips+'超过字数限制');
                    return false;
                }
                mui.alert(this.tips+'修改成功');
                setTimeout(()=>{
                    location.reload();
                },2e3);
                this.modal.show=false;
            },
            no(){
                this.content='';
                this.modal.show=false;
            },
            editor(t){
                switch (t){
                    case 'nickname':
                        this.tips='昵称';
                        this.name='nickname';
                        this.sums = this.count =8;
                        this.modal.show=true;
                        break;
                    case 'information':
                        this.tips='个性签名';
                        this.name='information';
                        this.sums = this.count = 50;
                        this.modal.show=true;
                        break;
                }
            }
        },
        watch:{
            'content':function(o,n){
                let left = this.sums - parseInt(o.length);
                if(left>=0){
                    this.count = left;
                }else{
                    this.content=o.substring(0,this.sums);
                    return '';
                }
            }
        },
        mounted(){
            let gallery = document.querySelector('.edit'),
                header = document.querySelector('header');
            if(header && gallery){
                gallery.style.marginTop=header.clientHeight + 10 + "px";
            }
            let btn = document.querySelector('.dtpicker');
            btn.addEventListener('tap',(e)=>{
                let optionsJson = btn.getAttribute('data-options') || '{}',
                    options = JSON.parse(optionsJson);
                let picker = new mui.DtPicker(options);
                picker.show(function(rs) {
                    let date = rs.value;
                    mui.toast('生日修改成功');
                    document.querySelector('#date').innerText=date;
                    picker.dispose();
                });
            },false);

             let sex = new mui.PopPicker();
             sex.setData([
                {
                    value: '1',
                    text: '男'
                }, {
                    value: '2',
                    text: '女'
                }
              ]);
            document.querySelector('.chocie-sex').addEventListener('tap',(e)=>{
                sex.show(function(items) {
                  let sex = items[0].text;
                  document.querySelector('#sex').innerText=sex;
                  mui.toast('性别修改成功');
    			});
            });

            let cityPicker = new mui.PopPicker({
  				layer: 2
  			});
            cityPicker.setData(cityData);
            let showCityPickerButton = document.getElementById('showCityPicker');
                showCityPickerButton.addEventListener('tap', function(event) {
                cityPicker.show(function(items) {
                    let area = items[0].text+','+items[1].text;
                    document.querySelector('#area').innerText=area;
                    mui.toast('地区修改成功');
  				});
  			}, false);
        }
    }
</script>
