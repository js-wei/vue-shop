<template>
    <div class="release">
        <v-head :title="title"></v-head>
        <div class="release-list">
            <ul class="mui-table-view mui-table-view-chevron">
                <li class="mui-table-view-cell mui-media">
                    <!--<a class="mui-navigate-right">-->

                    <!--</a>-->
                    <router-link to="/details/1" class="mui-navigate-right">
                        <img class="mui-media-object mui-pull-left" src="static/images/logo.png"  @load="createProgressbar(90,1000,1)">
                        <div class="mui-media-body">
                            <h4>灵白线5小时挑战翻越</h4>
                            <p>开启人数:1000</p>
                            <p>参与人数:90</p>
                            <p>发布时间:2017-05-06</p>
                            <div class="progressbar">
                                <p>完成进度:</p>
                                <p class="mui-progressbar" id="progressbar1">
                                    <span></span>
                                </p>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <router-link to="/details/2" class="mui-navigate-right">
                        <img class="mui-media-object mui-pull-left" src="static/images/logo.png"  @load="createProgressbar(500,500,2)">
                        <div class="mui-media-body">
                            <h4>太湖西山野人基地训练</h4>
                            <p>开启人数:500</p>
                            <p>参与人数:500</p>
                            <p>发布时间:2017-09-06</p>
                            <div class="progressbar">
                                <p>完成进度:</p>
                                <p class="mui-progressbar" id="progressbar2">
                                    <span></span>
                                </p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import "static/style/base";
    .release{
        height:auto;
        padding-bottom:10px;
        .release-list{
           padding-bottom:50px;
           .mui-table-view{
               .mui-table-view-cell{
                   .mui-navigate-right{
                       height:auto;
                       width:auto;
                       overflow:hidden;
                       padding:2px;
                       .mui-media-object{
                           width:80px !important;
                           height:80px !important;
                           max-width:80px !important;
                           margin-top:20px;
                       }
                       .mui-media-body{
                           width:70vw;
                           h4{
                               font-weight:normal;
                           }
                           p{

                           }
                           .progressbar{
                               p{
                                   width:25%;
                                   float:left;
                               }
                               .mui-progressbar{
                                   margin-top:10px;
                                   width:70%;
                                   float: left;
                                   margin-left:5px;
                                   span{
                                       background-color:nth($baseColor,3) !important;
                                   }
                               }
                           }
                       }
                   }
               }
           }
        }
    }
    @media screen and (max-width:320px){
        html{
            font-size:65.8%;
        }
        .release{
            .release-list{
                .mui-table-view{
                    .mui-table-view-cell{
                        .mui-navigate-right{
                            .mui-media-body{
                                .progressbar{
                                    .mui-progressbar{
                                        width: 58%;
                                        margin-left:10px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<script>
    import vHead from '../common/header.vue'
    export default {
        data(){
            return{
                title:'我的发布',
                progress:0
            }
        },
        components:{
          vHead
        },
        methods:{
            createProgressbar(count,totals,id){
                let progress = count/totals*100;
                mui("#progressbar"+id).progressbar({progress:progress}).show();
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