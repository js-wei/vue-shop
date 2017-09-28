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
        <v-footer :menu="menu" :current="current"></v-footer>
    </div>
</template>
<style lang="scss">
    @import "./static/style/base";
</style>
<script>
    import vHead from '../common/header.vue'
    import vFooter from '../common/footer.vue'

    export default {
        data(){
            return{
                show:true,
                isBack:false,
                title:'发布',
                current:'release',
                isSlotLeft:true,
                isSlotRight:true,
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
            }
        },
        mounted(){
            const gallery = document.querySelector('.release'),
                header = document.querySelector('header');
            if(header && gallery){
                gallery.style.marginTop=header.clientHeight + "px";
            }
            mui.plusReady(function () {
                //定位
                plus.geolocation.getCurrentPosition(function(p){
                    var params={
                        ak: 'xooZZG25yNjbmCFGytrRyor0',
                        callback: 'renderReverse',
                        output: 'json',
                        location: p.coords.latitude+","+p.coords.longitude,
                        coordtype: p.coordsType+'ll',
                        pois:0
                    };
                    mui.ajax("http://api.map.baidu.com/geocoder/v2/", {
                        data:params,
                        dataType: 'json', //服务器返回json格式数据
                        type: 'post', //HTTP请求类型
                        timeout: 10000, //超时时间设置为10秒；
                        success: function(data) {
                            mui.alert(JSON.stringify(data))
                        },
                        error: function(xhr, type, errorThrown) {
                            console.log(errorThrown)
                        }
                    });
                }, function ( e ) {
                   console.log(e.message);
                },{geocode:true});
            });
        }
    }
</script>