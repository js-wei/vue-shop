<template>
    <header class="mui-bar mui-bar-nav">
        <div class="mui-row header-row">
            <div class="mui-col-sm-2 mui-col-xs-2 header-search mui-text-left" v-if="isBack && !offCanvas">
                <span class="mui-icon mui-icon-extra mui-icon-extra-sweep barcode hide"></span>
                <span class="mui-icon mui-icon-back"></span>
            </div>
            <div class="mui-col-sm-8 mui-col-xs-8 header-title mui-text-center">
                <div class="mui-input-row mui-search hide" v-if="isSearch">
                    <input type="search" class="mui-input-clear"  v-model="search" @keyup.enter="onEnter(search)" placeholder="请输入关键词/@用户名">
                </div>
                <div class="mui-title">这是一个标题</div>
            </div>
            <div class="mui-col-sm-2 mui-col-xs-2 header-chat mui-text-right">
                <!--<span class="mui-icon mui-icon mui-icon-bars categray"></span>-->
                <span class="mui-icon mui-icon-home hide"></span>
                <span class="mui-icon-extra mui-icon-extra-share"></span>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
    @import "./static/style/base";
    header{
        width:100%;
        background-color:nth($baseColor,4);
        line-height:3rem;
        text-align:center;
        font-size:1.8rem;
        color:nth($baseColor,1);
        .mui-title{
            color:nth($baseColor,1);
        }
        .mui-icon{
            font-size:2.3rem;
            position:relative;
            top: -5px;
        }
        .mui-icon-extra{
            font-size:1.5rem;
            margin-top:0;
        }
    }
</style>
<script>
    export  default {
        data(){
            return {
              height:45
            };
        },
        props: {
            title: String,            // 标题
            isBack: {                 // 是否有返回按钮
                type: Boolean,
                default: true
            },
            isRewriteBackEvent: {     // 是否重写返回事件
                type: Boolean,
                default: false
            },
            isSearch: {              // 是否带有所有框
                type: Boolean,
                default: false
            },
            BackEvent: Function,       // 重写返回事件
            menu: {
                type: Array
            },
            offCanvas: Object,         // 侧滑选项
            change: Function,          // 搜索框的值发生改变执行该方法
            onEnter: Function,         // 回车事件
        },
        watch: {
            search(val, oldVal) {
                this.change(val, oldVal);
            }
        },
        methods: {
        },
        mounted() {
            if(this.isRewriteBackEvent) {
                document.querySelector(".mui-action-back").addEventListener("tap", () => {

                    this.BackEvent();
                })
            }

            // 菜单列表
            mui(".mui-table-view").on("tap", "a", () => {
                mui('.mui-popover').popover('toggle');
            })
        }
    }
</script>