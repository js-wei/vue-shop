<template>
    <div class="index">
        <v-head :show="show" :isBack="isBack" :title="title"></v-head>
        <v-slider :slider="slider"></v-slider>
        <v-footer :menu="menu" :current="current"></v-footer>
        <div class="mui-content container">
            <div class="mui-row">
                <div class="mui-col-sm-12">
                    <h2>热门活动</h2>
                    <div class="release-list">
                        <ul class="mui-table-view mui-table-view-chevron">
                            <li class="mui-table-view-cell mui-media">
                                <a class="mui-navigate-right">
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
                                </a>
                            </li>
                            <li class="mui-table-view-cell mui-media">
                                <a class="mui-navigate-right">
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
                                </a>
                            </li>
                            <li class="mui-table-view-cell mui-media">
                                <a class="mui-navigate-right">
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
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import "./static/style/base";
    .index{
        .container{
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
    import vSlider from '../component/slider.vue'
    import vFooter from '../common/footer.vue'

    export default {
        data(){
            return{
                show:true,
                isBack:false,
                title:'首页',
                current:'index',
                slider:{
                    show:true,
                    loop:true,
                    title:true,
                    timer:4e3,
                    indicator:true,
                    images: [
                        {
                            title: '穿越灵白线--挑战自我极限',
                            href: 'http://baidu.com',
                            src: 'static/images/01.gif'
                        },
                        {
                            title: '大阳山森林水上世界--激情一夏',
                            href: 'http://baidu.com',
                            src: 'static/images/02.jpg'
                        },
                        {
                            title: '西藏日喀则远行--寻找心灵的归属',
                            href: 'http://baidu.com',
                            src: 'static/images/03.jpg'
                        }
                    ]
                },
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
            vSlider,
            vFooter,
        },
        methods:{
            createProgressbar(count,totals,id){
                let progress = count/totals*100;
                mui("#progressbar"+id).progressbar({progress:progress}).show();
            }
        }
    }
</script>
