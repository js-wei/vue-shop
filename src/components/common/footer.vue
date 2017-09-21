<template>
    <footer class="mui-row" v-if="show">
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" :class="(current==m.href)?'mui-active':''"  :to="m.href" v-for="(m,i) in menu">
                <span class="mui-icon" :class="m.icon"></span>
                <span class="mui-tab-label">{{m.title}}</span>
            </router-link>
        </nav>
    </footer>
</template>
<style lang="scss" scoped>
    @import "./static/style/base";
    .footer{
        nav{
            background-color: #fff;
        }
    }
    .mui-bar-tab .mui-tab-item .mui-icon.mui-icon-plusempty {
        border-radius:50%;
        border:1px solid nth($baseColor,5);
        padding-right:4px;
        font-size:1.45rem;
    }
    a.mui-active{
        .mui-icon.mui-icon-plusempty{
            border:1px solid nth($baseColor,3) !important;
        }
    }
    .mui-bar-tab .mui-tab-item.mui-active{
        color:nth($baseColor,3);
    }
</style>
<script>
    export default {
        data(){
            return{

            }
        },
        methods:{

        },
        props:{
            title:String,
            menu:Array,
            current:String,
            show:{
                type:Boolean,
                default:true
            }
        },
    }
</script>