<template>
    <div class="message">
        <v-head :title="title"></v-head>
        <div class="message-list">
            <ul class="mui-table-view mui-table-view-chevron message-list-view">
                <li class="mui-table-view-cell mui-media">
                    <a  href="javascript:;" class="">
                        <img class="mui-media-object mui-pull-left" src="static/images/logo.png">
                        <div class="mui-media-body">
                            不牛不是人
                            <p class="message-title">被赞活动:5小时翻越灵白线</p>
                            <p class="mui-ellipsis"><i class="fa fa-thumbs-o-up"></i></p>
                            <p>04-24</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a class='mui-navigate-right' href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="static/images/logo.png">
                        <div class="mui-media-body">
                            系统消息
                            <p class="mui-ellipsis">静静的看这个世界，最后终于疯了</p>
                            <p>04-24</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a class="mui-navigate-right" href="javascript:;">
                        <img class="mui-media-object mui-pull-left" src="static/images/logo.png">
                        <div class="mui-media-body">
                            系统消息
                            <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                            <p>04-24</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .message{
        .message-list{
            .message-list-view{
               li{

                   a{
                      .mui-media-object{

                      }
                       .mui-media-body{
                            p{
                                height:auto;
                                padding:4px;
                                &.message-title{
                                    font-size:1.6rem;
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
                title:'消息'
            }
        },
        components:{
            vHead
        },
        mounted(){
            const gallery = document.querySelector('.message'),
                header = document.querySelector('header');
            if(header && gallery){
                gallery.style.marginTop=header.clientHeight + "px";
            }
        }
    }
</script>